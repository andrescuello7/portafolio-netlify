import HomeController from "../screens_controllers/home_screen_controller";
import Header from "../components/header_component";
import About from "../components/about_component";
import Present from "../components/present_component";
import Jobs from "../components/jobs_component";
import Skills from "../components/skills_component";
import Contact from "../components/contact_component";
import Footer from "../components/footer_component";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Present />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Jobs />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
