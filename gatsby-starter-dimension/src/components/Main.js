import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import Resume from "../images/Resume.pdf"

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
            I am a sophomore student pursuing B.Tech in Computer Science and Engineering from <u> Harcourt Butler Technical University</u>. I have a keen interest in Web Development and built a few projects for learning. I like to participate in various challanges and hackathons.I am also an Open Source Project Contributor in some organisations. I am a regular contributor in the organisation AnitaB.Org and also test some of Pull Requests. I am a regular competitive programmer and practice on various platforms like leetcode, codechef, Codeforces, etc.
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
            <h4><a href="https://github.com/khushishikhu/worldranks">World Ranks</a></h4>
            This project is based on world ranks.
          </p>
          <p>
            <h4><a href="https://github.com/khushishikhu/periodo">Periodo</a></h4>
            It's a period tracking web app for the young girls.
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
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Thank you!!
            <p>
              you can mail me at dpskhu13108@gmail.com and check my profile.
            </p>
          </p>
          <ul className="icons">
            <p>
              <a href="https://www.linkedin.com/in/khushi-gautam-7708b4191/">
                <span className="label">Linkdin</span>
              </a>
            </p>
            <p>
              <a href="https://github.com/khushishikhu">
                <span className="label">GitHub</span>
              </a>
            </p>
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
