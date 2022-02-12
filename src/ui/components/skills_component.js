import { Card } from "react-bootstrap";
import "../../value/styles/skills_style.css";

const Skills = () => {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7HwVz9h18DrB8OeLJ1oUyWw6JPIBqfxDUEiFi_804PEIQxzvfuW5p0eQ3inRMifes4s&usqp=CAU",
        "http://www.priteshgupta.com/wp-content/uploads/2011/10/CSS3-Logo.png",
        "https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png",
        "data:image/png;base64,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",
        "https://damiandeluca.com.ar/wp-content/uploads/2020/05/flask.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        "https://media.istockphoto.com/vectors/nodejs-vector-logo-backend-programming-in-javascript-server-vector-id1195857274",
        "http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png",
        "https://www.gstatic.com/devrel-devsite/prod/v6276805c2ff8bacc915973efaa269b575b44ae3dde218d0ec8425b822ec321de/firebase/images/touchicon-180.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
        "http://assets.stickpng.com/images/5847f289cef1014c0b5e486b.png",
        "https://repository-images.githubusercontent.com/209643951/e4dfb380-cc39-11eb-8823-0686c64647a4",
        "https://logowik.com/content/uploads/images/flutter5786.jpg",
    ]
  const CardSkills = ({image, title}) => {
    return (
      <Card border="secundary p-2 m-2" className="SkillsCard">
        <div className="d-flex mb-2">
          <img
            className="skillsImgsCuadrado"
            src={image}
          />
          <b>{title}</b>
        </div>
      </Card>
    );
  };
  return (
    <div className="about dateSkills">
      <div className="aboutTitle text-primary">
        <b className="border-bottom border-primary border-3">Skills</b>
      </div>
      <div className="skills mt-5">
        <div className="skillsDates">
          <CardSkills image={images[0]} title={"HTML"}/>
          <CardSkills image={images[1]} title={"CSS"}/>
          <CardSkills image={images[2]} title={"Javascript"}/>
          <CardSkills image={images[3]} title={"Bootstrap"}/>
          <CardSkills image={images[4]} title={"Flask"}/>
          <CardSkills image={images[12]} title={"Flutter"}/>
        </div>
        <div className="skillsDates">
          <CardSkills image={images[5]} title={"ReactJs"}/>
          <CardSkills image={images[6]} title={"NodeJs"}/>
          <CardSkills image={images[7]} title={"MongoDb"}/>
          <CardSkills image={images[8]} title={"Firebase"}/>
          <CardSkills image={images[9]} title={"Python"}/>
          <CardSkills image={images[11]} title={"Dart"}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;