import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Projects from "../Project/Project";
import Contact from "../Contact/Contact";

const Home = () => {
    return(
        <div>
            <Header />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
export default Home;