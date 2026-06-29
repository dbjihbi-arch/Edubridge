function Coouurse({img, title, departmet, description, rating, sales, price, discount, duration, lessons}){
    return(
        <div className="course">
            <span className="sale">Sale</span>
            <img src={img} alt={title}/>
            <div className="content">
                <div className="corse-field">
                    <p className="department">{departmet}</p>
                    <p className="rating"> <img src="/star (1).png"/> {rating} </p>

                </div>
                <h3>{title}</h3>
                <p className="description">{description}</p>
                <p className="sales">{sales} Sales</p>
                <p className="price">
                    <del>{price}</del>
                    <span className="text-secondar">{discount}</span>
                </p>
                <div className="course-info">
                    <p className="hr"> <img src="/hr.png"/> {duration}</p>
                    <p> <img src="/book.png"/> {lessons}</p>
                </div>
                    <a href="#" className="btn-lear">Lear More <img src="/chev.png"/> </a>
            </div>
        </div>
    )
}

export default Coouurse;