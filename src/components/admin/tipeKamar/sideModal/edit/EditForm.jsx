import FileForm from "@/components/admin/form/FileForm";
import InputForm from "@/components/admin/form/InputForm";
import SelectForm from "@/components/admin/form/SelectForm";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import XIcon from "@/components/icons/XIcon";
import user from "@/service/user";
import { IMAGE_SOURCE_URL } from "@/utils/const";
import { useState } from "react";
import { toast } from "react-toastify";





function EditForm({onChangePage, dataUser, onClose}){
    const [formState, setFormState] = useState({
        username : dataUser.username,
        foto : null,
        email : dataUser.email,
        password : "",
        role : dataUser.role
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

    function backToShow(){
        onChangePage(1);
    }

    async function sendData(e){
        e.preventDefault();
        try {
            // toast(JSON.stringify(formState))
            const result = await user.updateUser(dataUser.id,formState);
            toast.success("data berhasil ditambahkan");
            onClose();
            resetState();
        } catch (error) {
            console.log(error.response.data);
            toast.error("ada masalah dalam mengirim data")
        }
    }

    return (
    <>
        <div className="border-b pt-1 py-2 flex justify-between mb-3">
            <button onClick={backToShow} className="flex text-gray-500 hover:bg-slate-100 items-center rounded px-2" >
                <ChevronLeftIcon />
                <h1 className="font-semibold  mr-3">Edit user</h1>
            </button>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>
        
        <form action="" className="flex flex-col px-4 h-full max-h-full ">
            <div className="h-full max-h-full overflow-y-auto">
                <div className="form-list flex flex-col gap-5 overflow-y-auto">
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
                        password <span className="text-xs font-normal text-gray-500">kosongi bila password tetap sama</span>
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
                        fileSrc={IMAGE_SOURCE_URL + dataUser.foto} 
                    >
                        Foto User
                    </FileForm>
                </div>

            </div>
            <div className="w-full mt-5">
                <button onClick={sendData} className="w-full bg-slate-800 text-white px-5 py-1 rounded-sm hover:bg-slate-700 active:bg-slate-600">
                    Edit
                </button>
            </div>
        </form>
    </>
    )
}

export default EditForm;