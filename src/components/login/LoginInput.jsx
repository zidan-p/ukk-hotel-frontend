




function LoginInput({onChange, name, label }){
    return(
        <div className="">
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange(e)} id={name} type="text" name={name} />
        </div>
    )
}

export default LoginInput