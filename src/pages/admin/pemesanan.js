import Pagination from "@/components/admin/pagination/Pagination"
import MoneyIcon from "@/components/icons/MoneyIcon"
import MainAdminLayout from "@/layouts/MainAdminLayout"
import { useState } from "react"


//component
import FilterTool from "@/components/admin/pemesanan/filterTool/FilterTool"







function AdminPemesanan(){
    const [filterParams, setFilterParams] = useState({
        //menggunakan underscore suapay dapat terbaca oleh query params
        page : 1,
        limit: 10,
        tgl_awal : 0,
        tgl_akhir: 0,
        keyword: "",
        status: "all" 
    })


    return(
        <div className="bg-slate-100 h-screen px-3 py-2">
            <FilterTool />
            <section className="bg-white">
                <div className="p-2 flex">
                    <Pagination totalCount={10} currentPage={5} pageSize />
                </div>
                <div className="p-2">
                    <table className="w-full table-auto">
                        <thead className="text-xs font-semibold text-gray-500">
                            <tr className=" justify-between grow divide-x border-y">
                                <th className=" py-2 px-3 gap-1">
                                    <div className="flex">
                                    Nama Pemesan
                                    </div>
                                </th>
                                <th className=" py-2 px-3 gap-1">
                                    <div className="flex">
                                        Status
                                    </div>
                                </th>
                                <th className=" py-2 px-3 gap-1">
                                    <div className="flex">
                                    Tanggal Check In
                                    </div>
                                </th>
                                <th className=" py-2 px-3 gap-1">
                                    <div className="flex">
                                        Tanggal Check Out
                                    </div>
                                </th>
                                <th className=" py-2 px-3 gap-1">
                                    <div className="flex gap-2">
                                        <MoneyIcon className={"w-4"} />
                                        Total
                                    </div>
                                </th>
                                <th className=" py-2 px-3 gap-1">
                                    <div className="flex">
                                    Action
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y">
                            <tr className="transition hover:bg-slate-50">
                                <td className="px-2 py-1.5 font-semibold ">Zidan Putra Rahman</td>
                                <td className="px-2 py-1.5">
                                    <p className="divide-x justify-between bg-yellow-100 font-semibold rounded flex text-yellow-700 px-3 py-1.5">
                                        Baru
                                        <button className="transition text-yellow-700 opacity-40 hover:opacity-100">
                                            accept
                                        </button>
                                    </p>
                                </td>
                                <td className="px-2 py-1.5 text-gray-500">12 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500">15 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500 font-semibold">Rp. 15.000.000</td>
                                <td className="px-2 py-1.5">action</td>
                            </tr>
                            <tr className="transition hover:bg-slate-50">
                                <td className="px-2 py-1.5 font-semibold ">Zidan Putra Rahman</td>
                                <td className="px-2 py-1.5">
                                    <p className="divide-x justify-between bg-green-100 font-semibold rounded flex text-green-700 px-3 py-1.5">
                                        Diterima
                                        <button className="transition text-green-700 opacity-40 hover:opacity-100">
                                            Check In
                                        </button>
                                    </p>
                                </td>
                                <td className="px-2 py-1.5 text-gray-500">12 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500">15 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500 font-semibold">Rp. 15.000.000</td>
                                <td className="px-2 py-1.5">action</td>
                            </tr>
                            <tr className="transition hover:bg-slate-50">
                                <td className="px-2 py-1.5 font-semibold ">Zidan Putra Rahman</td>
                                <td className="px-2 py-1.5">
                                    <p className="divide-x justify-between bg-slate-100 font-semibold rounded flex text-slate-700 px-3 py-1.5">
                                        Check In
                                        <button className="transition text-slate-700 opacity-40 hover:opacity-100">
                                            Check Out
                                        </button>
                                    </p>
                                </td>
                                <td className="px-2 py-1.5 text-gray-500">12 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500">15 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500 font-semibold">Rp. 15.000.000</td>
                                <td className="px-2 py-1.5">action</td>
                            </tr>
                            <tr className="transition hover:bg-slate-50">
                                <td className="px-2 py-1.5 font-semibold ">Zidan Putra Rahman</td>
                                <td className="px-2 py-1.5">
                                    <p className="divide-x justify-between bg-gray-100 font-semibold rounded flex text-gray-700 px-3 py-1.5">
                                        Check Out
                                    </p>
                                </td>
                                <td className="px-2 py-1.5 text-gray-500">12 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500">15 - maret - 2023</td>
                                <td className="px-2 py-1.5 text-gray-500 font-semibold">Rp. 15.000.000</td>
                                <td className="px-2 py-1.5">action</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default AdminPemesanan


AdminPemesanan.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}