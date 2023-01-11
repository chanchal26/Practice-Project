import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { AiOutlineBars } from 'react-icons/ai';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const AdminLayout = () => {

    const { collapseSidebar } = useProSidebar()
    return (
        <div>
            <Navbar />
            <div style={{ display: 'flex', }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "end", }}>

                        <div><button style={{ border: "none", fontSize: "20px" }} onClick={() => collapseSidebar()}><AiOutlineBars style={{ background: "white" }} /></button></div>
                    </div>
                    <Sidebar >

                        <Menu >
                            <Link to='/adminPanel/allUsers' style={{ textDecoration: "none" }}>
                                <SubMenu label="All Users">
                                    <MenuItem> Sub Menu 1 </MenuItem>
                                    <MenuItem> Sub Menu 2 </MenuItem>
                                </SubMenu>
                            </Link>
                            <MenuItem><Link style={{ textDecoration: "none" }} to='/adminPanel/addUser'>Add User</Link></MenuItem>
                            <MenuItem><Link style={{ textDecoration: "none" }} to='/adminPanel/addProduct'>Add Product</Link></MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
                <div style={{ width: '90%', marginLeft: "20px" }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;