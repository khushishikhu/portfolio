import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import Resume from "../images/Resume.pdf"
import Web from "../images/Web.jpg"

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I am a graduated student in B.Tech majored in Computer Science and Engineering from <u> Harcourt Butler Technical University</u>. I have a keen interest in Web Development and built a few projects for learning. I like to participate in various challanges and hackathons.I am also an Open Source Project Contributor in some organisations. I am a regular contributor in the organisation AnitaB.Org and also test some of Pull Requests. I have even few contributions in Creative commons as Well.
            
            With consistency and persistency currently I am Mentor in OSH(Open source hack), a program conducted by AnitaB for beginners. One of my project was also selected in Girlscript Summer of Code(GSSoC) where I am Project Admin and Mentor of my project Periodo. Luckily I have also been selected as an Outreachy Participant. I also like problem solving
          </p>
          {close}
        </article>
        
        <article
          id="organization"
          className={`${this.props.article === 'organization' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Organizations</h2>
          <span className="image main">
          
          </span>
          <p>
        

          </p>
          {close}
        </article>

        <article
          id="cp"
          className={`${this.props.article === 'cp' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Programming</h2>
          <span className="image main">
          <img src={pic02} alt="" />
          </span>
          <p>
            <h3><a href="https://www.codechef.com/users/khushishikhu">Codechef</a></h3>
            <h3><a href="https://codeforces.com/profile/khushi_gautam">Codeforces</a></h3>
            <h3><a href="https://leetcode.com/khushishikhu/">Leetcode</a></h3>

          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          <p>
            <h4><a href="https://github.com/Feminine-Divine/periodo">Periodo</a></h4>
            <p>website: <a href="https://periodo-teal.vercel.app/">Periodo</a></p>
            Periodo - The Tracker focuses on young girls who are going to experience their first periods and the women who face problems tracking their period dates and remembering their dates be it for avoiding embarrassing moments or to monitor your period for lifestyle disorders(PCOS, PCOD, etc.).
          </p>
          <p>
            <h4><a href="https://github.com/Feminine-Divine/Woodog">Woodog</a></h4>
            <p>website: <a href="https://github.com/Feminine-Divine/Woodog">Woodog</a></p>
            Woodog🐶 is an initiative to provide help to increasing stray animals by providing them food 🍞 and refuge 🏠 by connecting them with fellow helpful humans. On the application, two types of people can be registered 📥 one who can provide the location and condition of a nearby stray, and another who can provide information and arrange shelter 🏠 and food 🍞 for them.
          </p>
          <p>
            <h4><a href="https://github.com/khushishikhu/Boardgame">Jigdise</a></h4>
            <p>website: <a href="https://jigdise.vercel.app/">Jigdise</a></p>
            This is a multiplayer board game app which is a virtual verion of English Poker game Yahtzee.
          </p>
            <h4><a href="https://github.com/khushishikhu/worldranks">World Ranks</a></h4>
            <p>website: <a href="https://worldranks.khushishikhu.vercel.app/">World Ranks</a></p>
            This project is based on world ranks.
          </p>
          <p>
            <h4><a href="https://github.com/khushishikhu/worldranks">Img-Square</a></h4>
            It is an app for detecting the awareness in the online classroom as whether the students are attentive the whole time or not by uploading the recorded video of the class at the website.
          </p>
          {close}
        </article>
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={Web} alt="" />
          </span>
          <p>
             <li>
               Web Development -(Html,Css,javascript)
             </li>
             <li>React</li>
          <li> Wordpress</li>
             <li>Nextjs</li>
             <li>Mongodb</li>
             <li>Postgresql</li>
             <li>Django</li>
             <li>Python</li>
          </p>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <p>
             <a href={Resume} download>Download my Resume</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : 'https://mail.google.com/mail/u/0/#inbox?compose=new'
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>you can email me at dpskhu13108@gmail.com</p>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/khushi-gautam-7708b4191/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/khushishikhu"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
