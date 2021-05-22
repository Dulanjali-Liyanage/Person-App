import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import {Redirect} from "react-router-dom";

export const Home = () => {
    const [person,setPerson] = useState(); //setPerson is the method to set the state value to the person
    const [personName,setPersonName] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [editPersonName,setEditPersonName] = useState("");

    //Similar to componentDidMount
    useEffect(() => {
       axios.get('/getallperson')
                   .then(res => {
                    const resPerson = res.data;
                    setPerson(resPerson);
                   }).catch((err) => {
                       console.log(err);
                   });
    },[person]); //everytime the person get update this updates (componentDidUpdate)

    const handleDelete = (id,name) =>{
            console.log(id);
            if(
                window.confirm(
                    "Do you want to delete ".concat(name)
                )
            ){
            axios
                .delete('/delete/'.concat(id))
            }

    }

    const handleAdd = () => {
            const newPerson = {
                name: personName
            }
            console.log(newPerson);
            axios
                .post('/addperson',newPerson)
        setPersonName("");

    }

    const handleEdit = (id) => {
            const newPerson = {
                name: editPersonName
            }
            console.log(newPerson);
            axios
                .post("/update/".concat(id),newPerson)
        setEditPersonName("");

    }

    const logout = () => {
        delete axios.defaults.headers.common["Authorization"];
        setRedirect(true);
    }

    function redirectTo() {
        return <Redirect to="/" />;
    }

    if (redirect) return redirectTo();

    return(
    <div>
        <br/>
        <div>

            <label >Person Name:&nbsp;&nbsp;</label>
            <input id="pname" type="text" name="personName" value={personName}
                   onChange={(e) => setPersonName(e.target.value)} />&nbsp;
            <button
                class="btn btn-info"
                onClick = {handleAdd}
            >
            ADD
            </button> &nbsp;
            <button className="btn btn-info" onClick={logout}>
                Logout
            </button>

        </div>
        <br/>

        <div>
            <table className="table table-hover">
                <thead>
                    <tr>

                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {person && person.map( p => {
                        const {id,name} = p;
                        return(
                            <tr>
                                <td>{name}</td>
                                <Popup trigger={<button class="btn btn-info">Edit</button>} modal>
                                    {(close) => (
                                        <div>
                                            <h4>Edit Person Name</h4>
                                            <hr/>
                                            <div>
                                                <label >Person Name:&nbsp;&nbsp;</label>
                                                <input type="text" name="personName" defaultValue={name}
                                                       onChange={(e) => setEditPersonName(e.target.value)} />&nbsp;
                                            </div>
                                            <br/>
                                            <div>
                                                <button class="btn btn-info" onClick={(e) => handleEdit(id)}>Update</button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>


                                &nbsp;<button
                                    class="btn btn-danger"
                                    onClick={(e) => handleDelete(id,name)}
                                    >
                                    Delete
                                </button>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}