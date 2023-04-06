
import FacebookIcon from "@/components/icons/FacebookIcon"
import InstagramIcon from "@/components/icons/InstagramIcon"
import TwitterIcon from "@/components/icons/TwitterIcon"
import Image from "next/image"
import Link from "next/link"


export default () => {
    // return(
    //     <footer className="font-sans border-t border-t-gray-400 text-gray-600 text-sm font-semibold flex justify-center bg-gray-200 py-7 relative">
    //         <div className="absolute flex left-0 ml-3 text-xs hover:bg-gray-300 cursor-pointer px-4 py-0.5 rounded">
    //             <Image className="w-4" src={"/icon/more-vertical.svg"} width={50} height={50} />
    //             <p>source asset</p>
    //         </div>
    //         <h4>Create with 💞 by <a href="">Zidan Putra Rahman</a> </h4>
    //     </footer>
    // )

    return (
        <footer className="bg-slate-900 text-white font-sans py-16 px-28">
            <div className="border-b border-slate-700 pb-3 mb-3">
                <div className="max-w-md mb-3">
                    <h3 className="font-bold">Wikusama Hotel</h3>
                    <p className="text-sm font-light">Nikmati berragam layanan kami dengan berbagai pilihan selama yang anda mau</p>
                </div>
                <ul className="flex gap-3">
                    <li>
                        <Link href={"#"} className="bg-slate-800 text-slate-600 hover:bg-slate-700 hover:text-slate-500 active:bg-slate-500 px-2 rounded-sm">Tentang kami</Link>
                    </li>
                    <li>
                        <Link href={"#"} className="bg-slate-800 text-slate-600 hover:bg-slate-700 hover:text-slate-500 active:bg-slate-500 px-2 rounded-sm">Karir</Link>
                    </li>
                    <li>
                        <Link href={"#"} className="bg-slate-800 text-slate-600 hover:bg-slate-700 hover:text-slate-500 active:bg-slate-500 px-2 rounded-sm">RIngkasan</Link>
                    </li>
                    <li>
                        <Link href={"#"} className="bg-slate-800 text-slate-600 hover:bg-slate-700 hover:text-slate-500 active:bg-slate-500 px-2 rounded-sm">Bantuan</Link>
                    </li>
                    <li>
                        <Link href={"#"} className="bg-slate-800 text-slate-600 hover:bg-slate-700 hover:text-slate-500 active:bg-slate-500 px-2 rounded-sm">Qa</Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between">
                <p className="text-slate-600">2022 Wikusama&#8482; all right reserved</p>
                <div className="flex text-slate-600 gap-2">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
        </footer>
    )
}