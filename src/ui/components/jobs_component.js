import { Card, Button } from "react-bootstrap";
import "../../value/styles/jobs_style.css";

//Imagenes
import Urban from "../../images/urban.png";
import Radio from "../../images/radio.png";
import Movie from "../../images/movies.png";
import Immedit from "../../images/immedit.png";
import Commers from "../../images/e-commers.png";
import Evenly from "../../images/evenly.png";

const Jobs = () => {
  const JobsCard = ({href, image, title}) => {
    return (
      <Card className="cardJob mt-5">
        <a href={href}>
          <Card.Img variant="top" src={image} />
        </a>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="about">
      <div className="aboutTitle text-primary">
        <b className="border-bottom border-primary border-3">Jobs</b>
      </div>
      <div className="Jobs">
        <JobsCard href={"#"} image={Radio} title={"Radio Web"}/>
        <JobsCard href={"https://client-andromeda.vercel.app"} image={Urban} title={"Urban City"}/>
        <JobsCard href={"#"} image={Movie} title={"Movies Api"}/>
        <JobsCard href={"#"} image={Immedit} title={"Immedit"}/>
        <JobsCard href={"https://admiring-stonebraker-a257df.netlify.app"} image={Evenly} title={"Evenly"}/>
        <JobsCard href={"https://e-commers-pi.vercel.app"} image={Commers} title={"e-commers"}/>
      </div>
    </div>
  );
};

export default Jobs;
