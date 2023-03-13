
import BackDrop from "./BackDrop"
import Content from "./Content"

function SideModal({handleClose}){

    return(
        <BackDrop className={"flex flex-row-reverse"}>
            <div className="basis-3/4 flex flex-col gap-2 bg-white rounded-l p-3">
                <Content onClose={handleClose} />
            </div>
        </BackDrop>
    )
}

export default SideModal