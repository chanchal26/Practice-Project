import React, { useEffect, useRef, useState } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { HiDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './AdminPanel.css'
import Printer, { print } from 'react-pdf-print'


const ids = ['1']
const ref = React.createRef();
const AdminPanel = () => {
    const [users, setUsers] = useState([])
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [refresh]);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteUsers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRefresh(true);
            })
    }
    const tableRef = useRef(null);
    return (
        <div>

            <div className='btn-group'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>PDF</button>}
                </Pdf>
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                    <button>EXCEL</button>

                </DownloadTableExcel>

                <button onClick={() => print(ids)} value='Stampa'>PRINT</button>
                <button>SHOW/HIDE COLUMN</button>
                <input type="text" placeholder="Search Invoice" name="search" />
                <button>ADD USER</button>
            </div>
            <Printer>
                <table id="customers" ref={tableRef} >
                    <tr ref={ref}>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Plan</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <td className='flex'>
                                    <div>
                                        <img src={user.img} alt="" />
                                    </div>
                                    <div>
                                        <p>{user.name}</p>
                                        <small>@{user.name}</small>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.plan}</td>
                                <td>{user.status}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="dropbtn"><HiDotsVertical /></button>
                                        <div class="dropdown-content">
                                            <Link href="#"><button>Edit</button></Link>
                                            <Link href="#"><button onClick={() => handleDelete(user._id)}>Delete</button></Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                    }

                </table>
            </Printer>
        </div>
    );
};

export default AdminPanel;