
import Image from "next/image"
import { formatMoneyIDN } from "@/utils/formatNumber"



export default ({isOpen}) => {
    return (
        <div className={`fixed flex flex-col z-30 top-0 h-screen max-h-screen w-full bg-[rgba(0,0,0,0.6)]`}>
            <div className="basis-1/12 shrink-0"></div>
            <div className="w-full flex flex-col basis-11/12 bg-white p-5 grow-0 overflow-auto">
                <div className="flex justify-between border-b pb-3">
                    <h4 className="text-lg font-semibold">Detail Tipe kamar</h4>
                    <button className="p-0.5 hover:bg-gray-300 rounded">
                        <Image src={"/icon/x.svg"} width={30} height={30} alt={"close"} />
                    </button>
                </div>
                <div className="flex overflow-auto divide-x">
                    <div className="basis-1/3 overflow-auto p-3">
                        <Image className="w-full mb-3" src={"/images/gambar-default.jpg"} width={300} height={200} alt={"gambar default"} />
                        <h1 className="text-lg font-semibold">kamar kamaran</h1>
                        <p className="break-words font-medium text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda cum officia, quo corporis aut rerum sequi nam fugit magni.
                        </p>
                    </div>
                    <div className="basis-1/3 p-3">
                        <h3 className="text-2xl font-semibold mb-2">Detail Lengkap</h3>
                        <hr />
                        <div className="flex justify-between mb-4">
                            <h3>Nama Tipe Kamar</h3>
                            <h5>Kamar Luar Biasa</h5>
                        </div>
                        <div className="flex justify-between mb-4">
                            <h3>Harga Kamar</h3>
                            <h5>Rp. {formatMoneyIDN(2_000_000)}</h5>
                        </div>
                        <div className="flex justify-between mb-4">
                            <h3>Banyak kamar</h3>
                            <h5>30</h5>
                        </div>
                    </div>
                    <div className="basis-1/3 p-3">
                    <h3 className="text-2xl font-semibold mb-2">Daftar Kamar</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

