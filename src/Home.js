import React from 'react';
import Avatar from 'react-avatar';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
	let navigate = useNavigate();
	const handleButtonClick = () => {
		navigate("/view-students");
	}
  return (
    <div>
		<h1 className="text-center">Welcome to the college portal</h1>
		<hr />
		<div className="d-flex justify-content-center">
			<Avatar facebookId="100008343750912" size="300" className="rounded-circle" />
		</div>
		<div className="d-flex justify-content-center">
			<Link
			to={"/view-students"}
			className="btn btn-dark mt-4"
			onClick={handleButtonClick}>
				Let's go to view students
			</Link>
		</div>
	</div>
  );
};

export default Home;
