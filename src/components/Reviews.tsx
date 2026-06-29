import SectionHeader from "./SectionHeader";
import { ratingData } from "../../data";
import Review from "./Review";

function Reviews(){
    return(
        <section id="reviews">
            <div className="container">
                <SectionHeader title={"Each and every client is important"}
                description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatib us officia assumenda similique facilis nobis adipisci, eius alias totam quos quam archi tecto eos. Placeat illum culpa voluptates quas facilis aliquam iste."}/>
                <div className="ratings">
                    {ratingData.map((rating) => {
                        const {id, description, img,  job, name , start } = rating;
                        return <Review key={id} 
                        description={description} 
                        img={img} 
                        job={job} 
                        name={name} 
                        start={start}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Reviews;