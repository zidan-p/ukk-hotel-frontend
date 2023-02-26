





export default ({onChange, children, name ="", value = ""}) => {

    

    return (
        <div className="">
            <label className="text-sm font-semibold text-slate-600 mb-2 block" htmlFor={name}>{children}</label>
            <input value={value} name={name} onChange={onChange} className="transition outline-none w-full border border-b focus:border-b-slate-700 p-2 rounded active:outline-none focus-within:outline-none" type="text" />
        </div>
    )
}
































