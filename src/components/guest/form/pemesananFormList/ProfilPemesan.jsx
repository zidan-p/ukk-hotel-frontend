

import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"

//component
import InputForm from "../InputForm"



export default () => {

    const [formDataInput, setFormDataInput] = useState({
        namaPemesan : "",
        emailPemesan : "",
        namaTamu : ""
    })


    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataLadang((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
    }

    return (
        <div className="flex flex-col gap-8 pb-3">
            <InputForm name="namaPemesan" >Nama Pemesan</InputForm>
            <InputForm name="emailpemesan" >Email Pemesan</InputForm>
            <InputForm name="namaTamu">Nama Tamu</InputForm>
            <div className="flex w-full gap-3">
                <div className="w-full">
                    <label className="text-sm font-semibold text-slate-600 mb-2 block">Tanggal Check In</label>
                    <input type="date" name="tglCheckIn" className=" w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-semibold text-slate-600 mb-2 block">Tanggal Check Out</label>
                    <input type="date" name="tglCheckOut" className=" w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" />
                </div>
            </div>
        </div>
    )
}