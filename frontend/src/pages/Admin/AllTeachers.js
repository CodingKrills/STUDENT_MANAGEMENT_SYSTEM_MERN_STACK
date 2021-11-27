import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import AdminSideBar from '../../components/SideBar/AdminSideBar'
import Header from '../../components/Header/Header'
import AllTeachersTable from '../../components/Tables/AllTeachersTable'

const AllTeachers = () => {

    // ? ================================== Authentication 
    // * use navigate 
    const navigate = useNavigate();

    // * ==== get user state 
    const adminLogin = useSelector((state) => state.adminLogin)
    const { loading, error, userInfo, message } = adminLogin;

    // * USE EFFECT REDIRECT TO DASH BOARD 
    useEffect(() => {
        if (userInfo) {
        } else {
            navigate("/");
        }
    }, [navigate, userInfo])
    // ? ================================== Authentication 

    return (
        <div>
            <Header />
            <AdminSideBar />
            <AllTeachersTable />
        </div>
    )
}

export default AllTeachers
