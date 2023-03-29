import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import XIcon from "@/components/icons/XIcon";
import Image from "next/image";
import { IMAGE_SOURCE_URL } from "@/utils/const";





function ShowForm({onChangePage, dataUser, onClose}){

    function goToDelete(){
        onChangePage(3)
    }

    function goToEdit(){
        onChangePage(2)
    }

    return (
        <>
        <div className="border-b pt-1 py-2 flex justify-between">
            <h1 className="font-semibold text-gray-500 self-center">{dataUser.username}</h1>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>
         
        <div className="p-2 mb-4 rounded mt-3 py-5">
            <Image className=" mx-auto" src={IMAGE_SOURCE_URL + dataUser.foto} width={300} height={300} alt="gambar user" />
            
            {/* <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(dataUser,null,2)}
            </pre> */}
        </div>

        <div className="h-full">
            <ul className="flex flex-col gap-2 px-4">
                <li className="flex">
                    <p className="basis-1/2 text-gray-500">Username</p>
                    <p className="basis-1/2 grow-0 font-medium break-words">{dataUser.username}</p>
                </li>
                <li className="flex">
                    <p className="basis-1/2 text-gray-500">Role</p>
                    <p className="basis-1/2 grow-0 font-medium break-words">{dataUser.role}</p>
                </li>
                <li className="flex">
                    <p className="basis-1/2 shrink-0 text-gray-500">email</p>
                    <div className="basis-1/2 overflow-hidden grow-0 font-medium break-words whitespace-pre-line">
                        <p className="max-w-full">{dataUser.email}</p>
                    </div>
                </li>
            </ul>
        </div>
        
        <div className="flex gap-2 border-b text-white">
            <button onClick={goToDelete} className="flex w-full justify-center gap-1 py-1 px-4 rounded-sm shadow-sm bg-red-800  active:bg-red-600 hover:bg-red-700 ">
                <TrashIcon className={"w-4"} />
                Hapus
            </button>
            <button onClick={goToEdit} className="flex w-full justify-center gap-1 py-1 px-4 rounded-sm shadow-sm bg-yellow-800 active:bg-yellow-600 hover:bg-yellow-700 ">
                <EditIcon className={"w-4"} />
                Edit
            </button>
        </div>
        </>
    )
}

export default ShowForm;