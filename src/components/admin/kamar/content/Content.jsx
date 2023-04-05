
//component
import Table from "./table/Table"
import TableRows from "./table/rows/Rows"
import Pagination from "../../pagination/Pagination"
import { toast } from "react-toastify"

function KamarContent({contentData, onPageChange, onOpenModal}){
    return(
        <section className="bg-white ">
            <div className="p-2 flex">
                <Pagination 
                    onPageChange={onPageChange} 
                    totalCount={contentData.count} 
                    currentPage={contentData.pageCurrent}
                    pageSize={contentData.limit} // ingat page size adalah ukuran element tiap halaman (ukuran maksimal)
                    siblingCount={1} //angka diantara angka utama
                />
            </div>
            <div className="p-2">
                <Table>
                        {contentData.data.map(kamar => (
                            <TableRows 
                                key={kamar.id}
                                id={kamar.id}
                                nama={kamar.nama}
                                jumlahPemesanan={kamar.jumlahPemesanan}
                                namaTipeKamar={kamar.namaTipeKamar}
                                tanggalDibuat={kamar.createdAt}
                                onOpenModal={onOpenModal}
                            />
                        ))}
                </Table>
            </div>
        </section>
    )
}

export default KamarContent