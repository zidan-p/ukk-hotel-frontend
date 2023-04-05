
//component
import Table from "./table/Table"
import TableRows from "./table/rows/Rows"
import Pagination from "../../pagination/Pagination"

function TipeKamarContent({contentData, onPageChange, onOpenModal}){


    return(
        <section className="bg-white ">
            <div className="p-2 flex">
                <Pagination 
                    onPageChange={onPageChange} 
                    totalCount={contentData.pageCount} 
                    currentPage={contentData.pageCurrent}
                    pageSize={contentData.count}
                    // totalCount={25} 
                    // currentPage={1}
                    // pageSize={10}
                    siblingCount={1} //angka diantara angka utama
                />
            </div>
            <div className="p-2">
                <Table>
                        {contentData.data.map(tipeKamar => (
                            <TableRows 
                                key={tipeKamar.id}
                                id={tipeKamar.id}
                                foto={tipeKamar.foto}
                                nama={tipeKamar.namaTipeKamar}
                                tanggalDibuat={tipeKamar.createdAt}
                                deskripsi={tipeKamar.deskripsi}
                                banyakKamar={tipeKamar.Kamars.length}
                                onOpenModal={onOpenModal}
                            />
                        ))}
                </Table>
            </div>
        </section>
    )
}

export default TipeKamarContent