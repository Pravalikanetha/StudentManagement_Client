import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const AddStudent = () => {
	let navigate = useNavigate();
	const [student, setStudent] = useState({
		firstName:'',
		lastname:'',
		email:'',
		department:'',
	});
	const{firstName, lastname, email, department}=student;

	const handleInputChange = (e)=>{
		setStudent({ ...student, [e.target.name] : e.target.value});
	};

	const saveStudent = async (e) => {
		e.preventDefault(); // Prevent form reload
		try {
			await axios.post("http://localhost:8080/students", student);
			navigate("/view-students");
		} catch (error) {
			console.error("Error saving student:", error);
		}
	};


	return (
		<div className = 'col-sm-8 py-2 px-5 offset-2 shadow'>
			<h2 className="mt-4">Add new student</h2>
			<form onSubmit={(e)=> saveStudent(e)}>
				<div className="input-group mb-5">
					<label
					className="input-group-text"
					htmlFor="firstName">
					FirstName
					</label>
					<input
					className="form-control col-sm-6"
					type="text"
					name="firstName"
					id="firstName"
					required
					value={firstName}
					onChange={(e)=> handleInputChange(e)}/>
				</div>
				<div className="input-group mb-5">
					<label
					className="input-group-text"
					htmlFor="lastname">
					lastName
					</label>
					<input
					className="form-control col-sm-6"
					type="text"
					name="lastname"
					id="lastname"
					required
					value={lastname}
					onChange={(e)=> handleInputChange(e)}/>
				</div>
				<div className="input-group mb-5">
					<label
					className="input-group-text"
					htmlFor="email">
					Your Email
					</label>
					<input
					className="form-control col-sm-6"
					type="email"
					name="email"
					id="email"
					required
					value={email}
					onChange={(e)=> handleInputChange(e)}/>
				</div>
				<div className="input-group mb-5">
					<label
					className="input-group-text"
					htmlFor="department">
					Department
					</label>
					<input
					className="form-control col-sm-6"
					type="text"
					name="department"
					id="department"
					required
					value={department}
					onChange= {(e)=> handleInputChange(e)}/>
				</div>
				<div className='row mb-5'>
					<div className='col-sm-2'>
						<button
							type="submit"
							className='btn btn-outline-success btn-lg'>
							Save
						</button>
					</div>
					<div className='col-sm-2'>
						<Link
							to={"/view-students"}
							className='btn btn-outline-warning btn-lg'>
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
  	);
};

export default AddStudent;