import { useParams } from "react-router-dom";

// http://localhost:3000/home/555
//       <route path="/home/:id>"

const About = () => {
    let { id } = useParams();
    console.log(id);  // prints 555
    return (
        <div id="AboutPage">
            <h2>About</h2>
            <p>Made by Courtney Beattie</p>
            <p>Data from LTA</p>
        </div>
    )
}

export default About;