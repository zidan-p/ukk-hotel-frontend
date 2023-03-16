const { default: MainAdminLayout } = require("@/layouts/MainAdminLayout")




function Kamar(){
    return <></>
}



export default Kamar



Kamar.getLayout = function getLayout(page){
    return (
        <MainAdminLayout>
            {page}
        </MainAdminLayout>
    )
}