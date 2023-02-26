

import { useRef,useState,useEffect,forwardRef,useImperativeHandle } from "react"

//component
import InputForm from "../InputForm"


export default (props) => {

    // const [formDataInput, setFormDataInput] = useState({
    //     namaPemesan : "",
    //     emailPemesan : "",
    //     namaTamu : ""
    // })
    const [formDataInput, setFormDataInput] = useState({})

    // useEffect(()=>{
    //     props.setDataParent(formDataInput);
    // },[formDataInput])


    useEffect(()=>{
        setFormDataInput(props.dataSend)
    },[])

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormDataInput((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
        props.setDataParent(event)

    }



    // const getSendData = () => ({
    //     namaPemesan : formDataInput.namaPemesan,
    //     emailPemesan : formDataInput.emailPemesan,
    //     namaTamu: formDataInput.namaTamu
    // })

    return (
        <div className="flex flex-col gap-8 pb-3">
            <InputForm value={formDataInput.namaPemesan ?? ""} onChange={handleChangeForm} name="namaPemesan" >Nama Pemesan</InputForm> 
            <InputForm value={formDataInput.emailPemesan ?? ""} onChange={handleChangeForm} name="emailPemesan" >Email Pemesan</InputForm>
            <InputForm value={formDataInput.namaTamu ?? ""} onChange={handleChangeForm} name="namaTamu">Nama Tamu</InputForm>
            <div className="flex w-full gap-3">
                <div className="w-full">
                    <label className="text-sm font-semibold text-slate-600 mb-2 block">Tanggal Check In</label>
                    <input value={formDataInput.tglCheckIn ?? new Date()} onChange={handleChangeForm} type="date" name="tglCheckIn" className=" w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" />
                </div>
                <div className="w-full">
                    <label className="text-sm font-semibold text-slate-600 mb-2 block">Tanggal Check Out</label>
                    <input type="date" name="tglCheckOut" className=" w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" />
                </div>
            </div>
        </div>
    )
}