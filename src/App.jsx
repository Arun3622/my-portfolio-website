import "./App.css";
import Header from "./header";
import Footer from "./footer";
import logo from "./img/img1.jpg";
function App() {
  return (
    <>
      <Header />
      <div className="img">
        <img src={logo} alt="logo" height={480} width={480} />
        <div className="text">
          <h1 className="hello">Hello</h1>
          <h2 className="bit">A Bit About Me</h2>
          <h4 className="skilled">
            Arun Prajapati: skilled in website development, microcontroller programming,<br /> and web design.
            Strong grasp of business, finance, and stock markets,
             including <br />options trading. Enthusiastic about 
            leveraging technical and financial expertise<br /> for impactful
             results. Ready to contribute to your company's success.
            
          </h4>
          <div className="box">
            <div className="circle1">
              <a className="resumetext" href="resume.jsx"><h3>Resume</h3></a>
            </div>
            <div className="circle2">
              <a className="Projectstext" href="#"><h3>Projects</h3></a>
            </div>
            <div className="circle3">
              <a className="Contacttext" href="#"><h3>Contact</h3></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
