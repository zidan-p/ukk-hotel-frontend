import XIcon from "@/components/icons/XIcon";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputList from "./inputList/InputList";
import kamar from "@/service/kamar";
import tipeKamar from "@/service/tipeKamar";



function CreateForm({onClose}){

    const [tipeKamarActive, setTipeKamarActive] = useState(null);
    const [tipeKamarList, setTipeKamarList] = useState([]);
    const [namaKamarList, setNamaKamarList] = useState([
        // templatenya data
        // {
        //     nama : "test",
        //     count : 1
        // }
    ]);

    useEffect(()=>{ getTipeKamarData(); },[]);

    async function sendData(e){
        e.preventDefault();
        try {
            const result = await kamar.createBulkManyWithTipeKamar(tipeKamarActive.id,{namaList : namaKamarList});
            toast.success("data berhasil diubah");
            onClose();
            resetState();
        } catch (error) {
            console.log(error);
            toast.error("ada masalah dalam mengirim data")
        }
    }

    function resetState(){
        setNamaKamarList([]);
    }

    
    function addNama(nama){
        if(nama === "") return;
        const tempNama = [...namaKamarList];
        tempNama.push({
            nama : nama,
            count : 1
        })
        setNamaKamarList(tempNama);
    }
    
    function deleteNama(index){
        const tempNama = [...namaKamarList];
        tempNama.splice(index,1);
        setNamaKamarList(tempNama);
    }

    function changeCount(index,count){
        try {
            const tempNama = [...namaKamarList];
            tempNama[index].count = count
            setNamaKamarList(tempNama);
        } catch (error) {
            console.log("index tidak ada");
        }
    }
    
    async function getTipeKamarData(){
        try {
            const result = await tipeKamar.getAllTipeKamar();
            setTipeKamarList(result.result.getTipeKamarList.data);
            // toast(JSON.stringify(result));
            if(result.result.getTipeKamarList.data?.length !== 0){
                setTipeKamarActive(result.result.getTipeKamarList.data[0]);
            }
        } catch (error) {
            console.log(error);
            toast.error("ada masalah dalam mengambil data");
        }
    }
    
    //digunakan diluar dari get tipe kamar data;
    function changeActiveTipeKamar(index){
        setTipeKamarActive(tipeKamarList[index]);
    }
    function handleChangeOnSelect(e){
        e.preventDefault();
        changeActiveTipeKamar(e.target.value);
    }

    function testSendData(){
        toast(JSON.stringify({
            tipeKamarActive, tipeKamarActive,
            namaKamarList : namaKamarList
        }))
    }


    return (
        <>
        <div className="border-b pt-1 py-2 flex justify-between">
            <h1 className="font-semibold text-gray-500">Create Kamar</h1>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-slate-800 hover:bg-slate-200">
                <XIcon />
            </button>
        </div>
        
        <div className="flex flex-col gap-5 px-4 h-full max-h-[72%] mt-3">
            <div className="">
                <p className="text-sm text-gray-600">tipe Kamar</p>
                {/* <p className="transition bg-gray-200 px-2 py-2 rounded font-semibold border hover:bg-white hover:border-gray-800 text-gray-700">kamar baru</p> */}
                <select onChange={handleChangeOnSelect} id="small" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                    {tipeKamarList.map((tipeKamar, index) => (
                        <option 
                            key={tipeKamar.id} 
                            value={index}
                        >
                            {tipeKamar.namaTipeKamar}
                        </option>
                    ))}
                </select>
            </div>
            <InputList
                // onChangeActiveTipeKamar={changeActiveTipeKamar} // ini buat apa massseee...
                onAddNama={addNama}
                onDeleteNama={deleteNama}
                onChangeCount={changeCount}
                namaKamarList={namaKamarList}
            />
            <div className="w-full">
                <button onClick={sendData} className="w-full bg-slate-800 text-white px-5 py-1 rounded-sm hover:bg-slate-700 active:bg-slate-600">
                    Create
                </button>
            </div>
        </div>
        </>
    )
}

export default CreateForm;