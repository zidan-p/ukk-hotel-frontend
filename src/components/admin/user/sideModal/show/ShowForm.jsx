import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import XIcon from "@/components/icons/XIcon";
import Image from "next/image";
import { IMAGE_SOURCE_URL } from "@/utils/const";





function ShowForm({onChangePage, dataUser, onClose}){
    return (
        <>
        <div className="border-b pt-1 py-2 flex justify-between">
            <h1 className="font-semibold text-gray-500 self-center">{dataUser.username}</h1>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>

        <div className="flex gap-2 border-b">
            <button className="flex gap-1 py-1 px-4 text-red-800 hover:bg-red-200 active:bg-red-300">
                <TrashIcon className={"w-4"} />
                Hapus
            </button>
            <button className="flex gap-1 py-1 px-4 text-yellow-800 hover:bg-yellow-200 active:bg-yellow-300">
                <EditIcon className={"w-4"} />
                Edit
            </button>
        </div>
         
        <div className="p-2 mb-4 rounded mt-3 py-5">
            <Image className=" mx-auto" src={IMAGE_SOURCE_URL + dataUser.foto} width={300} height={300} alt="gambar user" />
            
            {/* <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(dataUser,null,2)}
            </pre> */}
        </div>

        <div className="">
            <ul>
                <li className="flex">
                    <p className="basis-1/2 text-gray-500">Username</p>
                    <p className="basis-1/2 font-semibold">{dataUser.username}</p>
                </li>
                <li className="flex">
                    <p className="basis-1/2 text-gray-500">Role</p>
                    <p className="basis-1/2 font-semibold">{dataUser.role}</p>
                </li>
                <li className="flex">
                    <p className="basis-1/2 text-gray-500">Username</p>
                    <p className="basis-1/2 font-semibold">{dataUser.username}</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default ShowForm;