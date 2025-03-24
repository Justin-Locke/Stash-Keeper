import { useEffect, useState } from "react"
import { getAllFabrics } from "../../services/fabricServices"
import { FabricOverview } from "./FabricOverview"

export const FabricList = () => {
    const [allFabrics, setAllFabrics] = useState([])
    const [filteredFabrics, setFilteredFabrics] = useState([])

    const getAndSetFabrics = () => {
        getAllFabrics().then((fabrics) => {
            setAllFabrics(fabrics)
        })
    }

    useEffect(() => {
        getAndSetFabrics()
    }, [])
    
    return (
        <>
        <div className="fabric-list-container">
            <h2>All Fabrics</h2>

            <article className="fabric-list">
                {allFabrics.map((fabricObj) => {
                    return (
                        <FabricOverview
                        fabric={fabricObj}
                        key={fabricObj.id}
                        />
                    )
                })}
            </article>
        </div>
        </>
    )
}