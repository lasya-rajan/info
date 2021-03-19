import React from 'react';
import './App.css';
import Picture1 from '/Users/lasyarajan/info/src/lasya.jpg'; 
import Image1 from '/Users/lasyarajan/info/src/image1.jpg';
import Image2 from '/Users/lasyarajan/info/src/image2.jpg';
import Image3 from '/Users/lasyarajan/info/src/image3.jpeg';
import pdf from '/Users/lasyarajan/info/src/lasyarajanresume.pdf';
import pdf2 from '/Users/lasyarajan/info/src/lrajandesignportfolio.pdf';

class App extends React.Component {
  render (){
    return (
      <div className= "App">
        
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              <li><a href="#intro">Hello World</a></li>
              <li><a href="#one">Programming Projects</a></li>
              <li><a href="#two">Music</a></li>
              <li><a href= "#three">Diversity, Equity, and Inclusion Work</a></li>
              <li><a href ="#four">My Favorite Things</a></li>
              <li><a href="#five">Let's connect</a></li>
            </ul>
          </nav>
        </div>
      </section>


      <div id="wrapper">


          <section id="intro" className="wrapper style1 fullscreen fade-up">
            <div className="inner">
              <h1 className = "text1">Hi! I'm Lasya. </h1>
              <ul className = "text2"> 
              <li className = "text3"> I'm a technologist, designer, and digital creative from the NYC metro area. </li>
              <p></p>
              <li className = "text4">I'm currently studying Computer Science and Arabic at Georgetown University. </li>
              <p></p>
              <li className = "text5"> I'm passionate about empathetic design and the intersection of art and technology. </li>
              <p></p>
              <p></p>
              <ul className = "actions">
                <li><a href= {pdf} className = "button">Resume</a></li>
                <li><a href= {pdf2} className = "button">Design Portfolio</a></li>
                </ul>
     </ul>
              <img src = {Picture1} className = "photo" alt = "A photo of me hiking in Cherry Springs Dark Sky Park, PA." />
              <ul className="actions">
              
             
              
              </ul>
            </div>
          </section>

      
          <section id="one" className="wrapper style2 spotlights">
            <section>
              <a className="photo2"><img src= {Image1}/></a>
              <div className="content">
                <div className ="inner">
                  <h2 className = "text7">Thinking...coding...even more thinking</h2>
                  <p>I use side programming projects to explore new tools, prototype ideas, and learn new things. Right now, I'm getting into audio development.</p>
                  <ul className="actions">
                    <li><a href="generic.html" className="button">Learn more</a></li>
                  </ul>
                </div>
                </div>
            </section >
            <section id = "two">
              <a href="#" className="photo2"><img src= {Image2} alt="" data-position="top center" /></a>
              <div className="content">
                  <h2>Making tunes</h2>
                  <p>Learn about on my ongoing journey with guitar, bass, and Ableton Live.</p>
                  <ul className="actions">
                    <li><a href="generic.html" className="button">Learn more</a></li>
                  </ul>
              </div>
            </section>
            <section id = "three">
              <a href="#" className="photo2"><img src={Image3} alt="" data-position="25% 25%" /></a>
              <div className="content">
                <div className="inner">
                  <h2>Pushing for justice</h2>
                  <p>I push every organization I'm involved in to be aware of and design for marginalized perspectives, whether that be an improv team or a tech startup.</p>
                  <ul className="actions">
                    <li><a href="generic.html" className="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </section>

          <section id = "four" className="wrapper style3 fade-up">
            <div className="inner">
              <h2>Things I'm Currently Digging</h2>
              <p>These are a few of my favorite things (aka what I'm currently listening to, reading, watching, and using)</p>
              <div className="features">
                <section>
                  <span className="icon solid major fa-code"></span>
                  <h3>Lorem ipsum amet</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                  <span className="icon solid major fa-lock"></span>
                  <h3>Aliquam sed nullam</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                  <span className="icon solid major fa-cog"></span>
                  <h3>Sed erat ullam corper</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                  <span className="icon solid major fa-desktop"></span>
                  <h3>Veroeros quis lorem</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                  <span className="icon solid major fa-link"></span>
                  <h3>Urna quis bibendum</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
                <section>
                  <span className="icon major fa-gem"></span>
                  <h3>Aliquam urna dapibus</h3>
                  <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                </section>
              </div>
              <ul className="actions">
                <li><a href="generic.html" className="button">Learn more</a></li>
              </ul>
            </div>
          </section>

     
          <section id="five" className="wrapper style1 fade-up">
            <div className="inner">
              <h2>Let's connect</h2>
              <p>I'm always looking for collaborators and fresh perspectives on life.</p>
                      <h3>Email</h3>
                      <a href="#">lar139@georgetown.edu</a>
                      <p>
                      </p>
                      <h3>Links</h3>
                      <ul className="icons">
                        <li><a href="https://github.com/lasya-rajan" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/lasya-rajan-006531145/" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                  </ul>
            </div>
          </section>
      </div>
      <footer id="footer" className="wrapper style1-alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Lasya Rajan, 2021. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
      </div>
    );

  }

}

export default App;
