export default function GameCard (props) {
    let  classnames = "game-card"
    if (props.new === true){
        classnames += " new";
    }

    return(
        <article className={classnames}>
            <img src={props.img} alt={props.game}/>
            <h3>{props.game}</h3>
            <div className="card-details">
                <p>{props.viewers}</p>
                {props.new === true && <p className="new">New</p>}
            </div>
        </article>
    )
}