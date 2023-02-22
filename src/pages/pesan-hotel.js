

//font
import { Adamina } from "@next/font/google"
const adamina = Adamina({subsets : ["latin"],weight : ["400"]})

//layout
import MainGuestLayout from "@/layouts/MainGuestLayout"



export default function PesanHotel(){

    return(
    <>
        <section className='px-28 py-4'>
            <h1 className={`${adamina.className} text-3xl mb-4`}>Pesan Hotel</h1>
        </section>
        <section className="px-28 py-4 flex gap-4" >
            <div className="basis-1/4">
            <ol class="border-l border-neutral-300 dark:border-neutral-500">
                <li className="hover:bg-gray-200">
                    <div class="flex-start flex items-center pt-3">
                        <div
                            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p class="text-green-600 text-sm">
                            complete
                        </p>
                        </div>
                        <div class="mt-2 ml-4 mb-6">
                        <h4 class="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                    </div>
                </li>
                <li className="hover:bg-gray-200">
                    <div class="flex-start flex items-center pt-2">
                        <div
                            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p class="text-green-600 text-sm">
                            complete
                        </p>
                        </div>
                        <div class="mt-2 ml-4 mb-6">
                        <h4 class="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                    </div>
                </li>
                <li className="hover:bg-gray-200">
                    <div class="flex-start flex items-center pt-2">
                        <div
                            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p class="text-yellow-600 text-sm">
                            pending
                        </p>
                        </div>
                        <div class="mt-2 ml-4 pb-5">
                        <h4 class="mb-1.5 text-xl font-semibold text-gray-500">Title of section 3</h4>
                    </div>
                </li>
                </ol>
            </div>
            <div className="basis-3/4 border">
                adasdawdaw
            </div>
        </section>
    </>
    )
}



//apply layout
PesanHotel.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}