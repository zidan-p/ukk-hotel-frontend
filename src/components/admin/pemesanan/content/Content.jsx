
//component
import Table from "./table/Table"
import TableRows from "./table/rows/Rows"
import Pagination from "../../pagination/Pagination"

function PemesananContent({contentData, onPageChange, handleNextStatus}){
    // return(
    //     <div className="bg-slate-600 min-h-screen p-6">
    //         <div className="bg-white text-orange-700 max-w-4xl whitespace-pre rounded shadow p-3">
    //             {JSON.stringify(contentData,null, 4)}
    //         </div>
    //     </div>
    // )

    return(
        <section className="bg-white">
            <div className="p-2 flex">
                <Pagination 
                    onPageChange={onPageChange} 
                    totalCount={contentData.pageCount} 
                    currentPage={contentData.pageCurrent}
                    pageSize={contentData.count}
                    siblingCount={1} //angka diantara angka utama
                />
            </div>
            <div className="p-2">
                <Table>
                    {contentData.data.map(pemesanan => (
                        <TableRows 
                            id={pemesanan.id}
                            namaPemesan={pemesanan.namaPemesan}
                            status={pemesanan.status}
                            tglCheckIn={pemesanan.tglCheckIn}
                            tglCheckOut={pemesanan.tglCheckOut}
                            hargaTotal={pemesanan.DetailPemesanan.hargaTotal}
                            handleNextStatus={handleNextStatus}
                        />
                    ))}
                </Table>
            </div>
        </section>
    )
}

export default PemesananContent