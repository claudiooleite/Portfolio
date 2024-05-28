import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "./components/Header";
import AboutMe from "./components/AboutMe";
import "./styles/global.css";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header socials={socials} />
          <LandingSection />
          <ProjectsSection />
          <AboutMe />
          {/* <ContactMeSection /> */}
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
