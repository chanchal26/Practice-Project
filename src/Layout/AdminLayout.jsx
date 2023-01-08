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
            <div style={{ display: 'flex' }}>
                <div>
                    <Sidebar style={{ textDecoration: 'none' }}>
                        <button style={{ border: 'none', display: 'flex', justifyContent: 'end' }} onClick={() => collapseSidebar()}><AiOutlineBars /></button>
                        <Menu>
                            <Link to='/adminPanel/allUsers'>
                                <SubMenu label="All Users">
                                    <MenuItem> Sub Menu 1 </MenuItem>
                                    <MenuItem> Sub Menu 2 </MenuItem>
                                </SubMenu>
                            </Link>
                            <MenuItem><Link to='/adminPanel/addUser'>Add User</Link></MenuItem>
                            <MenuItem><Link to='/adminPanel/addProduct'>Add Product</Link></MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
                <div style={{ width: '100%', }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;