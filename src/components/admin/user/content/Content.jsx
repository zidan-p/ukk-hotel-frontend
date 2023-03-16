
//component
import Table from "./table/Table"
import TableRows from "./table/rows/Rows"
import Pagination from "../../pagination/Pagination"

function UserContent({contentData, onPageChange, onOpenModal}){

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
                            key={pemesanan.id}
                            id={pemesanan.id}
                            createdAt={pemesanan.createdAt}
                            email={pemesanan.email}
                            username={pemesanan.username}
                            foto={pemesanan.foto}
                            role={pemesanan.role}
                            onOpenModal={onOpenModal}
                        />
                    ))}
                </Table>
            </div>
        </section>
    )
}

export default UserContent