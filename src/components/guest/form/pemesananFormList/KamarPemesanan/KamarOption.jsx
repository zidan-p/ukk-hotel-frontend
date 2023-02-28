







export default ({kamarList, selected = [], toggleKamar}) => {

    return (
        <div className="bg-white p-2">
            <p className="text-sm text-gray-500">silahkan memilih kamar berikut</p>
            <hr className="mb-2" />
            <div className="flex gap-1 flex-wrap">
                {kamarList.map(kamar => {
                    return (
                        <div 
                        key={kamar.id} 
                        className={`
                            ${selected.some(kamar.id) ? 
                            "text-sm cursor-pointer px-6 py-1 border-2 font-semibold rounded hover:bg-gray-300" 
                                : 
                            "text-sm cursor-pointer px-6 py-1 border rounded hover:bg-gray-300"
                            }
                            
                        `}>
                            {kamar.nama}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}