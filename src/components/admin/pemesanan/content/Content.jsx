
//component
import Table from "./table/Table"
import TableRows from "./table/rows/Rows"
import Pagination from "../../pagination/Pagination"

function PemesananContent({contentData, onPageChange, handleNextStatus, onOpenModal}){

    return(
        <section className="bg-white ">
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
                            onOpenModal={onOpenModal}
                        />
                    ))}
                </Table>
            </div>
        </section>
    )
}

export default PemesananContent