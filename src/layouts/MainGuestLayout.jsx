

import FooterGuest from "@/components/guest/footer/FooterGuest"
import NavbarHeader from "@/components/guest/navbar/NavbarHeader"



import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
})


export default ({children}) => {
    //note: ini cara kasar, karena saya tidak tahu harus ditaruh dimana supaya fotn roboto bisa menjadi  global
    //saya coba di _app tidak bisa, karena hanyaa memengaruhi page components data saja
    return (
        <>
        <div className={`${roboto.variable}`}>
            <NavbarHeader />
            <div className="min-h-screen">
                <div className="">
                    {children}
                </div>
            </div>
            <FooterGuest />
            
        </div>
        </>
    )
}