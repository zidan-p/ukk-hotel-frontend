import FileForm from "@/components/admin/form/FileForm";
import InputForm from "@/components/admin/form/InputForm";
import SelectForm from "@/components/admin/form/SelectForm";
import XIcon from "@/components/icons/XIcon";
import { useState } from "react";
import { toast } from "react-toastify";
import user from "@/service/user";



function CreateForm({onClose}){

    const [formState, setFormState] = useState({
        username : "",
        foto : null,
        email : "",
        password : "",
        role : "admin"
    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormState((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    //sya buat ini supaya meski tak senagaj tertutup statenya masih ada.
    //hal itu karena saya tidak mengapus component ketika tertutup.
    // tapi saya perlu fungsi untuk mereset state;
    function resetState(){
        setFormState({
            username : "",
            foto : null,
            email : "",
            password : "",
            role : "admin"
        })
    }

    function handleOnFileChange(file){
        setFormState((prev) => ({
            ...prev,
            foto : file
        }))
    }

    async function sendData(e){
        e.preventDefault();
        try {
            const result = await user.createUser(formState);
            toast.success("data berhasil ditambahkan");
            onClose();
            resetState();
        } catch (error) {
            console.log(error.response.data);
            toast.error("ada masalah dalam mengirim data")
        }
    }

    function handleClose(){

    }


    return (
        <>
        <div className="border-b pt-1 py-2 flex justify-between">
            <h1 className="font-semibold text-gray-500">Create User</h1>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>
        
        <form action="" className="flex flex-col gap-5 px-4 h-full max-h-full">
            <div className="form-list grow flex max-h-full flex-col gap-5">
                <InputForm 
                    onChange={handleChange} 
                    value={formState.username} 
                    name="username"  
                >
                    Username
                </InputForm>
                <InputForm 
                    onChange={handleChange} 
                    value={formState.email} 
                    name="email" 
                >
                    email
                </InputForm>
                <InputForm 
                    onChange={handleChange}
                    value={formState.password}
                    name="password"
                >
                    password
                </InputForm>
                <SelectForm  
                    onChange={handleChange}
                    value={formState.role}
                    name="role"
                    data={[
                        {
                            label: "Admin",
                            value: "admin"
                        },
                        {
                            label: "Resepsionis",
                            value: "resepsionis"
                        }
                    ]}
                >
                    role admin
                </SelectForm>
                <FileForm 
                    className="mt-5"
                    handleOnChange={handleOnFileChange} 
                    name="foto" 
                    fileSrc=""  
                >
                    Foto User
                </FileForm>
            </div>
            <div className="w-full">
                <button onClick={sendData} className="w-full bg-slate-800 text-white px-5 py-1 rounded-sm hover:bg-slate-700 active:bg-slate-600">
                    Buat
                </button>
            </div>
        </form>
        </>
    )
}

export default CreateForm;