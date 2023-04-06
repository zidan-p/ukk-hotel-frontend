import getLocalStorage from "@/features/getLocalStorage"
import { useEffect, useState } from "react"

import MainAdminLayout from "@/layouts/MainAdminLayout";

import kamar from "@/service/kamar";
import tipeKamar from "@/service/tipeKamar";
import pemesanan from "@/service/pemesanan";
import user from "@/service/user";
import { toast } from "react-toastify";

// chart js
import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend,
    CategoryScale ,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import { Doughnut,Bar } from "react-chartjs-2";
import { isObjectEmpty } from "@/utils/object";
import { formatDateIDN } from "@/utils/dateFormatIndonesia";
import BoxIcon from "@/components/icons/BoxIcon";
import Table from "@/components/admin/pemesanan/content/table/Table";
import TableRows from "@/components/admin/pemesanan/content/table/rows/Rows";
import UserIcon from "@/components/icons/UserIcon";

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
);



function AdminIndex(){
    const [tokenString, setTokenString] = useState("");
    const [kamarData, setkamarData] = useState({});
    const [pemesananData, setPemesananData] = useState({});
    const [tipeKamarData, setTipeKamarData] = useState({});
    const [userData, setUserData] = useState({});
    const [dataChartTipeKamar, setDataChartTipeKamar] = useState({});
    const [dataChartUserAmount, setDataChartUserAmount] = useState({});

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

    //todo, sebaiknya menggunkana useMemo dari pada state
    async function setTipeKamarChart(dataTipeKamar = []){
        const tempDataTipeKamar = dataTipeKamar.data.slice(0,5)
        const dataLIst = tempDataTipeKamar?.map(tipeKamar => tipeKamar?.Kamars?.length);
        const labelList = tempDataTipeKamar?.map(el => el.namaTipeKamar);
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

    async function setUserAmountChart(roleAmount){
        const dataTemp = {
            labels: ["Admin", "Resepsionis"],
            datasets: [
            {
                label: '# banyak Kamar',
                data: [roleAmount.adminAmount, roleAmount.resepsionisAmount],
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
        setDataChartUserAmount(dataTemp);
    }


    async function getCurrentData(){
        const limitData = {limit : 5}
        try {
            const kamarResult = await kamar.getFiltered(limitData);
            const tipeKamarResult = await tipeKamar.getAllTipeKamarFiltered(limitData);
            const pemesananResult = await pemesanan.getPemesananFilter(limitData);
            const userResult = await user.getAllUserFiltered(limitData);

            setTipeKamarChart(tipeKamarResult.result.getTipeKamarList);
            setUserAmountChart(userResult.result.getUserList.roleAmount)

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
        <div className="bg-slate-100  min-h-screen py-3 pb-10 px-16">
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
            <section className="bg-white rounded flex p-2 divide-x mb-3">
                <div className="basis-1/2">
                    <h5 className="text-xl font-semibold text-gray-600 px-3">Tipe Kamar dengan kamar terbanyak</h5>
                    <div className="p-7">
                        {!isObjectEmpty(dataChartTipeKamar) && 
                            <Doughnut className="mx-auto" data={dataChartTipeKamar} /> 
                        }
                    </div>
                </div>
                <div className="basis-1/2 px-3">
                    <h3 className="text-xl font-semibold text-gray-600">Daftar Kamar Terbaru</h3>
                    <ul className="flex flex-col rounded-lg overflow-hidden divide-y">
                        {!isObjectEmpty(tipeKamarData) &&
                            tipeKamarData.data.map(tpKamar => (
                                <div className="transition bg-slate-50 hover:bg-white py-2 px-2 flex justify-between">
                                    <div className="flex gap-5 items-center">
                                        <BoxIcon className={"w-5"} />
                                        <div className="flex flex-col">
                                            <h5 className="font-semibold">{tpKamar.namaTipeKamar}</h5>
                                            <p className=" ">{tpKamar.Kamars?.length || 0} <span className="text-sm ">Kamar</span> </p>
                                        </div>
                                    </div>
                                    <h5 className="text-gray-500 text-sm">{formatDateIDN(tpKamar.createdAt)}</h5>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="bg-white rounded flex p-2 divide-x mb-3 ">
                <div className="basis-1/2 ">
                    <h5 className="text-xl font-semibold text-gray-600 px-3">Role User</h5>
                    <div className="p-7 h-full">
                        {!isObjectEmpty(dataChartUserAmount) && 
                            <Bar className="w" data={dataChartUserAmount} /> 
                        }
                    </div>
                </div>
                <div className="basis-1/2 p-3">
                <h3 className="text-xl font-semibold text-gray-600">Daftar User Terbaru</h3>
                    <ul className="flex flex-col rounded-lg overflow-hidden divide-y">
                        {!isObjectEmpty(userData) &&
                            userData.data.map(usrdata => (
                                <div className="transition bg-slate-50 hover:bg-white py-2 px-2 flex justify-between">
                                    <div className="flex gap-5 items-center">
                                        <UserIcon className={"w-5"} />
                                        <div className="flex flex-col">
                                            <h5 className="font-semibold">{usrdata.username}</h5>
                                            <p className=" ">{usrdata.email || ""}</p>
                                        </div>
                                    </div>
                                    <h5 className="text-gray-500 text-sm">{formatDateIDN(usrdata.createdAt)}</h5>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="bg-white p-2">
                <h3 className="text-xl font-semibold text-gray-600">Daftar Pemesanan terbaru</h3>
                <Table>
                    {!isObjectEmpty(pemesananData) && pemesananData.data.map(pemesanan => (
                        <TableRows
                            id={pemesanan.id}
                            namaPemesan={pemesanan.namaPemesan}
                            status={pemesanan.status}
                            tglCheckIn={pemesanan.tglCheckIn}
                            tglCheckOut={pemesanan.tglCheckOut}
                            hargaTotal={pemesanan.DetailPemesanan.hargaTotal}
                            handleNextStatus={()=>{}}
                            onOpenModal={()=>{}}
                        />
                    ))}
                </Table>
            </section>
        </div>
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