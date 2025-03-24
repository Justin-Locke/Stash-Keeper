import "./Fabric.css"

export const FabricOverview = ({ fabric }) => {
    return (
        <section className="fabric-overview">
            <header className="fabric-overview-header">{fabric.name}</header>
            <a>
               <img src={fabric.image_url} className="fabric-image" />
            </a>
        </section>
    )
}