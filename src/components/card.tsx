function Card({ img, title, descriprion, color, bgColor}){
    return(
        <div className="card">
            <span className="icon" style={{color: color, background: bgColor}}>
                <img src={img} className="ma"/>
            </span>
            <h2>{title}</h2>
            <span className="line"></span>
            <p>{descriprion}</p>
        </div>
    )
}

export default Card;