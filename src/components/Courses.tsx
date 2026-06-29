import SectionHeader from "./SectionHeader"
import { coursesData } from "../../data"
import Coouurse from "./Coouurse"

function Courses(){
    return(
        <section id="courses">
            <div className="container">
                <SectionHeader title="Make Online education acessible" 
                description=" Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Voluptatib
                us officia assumenda similique facilis nobis adipisci, eius alias totam quos quam archi
                tecto eos. Placeat illum culpa voluptates quas facilis aliquam iste."/>

                <div className="courses-container">
                    {coursesData.map((course) => {
                        const{departmet, description, discount, duration, id, img, lessons, price, rating, sales, title} = course
                        return <Coouurse 
                        key={id}
                        departmet={departmet}
                        description={description}
                        discount={discount}
                        duration={duration}
                        img={img}
                        lessons={lessons}
                        price={price}
                        rating={rating}
                        sales={sales}
                        title={title} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Courses