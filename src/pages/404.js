
import MainGuestLayout from "@/layouts/MainGuestLayout"
import Image from "next/image"


export default function NotFound(){
    return (
        <section className="mt-10">
            <div className="max-w-6xl mx-auto border rounded flex flex-col shadow">
                <div className="flex justify-center gap-3">
                    <div className="self-center">
                        <p className="font-bold text-gray-500">404</p>
                        <h1 className="text-4xl font-light mb-4">Sepertinya anda tersesat</h1>
                        <p className="text-gray-600">Sebelum pergi silakan lihat beberapa link berikut</p>
                        <ul className="list-disc text-gray-600 list-inside">
                            <li>Periksa kembalink yang anda tuju</li>
                            <li>pastikan alaman dns dan server proxy menyesuaikan request ini</li>
                            <li>data sudah terhapus</li>
                        </ul>
                    </div>
                    <Image src={"/images/illustrations/Page_not_found.png"} width={400} height={200} />
                </div>
            </div>
        </section>
    )
}


//apply layout
NotFound.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}