




export default ({nama, children,className}) => {
    //childern = komen
    return(
        <div className={(className || "" ) + " w-full px-5 py-5"}>
            <h5 className="font-semibold">{nama}</h5>
            <p>{children}</p>
        </div>
    )
}