import Link from 'next/link'
import { useRouter } from "next/router";


const links = [{
        label : "Pesan Hotel",
        path : "/pesan-hotel"
    },{
        label : "Cek Pemesanan",
        path : "/cek-pemesanan"
    }, {
        label : "Daftar Pilihan",
        path : "/daftar-pilihan"
    }
]


export default (props)=>{
    const router = useRouter();

    return(
        <nav className="font-sans inset-x-0  text-white flex justify-between items-center py-2 px-28 bg-slate-800">
            <h4 className="font-semibold">
                <Link href="/">Wikusama Hotel</Link>
            </h4>
            <ul className="flex gap-9 text-sm">
            <li 
            className={`
            ${router.pathname === "/" ? "text-yellow-300" : "text-gray-500 hover:text-white"} 
            underline-offset-auto py-2
            `}
            >
                <Link href={"/"}>
                    Home
                </Link>
            </li>
            {
            links.map((link,index) => {
                return (
                    <li 
                    key={index}
                    className={
                        `${router.pathname.includes(link.path) ? "text-yellow-300" : "text-gray-500 hover:text-white"} 
                        underline-offset-auto py-2 border-b-2 border-slate-800 text-sm
                        `
                    }
                    >
                        <Link href={link.path}>
                            {link.label}
                        </Link>
                    </li>
                )
            })
            }
            </ul>
        </nav>
    )
}