const { useState } = require("react")

//component
import PrimaryFilter from "./PrimaryFilter"
import AdditionalFilter from "./AdditionalFilter"

function FilterTool({
    filterParams,
    onFind,
    onFilterChange,
}){
    const [showAdditional, setShowAdditional] = useState(false);

    function toggleAdditional(){
        setShowAdditional(!showAdditional);
    }
    return(
        <section className="bg-white rounded p-2 mb-3">
            <PrimaryFilter onFind={onFind} toggleAdditional={toggleAdditional} filterParams={filterParams} onFilterChange={onFilterChange} />
            <AdditionalFilter show={showAdditional} filterParams={filterParams} onFilterChange={onFilterChange} />
        </section>
    )
}


export default FilterTool