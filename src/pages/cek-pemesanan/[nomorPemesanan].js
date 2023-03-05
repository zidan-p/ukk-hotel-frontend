const { useRouter } = require("next/router");


// layout
import MainGuestLayout from "@/layouts/MainGuestLayout"
import pemesanan from "@/service/pemesanan";
import { useEffect, useState } from "react";



function DetailPemesanan(props){
    const router = useRouter();
    const nomorPemesanan = router.query.nomorPemesanan;
    const [detailData, setDetailData] = useState({});

    useEffect(()=>{

    })

    async function setPemesanan(){
        try {
            let result = await pemesanan.getPemesananByNomorPemesanan(nomorPemesanan);
            setDetailData(result);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="text-3xl font-semibold">
            nomor pemesanan adalah {nomorPemesanan};
            <div className="border p-2">
                {}
            </div>
        </div>
    )
}



export default DetailPemesanan


//apply layout
DetailPemesanan.getLayout = function getLayout(page) {
    return (
      <MainGuestLayout >
        {page}
      </MainGuestLayout>
    )
}

// export async function getStaticProps() {
//     // Get external data from the file system, API, DB, etc.
//     const data = ""
  
//     // The value of the `props` key will be
//     //  passed to the `Home` component
//     return {
//       props: ""
//     }
//   }