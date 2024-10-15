import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Avatar from 'react-avatar';

const StudentProfile = () => {
	const {id} = useParams();
	const [student, setStudent] = useState({
		firstName:'',
		lastname:'',
		email:'',
		department:'',
	});

	useEffect(()=> {
		loadStudents();
	}, []);

	const loadStudents = async()=>{
		const result = await axios.get(
			`http://localhost:8080/students/student/${id}`);		
			setStudent(result.data);
	};
return (
	<section style={{backgroundColor : "whitesmoke"}} className="shadow">
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-3">
					<div className="card mb-4">
						<div className="card-body text-center">
							<Avatar facebookId="100008343750912" size="150" className="rounded-circle img-fluid"/>
							<h5 className="d-flex justify-content-center mb-2">
								{`${student.firstName} ${student.lastname}`}
							</h5>
							<div className="d-flex justify-content-center mb-2">
								<button
									type="button"
									className="btn btn-outline-primary mx-2">
									call
								</button>
								<button
								type="button"
									className="btn btn-outline-primary mx-2">
									Message
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-lg-9">
					<div className="card mb-4">
						<div className="card-body">
							<hr/>
							<div className="row">
								<div className="col-sm-3">
									<h5 className="mb-0">
										FirstName
									</h5>
								</div>

								<div className="col-sm-9">
									<p className="text-muted mb-0">
										{student.firstName}
									</p>
								</div>
							</div>
							<hr/>
							<div className="row">
								<div className="col-sm-3">
									<h5 className="mb-0">
										LastName
									</h5>
								</div>

								<div className="col-sm-9">
									<p className="text-muted mb-0">
										{student.lastname}
									</p>
								</div>
							</div>
							<hr/>
							<div className="row">
								<div className="col-sm-3">
									<h5 className="mb-0">
										Email
									</h5>
								</div>

								<div className="col-sm-9">
									<p className="text-muted mb-0">
										{student.email}
									</p>
								</div>
							</div>
							<hr/>
							<div className="row">
								<div className="col-sm-3">
									<h5 className="mb-0">
										Department
									</h5>
								</div>

								<div className="col-sm-9">
									<p className="text-muted mb-0">
										{student.department}
									</p>
								</div>
							</div>
							<hr/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)
}

export default StudentProfile