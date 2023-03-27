


//karena saya tidak menggunakna type script maka saya menggunkana ini
let dataExample = [
    {
        label : "Foo Title",
        value : 1
    }
]

export default ({onChange, children, name ="", value = "", data= []}) => {

    function handleChange(e){
        onChange(e);
    }

    return (
        <div className="">
            <label className="text-sm font-semibold text-slate-600 mb-2 block" htmlFor={name}>{children}</label>
            <select 
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                name={name} 
            >
                {data.map((el,index) => (
                    <option 
                        key={index}
                        className="py-1"
                        value={el.value}
                    >
                        {el.label}
                    </option>
                ))}
            </select>
        </div>
    )
}