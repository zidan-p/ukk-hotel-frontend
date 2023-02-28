

import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"

import { formatISO, addDays, startOfDay } from "date-fns"

//component
import InputForm from "../InputForm"


export default (props) => {
    const [formDataInput, setFormDataInput] = useState({})

    useEffect(()=>{
        setFormDataInput(props.dataSend)
    },[])

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataInput((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
        // props.setDataParent(event)
        props.setDataParent({
            key : name,
            value : value
        })
    }

    // const handleDate = () => {}

    const initialDate = {
        tglCheckIn : () => {
            const val = formatISO(startOfDay(new Date()), {representation: "date"});
            let obj = {target : {
                name : "tglCheckIn",
                value : val
            }}
            handleChangeForm(obj)
            return val
        },
        tglCheckOut : () => {
            const val = formatISO(startOfDay(addDays(new Date(),1)), {representation: "date"});
            let obj = {target : {
                name : "tglCheckOut",
                value : val
            }}
            handleChangeForm(obj)
            return val
        },
    }

    return (
        <div className="flex flex-col gap-8 pb-3">
            <InputForm value={formDataInput.namaPemesan ?? ""} onChange={handleChangeForm} name="namaPemesan" >Nama Pemesan</InputForm> 
            <InputForm value={formDataInput.emailPemesan ?? ""} onChange={handleChangeForm} name="emailPemesan" >Email Pemesan</InputForm>
            <InputForm value={formDataInput.namaTamu ?? ""} onChange={handleChangeForm} name="namaTamu">Nama Tamu</InputForm>
            <div className="flex w-full gap-3">
                <div className="w-full">
                    <label className="text-sm font-semibold text-slate-600 mb-2 block">Tanggal Check In</label>
                    <input value={formDataInput.tglCheckIn ?? initialDate.tglCheckIn()} onChange={handleChangeForm} type="date" name="tglCheckIn" className=" w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-semibold text-slate-600 mb-2 block">Tanggal Check Out</label>
                    <input value={formDataInput.tglCheckOut ?? initialDate.tglCheckOut()}  onChange={handleChangeForm} type="date" name="tglCheckOut" className=" w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" />
                </div>
            </div>
        </div>
    )
}