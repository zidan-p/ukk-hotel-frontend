import { useEffect, useState } from "react"





export default ({pemesananList}) => {

    if(pemesananList.length === 0) return <></>
    return (
        <ol class=" ">
            {pemesananList.map((dat,i) => {
            return (
                <li key={i} className="hover:bg-gray-200 cursor-pointer p-3 pl-0 border-l py-4">
                    <div class="flex-start flex items-center">
                        <div
                            class={`-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full ${dat.complete ?"bg-neutral-800" : "bg-neutral-300"}`}></div>
                    { dat.complete 
                    ? 
                        (<p class="text-green-600 text-sm">
                        complete
                        </p>)
                    :
                        (<p class="text-yellow-600 text-sm">
                        empty
                        </p>)
                    }
                    </div>
                    <div class="ml-4">
                        <h4 class={`${dat.complete ? "" : "text-gray-600"} text-xl font-semibold`}>{dat.label}</h4>
                    </div>
                </li>
            )
            })}
        {/* <li className="hover:bg-gray-200 cursor-pointer p-3 pl-0 border-l py-4">
            <div class="flex-start flex items-center">
                <div
                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-800"></div>
                <p class="text-green-600 text-sm">
                    complete
                </p>
            </div>
            <div class="ml-4">
                <h4 class=" text-xl font-semibold">Profil Pemesan</h4>
            </div>
        </li>
        <li className="hover:bg-gray-200 cursor-pointer p-3 pl-0 border-l py-4">
            <div class="flex-start flex items-center">
                <div
                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-800"></div>
                <p class="text-green-600 text-sm">
                    complete
                </p>
            </div>
            <div class="ml-4">
                <h4 class=" text-xl font-semibold">Tanggal Pemesanna</h4>
            </div>
        </li>
        <li className="hover:bg-gray-200 cursor-pointer p-3 pl-0 border-l py-4">
            <div class="flex-start flex items-center">
                <div
                    class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                <p class="text-yellow-600 text-sm">
                    pending
                </p>
            </div>
            <div class="ml-4">
                <h4 class=" text-xl font-semibold text-gray-600">Kamar</h4>
            </div>
        </li> */}
    </ol>
    )
}