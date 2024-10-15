import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt,FaEdit, FaEye} from 'react-icons/fa';
import Search from '../common/Search';

const StudentsView = () => {

	const[students, setStudents] = useState([]);
	const[search, setSearch] = useState("");
	useEffect(()=> {
		loadStudents();
	}, []);

	const loadStudents = async()=>{
		const result = await axios.get(
			"http://localhost:8080/students",{
				validateStatus: () =>{
					return true;
				}
		});
		if(result.status===302){
			setStudents(result.data);
		}
	};

	const handleDelete = async(id)=>{
		await axios.delete(
			`http://localhost:8080/students/delete/${id}`
		);
		loadStudents();
	};

	return (
		<section>
			<Search search={search} setSearch={setSearch}/>
			<table className="table table-bordered table-hover shadow" style={{ borderCollapse: 'collapse', width: '100%', padding:'20px'}}>
				<thead>
					<tr className="text-center mx-5">
						<th style={{ border: '1px solid black' }}>ID</th>
						<th style={{ border: '1px solid black' }}>First Name</th>
						<th style={{ border: '1px solid black' }}>Last Name</th>
						<th style={{ border: '1px solid black' }}>Email</th>
						<th style={{ border: '1px solid black' }}>Department</th>
						<th style={{ border: '1px solid black' }}>Preview</th>
						<th style={{ border: '1px solid black' }}>Update</th>
						<th style={{ border: '1px solid black' }}>Delete</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{students.filter((st)=> 
					st.firstName.toLowerCase().includes(search))
					.map((student, index) => (
						<tr key={student.id} style={{ border: '1px solid black' }}>
							<th scope="row" key={index} style={{ border: '1px solid black' ,padding:'14px'}}>
								{index + 1}
							</th>
							<td style={{ border: '1px solid black',padding:'14px'}}>{student.firstName}</td>
							<td style={{ border: '1px solid black',padding:'14px'}}>{student.lastname}</td>
							<td style={{ border: '1px solid black',padding:'14px'}}>{student.email}</td>
							<td style={{ border: '1px solid black',padding:'14px'}}>{student.department}</td>
							<td className="mx-2" style={{ border: '1px solid black'}}>
								<Link to={`/student-profile/${student.id}`} className='text-center btn mx-1'>
									<FaEye/>
								</Link>
							</td>
							<td className="mx-2" style={{ border: '1px solid black'}}>
								<Link to={`/edit-students/${student.id}`} className='text-center btn mx-1'>
									<FaEdit/>
								</Link>
							</td>
							<td className="mx-2" style={{ border: '1px solid black'}}>	
								<button className="text-center btn mx-1" onClick={()=> handleDelete(student.id)}><FaTrashAlt/></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>

	)
}

export default StudentsView