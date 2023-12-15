export default function FiltersMenuCard (props) {
    let status = props.status
    return(
        <div className="filter-card">
            <img src={props.img} alt={props.name} />
            <div className="filter-card-desc">
                <div className="filter-card-info">
                    <h4>{props.name}</h4>
                    <p>{props.game}</p>
                </div>
            </div>
            <p className={status}>{props.status}</p> 
        </div>
    )
}