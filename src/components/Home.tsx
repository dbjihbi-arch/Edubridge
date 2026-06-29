import { cardData } from "../../data"
import Card from "./card";
function Home(){
    return(
    <section id="home">
        <div className="container">
            <div className="home-header">
                <span>Join Us</span>
                <h1>Best Learning Opportunities</h1>
                <p>We Know how large objecrs will act, but things on a small scale
                    just do not act that way.
                </p>
                <a href="#" className="btn btn-red">Get Quote Now</a>
                <a href="#" className="btn btn-transparent">Learn More</a>
            </div>
            <div className="card-container">
                {cardData.map(card => {
                    console.log(card);
                    const {title, id, bgColor, color, descriprion, img} = card
                    return <Card key={id} title={title} bgColor={bgColor} color={color} descriprion={descriprion} img={img}/>
                })}
            </div>
        </div>
    </section>
    )
}

export default Home;