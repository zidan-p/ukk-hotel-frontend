







export default () => {
    return (
        <div className="flex gap-1 flex-wrap">
            {tipeKamarData.Kamars.map(kamar => {
                return (
                    <div 
                    key={kamar.id} 
                    className="text-sm cursor-pointer px-6 py-1 border rounded hover:bg-gray-300">
                        {kamar.nama}
                    </div>
                )
            })}
        </div>
    )
}