
import Image from "next/image"


export default () => {
    return (
        <section className='min-h[100px] px-28 py-10'>
            <h5 className='text-slate-500 text-center font-semibold'>Mengapa ?</h5>
            <h3 className='font-semibold text-center text-lg mb-6'>Layanan dari kami untuk kepuasan anda</h3>
            <div className="flex gap-6 justify-center">
                <div className="border p-4 rounded hover:bg-slate-200">
                    <Image className="fill-slate-700 mx-auto mb-6" width={90} height={50} src={"/images/Checklist_Outline.svg"} />
                    {/* <img src="/images/Checklist_Outline.svg" /> */}
                    <p className="font-semibold text-sm">Daftar pilihan yang beragam</p>
                </div>
                <div className="border p-4 rounded hover:bg-slate-200">
                    <Image className="fill-slate-700 mx-auto mb-6" width={90} height={50} src={"/images/Checklist_Outline.svg"} />
                    <p className="font-semibold text-sm">Lakukan pemesanan dengan mudah</p>
                </div>
                <div className="border p-4 rounded hover:bg-slate-200">
                    <Image className="fill-slate-700 mx-auto mb-6" width={90} height={50} src={"/images/Checklist_Outline.svg"} />
                    <p className="font-semibold text-sm">Lakukan update kapan saja</p>
                </div>
            </div>
        </section>
    )
}