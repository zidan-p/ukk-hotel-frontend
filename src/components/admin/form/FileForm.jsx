import UploadIcon from "@/components/icons/UploadIcon";
import { useEffect, useRef, useState } from "react";






function FileForm({name,handleOnChange, fileSrc = "", className="", children}){
    const [onDrag, setOnDrag] = useState(false);
    const [fileData,setFileData] = useState({
        isFilled : false,
        fileName : "",
        isLoading : false,
    })
    const imgElement = useRef(null)

    useEffect(()=>{
        if(fileSrc === "") {
            setFileData((prev) => ({
                ...prev,
                "isFilled" : false
            }))

            imgElement.current.src = "";
            return;
        }

        imgElement.current.src = fileSrc;
        setFileData((prev) => ({
            ...prev,
            "isFilled" : true
        }))
    },[fileSrc])


    function handleOnDragOver(e){
        e.preventDefault();
        // e.stopPropagation();
        setOnDrag(true);
    }

    function handleOnDragLeave(e){
        e.preventDefault();
        e.stopPropagation();
        setOnDrag(false);
    }

    function handleDragEnter(e){
        e.preventDefault();
        e.stopPropagation();
    }

    async function handleOnDrop(e){
        e.preventDefault();
        e.stopPropagation();
        setOnDrag(false);
        let file = e.dataTransfer.files[0];
        console.log(file);
        changeImageSrc(file);
    }

    async function loadImageFromServer(url){
        // const xhr = new XMLHttpRequest();
        // xhr.open('HEAD', urlToFile, false);
        // xhr.send();

        let imgTemp = new Image();
        imgTemp.src = url;

        imgTemp.onload(e=>{

        })
    }

    function changeImageSrc(file){
        //TODO : buat pengecekan extensi
        
        setFileData((prev)=>({
            ...prev,
            "fileName" : file.name
        }))
        readImage(file);
        handleOnChange(file); //set di parent
    }

    function readImage(file){
        let reader = new FileReader();
        reader.addEventListener("load",()=>{
            setFileData(prev =>({
                ...prev,
                "isLoading" : true
            }))
            imgElement.current.src = reader.result;
        },false)
        reader.addEventListener("loadend", ()=>{
            setFileData(prev =>({
                ...prev,
                "isLoading" : false,
                "isFilled" : true
            }))
        })

        reader.readAsDataURL(file);
    }

    

    return(
        <>
        <div className={`flex flex-col ${className}`}>
            <p className="text-sm font-semibold text-slate-600">{children}</p>
            <label 
                className={`
                    group
                    transition bg-slate-50 h-56 overflow-y-auto
                    bg-opacity-60 relative cursor-pointer rounded border
                    ${onDrag ? "animate-pulse bg-slate-400 cursor-grab border-slate-800" : ""}
                    `} 
                htmlFor={name + "-file"}
            >
                {/* supaya event on drop bisa berfungsi */}
                <div 
                    onDragOver={handleOnDragOver}
                    onDragLeave={handleOnDragLeave}
                    onDrop={handleOnDrop}
                    onDragEnter={handleDragEnter}
                    className="inset-0 absolute z-10 bg-red-100 opacity-10" 
                />
                <div className="h-full">
                    <div className="flex flex-col ">
                        {/* gambarnya optional */}
                        <img ref={imgElement} src="" className=" w-full"  />
                        {fileData.isLoading ? "loading...." : ""}
                        {fileData.isFilled 
                        ?(
                            <div className="text-center text-sm py-1">
                                {fileData.fileName}
                            </div>
                        ):(
                            <div className="text-gray-500 z-0 py-6 grow">
                                <UploadIcon className={"mx-auto "} />
                                {onDrag 
                                ?(
                                    <div className="text-center">
                                        lepaskan
                                    </div>
                                ):(
                                    <div className="text-sm text-center  ">
                                        tarik file / klik disini
                                    </div>
                                )}
                            </div>
                        )}
                        <input 
                            className=" hidden " 
                            accept="image/*" 
                            type="file" 
                            name={name} 
                            id={name + "-file"} 
                            onChange={(e)=>{
                                changeImageSrc(e.target.files[0])
                            }}  
                        />
                    </div>
                </div>
            </label>
        </div>
        </>
    )
}

export default FileForm;

/*
## DEV LOG 1 ##
saya mendapati masalah untuk melakukan input file pada tag `input`.
awalnya saya membuat membuat tag input menjadi hidden dan akan di trigger oleh `label` yg merujuk ke input.
tapi setelah saya aplikasikan input file tidak tertrigger.

saya coba mulai untuk mendebugging masalah ini,  saya mulai dari menjadikan visible input, tapi hasilnya tetap sama.
walau input filenya terlihat jelas, `ada tombol dan text parameter file` namun saya klik2 tetap tidak bisa.

akhirnya saya coba menggantinay dengan input biasa (text), saya bisa melakukan entry value kedalamnya. nah, diwaktu ini 
ada hal menairk yg saya peroleh, sekita saya mengubah kembali input menjadi file, tiba2 input file tertrigger dan menujukan pilihan file.
sayangnya saat ini saya masih mencapai tahap ini, dan sekarang sedang melanjutkan debugging.


## DEV LOG 2 ##
setelah beberapasa saat mendapati perilakukan menarik dari program, saya langsung menemukan solusinys.
ternyata event yang ada pada input nantinya akan ditarik keatas ke element parent dan seterusnya.
nah, di aplikasi saya (tepatnya di modal), element backgrop saya buat melakukan prevent default.
sehingga setiap event dari dalam content modal, akan di tangkap oleh event handle di backdrop.

saya masih tidak tahu mengapa ini hanya berpengaruh pada input file sedangkan untuk input text tidak terpengaruh.
untuk info, ini adalah stackoverflow saya mendapat pencerahan, mungkin singkat dan tdk ada yg menjaawab tapi
bisa diolah sendiri bagian apa yang error.
https://stackoverflow.com/questions/57673177/react-file-input-not-opening-file-browser


## DEV LOG 3 ##
maslah mengenai event drag and drop.
saya mengalami masalah yaitku ketika melakukan drag lalu drop maka file yang saya buat pasti akan selau didownload.
saya sudah melakukan prevent default untuk event drop tetapi tetap tidak bisa, file tetap didownload.
functio yang meng handle event tersebut saya utak atik untuk memeperbaiki atau minimal untuk memberikan hasil error
yang berbeda. banyak percobaan saya lakukan tapi tetap tidak membuahkan hasil. namun ketika percobaan yang sekian saya mendapatkan ilham dair
stackoverflow. ternyata yg di prevent default tidak hanya untuk event drag dan drop, tetapi semua event yang berkaitan
dengan perilaku tersebut. ada banyak forum stackoverflow sebenarnya yg membahas, namun entah saya yg kurang memperhatika
karena ngantuk atau karena keyword yang saya masukan salah saya tidak tahu.
tidak saya cantumkan link karena sebernay ini issue umum....


## DEV LOG 4 ##
terdapat masalah layout untuk image dan text dalam bentuk flex. awalnya input ini mempunyai alur bila setelah melakukan drag and drop
maka gambar akan muncul di element img. karena ukuran gambar berbeda-beda, maka sudah pasti containernya akan overflow.
nah, msalahnya terjadi disini, ketika gambar dan textnya overflow, element tampak yang terkena scroll hanya sebagian, masih ada yang tertutup.

untuk penyelesainanya saya tinggal melakukan wrapping lagi untuk lement flex itu. setelah itu selesai.

*/