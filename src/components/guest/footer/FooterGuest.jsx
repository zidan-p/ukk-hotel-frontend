
import Image from "next/image"


export default () => {
    return(
        <footer className="font-sans border-t border-t-gray-400 text-gray-600 text-sm font-semibold flex justify-center bg-gray-200 py-7 relative">
            <div className="absolute flex left-0 ml-3 text-xs hover:bg-gray-300 cursor-pointer px-4 py-0.5 rounded">
                <Image className="w-4" src={"/icon/more-vertical.svg"} width={50} height={50} />
                <p>source asset</p>
            </div>
            <h4>Create with 💞 by <a href="">Zidan Putra Rahman</a> </h4>
        </footer>
    )
}