# Students Management System

## Overview
The Students Management System is a full-stack web application designed to facilitate the management of student data.
It provides functionalities to add, update, delete, and view student records. 
This application is built using **React** for the front-end and **Spring Boot** for the back-end, following RESTful API architecture.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
  
## Features
- Add new student records
- Update existing student information
- Delete student records
- View a list of all students
- Responsive design for mobile and desktop

## Technologies Used
- **Front-end**: React
- **Back-end**: Spring Boot
- **Database**: Mysql Database 
- **API**: RESTful API
- **Version Control**: Git

## API Endpoints

| Method | Endpoint                | Description                         |
|--------|-------------------------|-------------------------------------|
| GET    | `/api/students`        | Retrieve all student records       |
| GET    | `/api/students/{id}`   | Retrieve a student by ID           |
| POST   | `/api/students`        | Add a new student                  |
| PUT    | `/api/students/{id}`   | Update an existing student         |
| DELETE | `/api/students/{id}`   | Delete a student by ID             |
