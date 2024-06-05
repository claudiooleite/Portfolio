import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { socials } from "./components/Header";
import AboutMe from "./components/AboutMe";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
      <AlertProvider>
        <main>
          <Header socials={socials} />
          <LandingSection />
          <ProjectsSection />
          <AboutMe />
          <ContactMeSection />
          <Footer />
          <Alert />
          <ScrollToTopButton/>
        </main>
      </AlertProvider>
  );
}

export default App;
