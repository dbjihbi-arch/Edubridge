function Review({start, description,img, name, job}){
    return(
        <div className="rating">
            <span className="start">{start}</span>
            <p className="description">{description}</p>
            <div className="person">
                ,<img src={img} alt={name} />
                <div>
                    <h3 className="text-primary">{name}</h3>
                    <p>{job}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;