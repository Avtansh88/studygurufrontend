import React from 'react'
import "./common.css"
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <Link to={'/admin/dashboard'}>
                <div className="icon">
                  <FaHome />
                </div>
                <span>Home</span>
                </Link>
            </li>

               <li>
                <Link to={'/admin/course'}>
                <div className="icon">
                  <SiCoursera />
                </div>
                <span>Course</span>
                </Link>
            </li>

            
               <li>
                <Link to={'/admin/users'}>
                <div className="icon">
                  <FaUser />
                </div>
                <span>User</span>
                </Link>
            </li>

            <li>
                <Link to={'/account'}>
                <div className="icon">
                  <IoLogOutSharp />
                </div>
                <span>Logout</span>
                </Link>
            </li>

            
        </ul>
    </div>
  )
}

export default Sidebar
