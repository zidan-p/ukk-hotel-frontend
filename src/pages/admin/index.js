import getLocalStorage from "@/features/getLocalStorage"
import { useEffect, useState } from "react"

import MainAdminLayout from "@/layouts/MainAdminLayout";

import kamar from "@/service/kamar";
import tipeKamar from "@/service/tipeKamar";
import pemesanan from "@/service/pemesanan";
import user from "@/service/user";
import { toast } from "react-toastify";

// chart js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { isObjectEmpty } from "@/utils/object";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
};



function AdminIndex(){
    const [tokenString, setTokenString] = useState("");
    const [kamarData, setkamarData] = useState({});
    const [pemesananData, setPemesananData] = useState({});
    const [tipeKamarData, setTipeKamarData] = useState({});
    const [userData, setUserData] = useState({});
    const [dataChartTipeKamar, setDataChartTipeKamar] = useState({});

    useEffect(()=>{
        setToken();
        getCurrentData();
    },[])

    async function setToken(){
        try {
            let token = getLocalStorage("token");
            setTokenString(token);
        } catch (error) {
            console.log(error);
        }
    }

    async function setTipeKamarChart(dataTipeKamar = []){
        const tempDataTipeKamar = dataTipeKamar.data.slice(0,5)
        const dataLIst = tempDataTipeKamar?.map(tipeKamar => tipeKamar?.Kamars?.length);
        const labelList = tempDataTipeKamar?.map(el => el.namaTipeKamar);
        // const dataLIst = ["test","test yang 2"];
        // const labelList = [12,23]
        // console.log(tempDataTipeKamar);

        // if(tempDataTipeKamar == undefined) return;
        // debugger;
        const dataTemp = {
            labels: labelList,
            datasets: [
            {
                label: '# banyak Kamar',
                data: dataLIst,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
            ],
        };
        setDataChartTipeKamar(dataTemp);
    }


    async function getCurrentData(){
        const limitData = {limit : 5}
        try {
            const kamarResult = await kamar.getFiltered(limitData);
            const tipeKamarResult = await tipeKamar.getAllTipeKamarFiltered(limitData);
            const pemesananResult = await pemesanan.getPemesananFilter(limitData);
            const userResult = await user.getAllUserFiltered(limitData);

            setTipeKamarChart(tipeKamarResult.result.getTipeKamarList);


            setkamarData(kamarResult.result.getKamarList);
            setPemesananData(pemesananResult.result.getPemesananList);
            setTipeKamarData(tipeKamarResult.result.getTipeKamarList);
            setUserData(userResult.result.getUserList);
            toast.success("berhasil mendapatkan data")
        } catch (error) {
            toast.error(JSON.stringify(error));
            console.error(error);
        }
    }

    return (
        <div className="bg-slate-100  min-h-screen py-3 px-16">
            <section className="mb-7 mt-4">
                <h1 className="text-gray-400 text-3xl font-bold" >Hello {getLocalStorage("userData")?.username}</h1>
            </section>
            <section className="flex gap-2 mb-3">
                <div className="bg-slate-200 text-gray-500 p-3 px-7 rounded">
                    <h1 className="text-3xl text-red-400 font-bold">{kamarData.count ?? 0}</h1>
                    <p className="text-sm">Data Kamar</p>
                </div>
                <div className="bg-slate-200 text-gray-500 p-3 px-7 rounded">
                    <h1 className="text-3xl text-green-400 font-bold">{tipeKamarData.count ?? 0}</h1>
                    <p className="text-sm">Data Tipe Kamar</p>
                </div>
                <div className="bg-slate-200 text-gray-500 p-3 px-7 rounded">
                    <h1 className="text-3xl text-yellow-400 font-bold">{pemesananData.count ?? 0}</h1>
                    <p className="text-sm">Data Pemesanan</p>
                </div>
                <div className="bg-slate-200 text-gray-500 p-3 px-7 rounded">
                    <h1 className="text-3xl text-orange-400 font-bold">{userData.count ?? 0}</h1>
                    <p className="text-sm">Data User</p>
                </div>
            </section>
            <section className="bg-white rounded flex p-2">
                <div className="w-1/2">
                    <h5>Tipe Kamar dengan kamar terbanyak</h5>
                    <div className="p-7">
                        {!isObjectEmpty(dataChartTipeKamar) && <Doughnut data={dataChartTipeKamar} /> }
                    </div>
                </div>
                <div className="basis-1/2">test</div>
            </section>
        </div>
        // <div className="bg-slate-100 flex flex-col justify-center text-white h-screen ">
        //     <div className="w-2/5 mx-auto bg-white p-3 rounded text-black">
        //     <h1 className="text-3xl font-bold" >Halo {getLocalStorage("userData").username}</h1>
        //     <p className=""> ini adalah halaman dashboard yang masih dalah proses. berikut daftar fitur yang tersedia </p>
        //     <ul className="flex flex-col text-gray-500 text-sm">
        //         <li className="list-disc list-inside">
        //             CRUD untuk pemesanan
        //         </li>
        //         <li className="list-disc list-inside">
        //             READ untuk user
        //         </li>
        //         <li className="list-disc list-inside">
        //             READ untuk tipe kamar
        //         </li>
        //     </ul>
        //     <div className="mt-5">
        //         {
        //         tokenString !== ""
        //         ?(
        //             <p className="bg-green-100 mt-2 px-3 p-1 text-sm break-words">{tokenString} </p>
        //         ):(
        //             <p className="p-1 px-3 mt-2 text-sm bg-yellow-100">tidak ada token</p> 
        //         )
        //         }
        //     </div>
        //     </div>
        // </div>
    )
}


AdminIndex.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}

export default AdminIndex