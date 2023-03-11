

function Table({children}){

    return (
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
                {children}
            </tbody>
        </table>
    )
}


export default Table