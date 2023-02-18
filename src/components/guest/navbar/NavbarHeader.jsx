import Link from 'next/link'



export default (props)=>{

    return(
        <nav className="absolute inset-x-0  text-white flex justify-between px-28 py-5 bg-slate-800">
            <h4 className="font-semibold">
                <Link href="/">Wikusama Hotel</Link>
            </h4>
            <ul className="flex gap-9 text-sm">
                <li className='hover:underline underline-offset-2'>
                    <Link href={"/"}>
                     Pesan Hotel    
                    </Link>
                </li>
                <li className='hover:underline underline-offset-2'>
                    <Link href={"/"}>
                     Cek Pemesanan    
                    </Link>
                </li>
                <li className='hover:underline underline-offset-2'>
                    <Link href={"/"}>
                     Daftar Pilihan    
                    </Link>
                </li>
            </ul>
        </nav>
    )
}