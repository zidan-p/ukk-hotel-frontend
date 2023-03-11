
//component
import Table from "./table/Table"
import TableRows from "./table/rows/Rows"
import Pagination from "../../pagination/Pagination"

function PemesananContent({contentData, onPageChange}){

    return(
        <section className="bg-white">
            <div className="p-2 flex">
                <Pagination onPageChange={onPageChange} totalCount={10} currentPage={5} pageSize />
            </div>
            <div className="p-2">
                <Table>
                    {contentData.map(pemesanan => (
                        <TableRows 
                            id={pemesanan.id}
                            namaPemesan={pemesanan.namaPemesan}
                            status={pemesanan.status}
                            tglCheckIn={pemesanan.tglCheckIn}
                            tglCheckOut={pemesanan.tglCheckOut}
                            hargaTotal={pemesanan.DetailPemesanan.hargaTotal}
                        />
                    ))}
                </Table>
            </div>
        </section>
    )
}