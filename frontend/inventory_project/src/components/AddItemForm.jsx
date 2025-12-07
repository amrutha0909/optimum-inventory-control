import { useState } from "react";
function AddItemForm(){
    const [form,setForm]=useState({
        name:"",
        model:"",
        serialNumber:"",
        location:"",
        status:"Active",
    });
    const [message,setMessage]=useState("");
    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    async function handleSubmit(e){
        e.preventDefault(); //prevents automatic reload
        setMessage("");
        try{
            const res=await fetch("http://localhost:5000/api/machines",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(form),
            });
            const data=await res.json();
            if(res.ok){
                setMessage("Machine added successfully!");
                setForm({
                    name:"",
                    model:"",
                    serialNumber:"",
                    location:"",
                    status:"Active",
                });
            }else{
                setMessage(data.message||"Failed to add machine");
            }
        }catch(err){
            setMessage("Server error: "+err.message);
        }
    }
    return(
        <div className="p-6 rounded-xl shadow-lg bg-white w-full max-w-xl m-20 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Add Machine</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Machine Name</label>
                    <input
                        type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required/>
                </div>
                <div>
                    <label className="block mb-1">Model</label>
                    <input type="text" name="model" value={form.model} onChange={handleChange} className="w-full p-2 border rounded" required/>
                </div>
                <div>
                    <label className="block mb-1">Serial Number</label>
                    <input type="text" name="serialNumber" value={form.serialNumber} onChange={handleChange} className="w-full p-2 border rounded" required/>
                </div>
                <div>
                    <label className="block mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1">Status</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="Active">Active</option>
                        <option value="Under Maintenance">Under Maintenance</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                    Add Machine
                </button>
            </form>
            {message && (
                <p className="mt-4 text-center font-medium text-green-600">{message}</p>
            )}
        </div>
    );
}
export default AddItemForm;