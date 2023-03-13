


function BackDrop({children, className, onClose}){

    const handleClose = (event)=>{
        event.preventDefault();
        if(event.target !== event.currentTarget)return;
        onClose();
    }

    return(
        <div onClick={handleClose} className={`${className} absolute z-10 inset-0 bg-gray-900 bg-opacity-60`}>
            {children}
        </div>
    )
}


export default BackDrop