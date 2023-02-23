

// layout
import MainGuestLayout from "@/layouts/MainGuestLayout"




export default function CekPemesanan(){
    return <h1>asdasd</h1>
}


//apply layout
CekPemesanan.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}