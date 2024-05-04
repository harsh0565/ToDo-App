import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"
const ToDoList = (props) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [data, setData] = useState([]);
    const [dt, setDt] = useState("")

    const handleInput = (e) => {
        setText(e.target.value);
    };

    const handleDate = (e) => {
        setDt(e.target.value);
        var originalDate = e.target.value;
        var parts = originalDate.split("-");
        var reversedDate = parts.reverse().join("-");
        console.log(reversedDate);
        setDate(reversedDate);
    };

    const addData = () => {
        if (text.trim() === "") {
            toast.error("Please enter an item");
            return;
        }
        if (date.length === 0) {
            toast.error("Please choose the date");
            return;
        }
        const newItem = { text: text, date: date };
        setData((prev) => [...prev, newItem]);
        setText("");
        setDate("");
        setDt("");
        toast.success(`${text} added successfully`);
    };

    const handleDelete = (id) => {
        setData((prev) => prev.filter((e, index) => id !== index));
        toast("Item deleted");
    };

    return (

        <div className="container box">


            <div className="d-flex justify-content-evenly mt-5 box sticky">



                <input className='mb-3' onChange={handleInput} type="text" name="item" id="item" placeholder='Enter an Item' value={text} />


                <input className='mb-3' type="date" onChange={handleDate} value={dt} />

                <button className='btn btn-success mb-2' onClick={addData}>Add</button>


            </div>
            <hr />

            <ToastContainer />
            {data.length !== 0 && (
                <div >


                    {data.map((e, id) => (
                        <div key={id} className="d-flex justify-content-between mt-3 bg-body-tertiary box">
                            <div className='m-3 box2  overflow-hidden text-capitalize'>
                                {e.text}
                            </div>
                            <div className='m-3'>
                                {e.date}
                            </div >
                            <button className='btn btn-danger m-3' onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default ToDoList;
