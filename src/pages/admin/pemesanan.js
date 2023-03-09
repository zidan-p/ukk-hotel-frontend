import Pagination from "@/components/admin/pagination/Pagination"
import ChevronRightIcon from "@/components/icons/ChevronRightIcon"
import MoneyIcon from "@/components/icons/MoneyIcon"
import SearchIcon from "@/components/icons/SearchIcon"
import MainAdminLayout from "@/layouts/MainAdminLayout"








function AdminPemesanan(){



    return(
        <div className="bg-slate-100 h-screen px-3 py-2">
            <section className="bg-white rounded p-2 mb-3">
                <div className="flex w-full pb-2 border-b mb-2 group">
                    <div className="transition group-focus-within:bg-white flex gap-3 w-1/3 p-2 px-3 bg-slate-100 rounded">
                        <SearchIcon className={"w-5"} />
                        <input placeholder="Cari.." className=" bg-transparent grow transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="text" />
                    </div>
                </div>
                <div className="flex  justify-between">
                    <div className="flex gap-2">
                        <div className="flex gap-2 border-2 px-3 py-1 rounded items-center">
                            <p className="text-gray-600 text-sm ">Limit : </p>
                            <input placeholder="Cari.." className="transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="number" />
                        </div>
                        <div className="flex gap-2 border-2 px-3 py-1 rounded items-center">
                            <p className="text-gray-600 text-sm ">Tanggal Awal : </p>
                            <input placeholder="Cari.." className="transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="date" />
                        </div>
                        <div className="flex gap-2 border-2 px-3 py-1 rounded items-center">
                            <p className="text-gray-600 text-sm ">Tanggal Akhir : </p>
                            <input placeholder="Cari.." className="transition outline-none border-b-2 border-b-transparent focus:border-b-slate-800" type="date" />
                        </div>
                    </div>
                    <button className="flex gap-1 bg-green-700 hover:bg-green-600 active:bg-green-500 text-white rounded items-center px-2">
                        <ChevronRightIcon />
                        <p className="px-1"> Terapkan </p>
                    </button>
                </div>
            </section>
            <section className="bg-white">
                <div className="p-2 flex">
                    <Pagination totalCount={10} currentPage={5} pageSize />
                </div>
                <div className="p-2">
                    <table className="w-full">
                        <thead className="text-xs font-semibold text-gray-500">
                            <tr className="flex w-full justify-between grow divide-x border-y">
                                <td className="w-full py-2 px-3 flex gap-1">
                                    Nama Pemesan
                                </td>
                                <td className="w-full py-2 px-3 flex gap-1">
                                    Status
                                </td>
                                <td className="w-full py-2 px-3 flex gap-1">
                                    Tanggal Check In
                                </td>
                                <td className="w-full py-2 px-3 flex gap-1">
                                    Tanggal Check Out
                                </td>
                                <td className="w-full py-2 px-3 flex gap-1">
                                    <MoneyIcon className={"w-4"} />
                                    Total
                                </td>
                                <td className="w-full py-2 px-3 flex gap-1">
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Zidan Putra Rahman</td>
                                <td>baru</td>
                                <td>12-maret-2023</td>
                                <td>15-maret-2023</td>
                                <td>Rp. 15.000.000</td>
                                <td>action</td>
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