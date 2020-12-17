import { useParams } from "react-router-dom";

// http://localhost:3000/home/555
//       <route path="/home/:id>"

const About = () => {
    let { id } = useParams();
    console.log(id);  // prints 555
    return (
        <div id="AboutPage">
            <h2>About</h2>
            <br />
            <p>Made by Courtney Beattie</p>
            <br />
            <p>Carpark location data from <a href="https://www.mytransport.sg/content/mytransport/home/dataMall.html">LTA Datamall</a></p>
            <p>Carpark availability data from <a href="https://data.gov.sg/">data.gov.sg</a></p>
        </div>
    )
}

export default About;