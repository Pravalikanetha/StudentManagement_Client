import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import NavBar from "./component/common/Navbar";
import StudentsView from "./component/student/StudentsView";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-students" element={<StudentsView />} />
          <Route exact path="/add-students" element={<AddStudent/>} />
          <Route exact path="/edit-students/:id" element={<EditStudent/>} />
          <Route exact path="/student-profile/:id" element={<StudentProfile/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;