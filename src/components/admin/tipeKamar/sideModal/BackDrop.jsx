

function BackDrop({children, className, onClose}){

    const handleClose = (event)=>{
        // event.preventDefault();
        if(event.target !== event.currentTarget)return;
        onClose();
    }

    return(
        <div onClick={handleClose} className={` absolute inset-0 bg-gray-900 ${className}`}>
            {children}
        </div>
    )
}


export default BackDrop;

