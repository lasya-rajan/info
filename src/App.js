import React from 'react';
import './App.css';
import Picture1 from '/Users/lasyarajan/info/src/lasya.jpg'; 
import Image1 from '/Users/lasyarajan/info/src/image1.jpg';
import Image2 from '/Users/lasyarajan/info/src/image2.jpg';
import Image3 from '/Users/lasyarajan/info/src/image3.jpg';
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
                  <span className="icon solid major fa-music"></span>
                  <h3><a href="https://www.youtube.com/watch?v=EC1UAv4i_tI&t=1958s" >Live Sets by MNDSGN</a></h3>
                  <p>This LA transplant and I share a home state, and I've been vibing heavy with his unique brand of ambient lo-fi jazz hop.</p>
                </section>
                <section>
                  <span className="icon solid major fa-music"></span>
                  <h3><a hef="https://open.spotify.com/album/5fsq4qeIWboRRPG7mGGfxr?si=ZeX5bsfaTy6E1lqrx5wMbA">Notes with Attachments by Pino Palladino, Blake Mills</a></h3>
                  <p>A new project by two incredible classic instrumentalists. Easy listening and may become my favorite album of 2021.</p>
                </section>
                <section>
                  <span className="icon solid major fa-book"></span>
                  <h3><a href="https://www.google.com/books/edition/Hadji_Murad/ZLJ8AAAAIAAJ?hl=en&gbpv=1&printsec=frontcover">Hadji Murat by Leo Tolstoy</a></h3>
                  <p>Currently in the middle of this charming short story about some charismatic Avar rebels.</p>
                </section>
                <section>
                  <span className="icon solid major fa-flask"></span>
                  <h3><a href="https://dl.acm.org/doi/10.1145/3430984.3431023">GuessTheMusic</a></h3>
                  <p>This research paper is about song identification from electroencephalography (EEG) response using Convolution Neural Networks - fascinating stuff. </p>
                </section>
                <section>
                  <span className="icon solid major fa-utensils"></span>
                  <h3><a href="https://www.bonappetit.com/recipe/spicy-braised-tofu">Spicy Braised Tofu Recipe</a></h3>
                  <p>I make this easy spicy tofu recipe at least once a week. Korean-inspired flavors are the best.</p>
                </section>
                <section>
                  <span className="icon major fa-play-circle"></span>
                  <h3><a href= "https://www.youtube.com/watch?v=R67xki4jTwE">Brian Krock's Video Essays</a></h3>
                  <p>This Brooklyn-based composer and saxophonist makes engaging and witty videos about many different types of music.</p>
                </section>
              </div>
            </div>
          </section>

     
          <section id="five" className="wrapper style1 fade-up">
            <div className="inner">
              <h2>Let's connect</h2>
              <p>I'm always looking for collaborators and fresh perspectives on life.</p>
                      <h3 className="text10">Email</h3>
                      <a href="#" className="text10">lar139@georgetown.edu</a>
                      <p>
                      </p>
                      <h3 className= "text9">Links</h3>
                      <ul className="text8">
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
