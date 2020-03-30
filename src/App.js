import React from 'react';
import './App.css';
import './App.sass';
import avatar from './assets/myAvatar.png';
import hero from './assets/hero.svg';
import android from './assets/android.svg';
import web from './assets/web.svg';
function App() {
  return <div>
    <nav className="navbar is-transparent " role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="" alt="This is a Logo"/>
          </a>
          <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navmenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <a href='/hireme' className="navbar-item">Hire me</a>
            <div className="navbar-item">
              <a className="button is-primary is-outlined is-rounded" href="/contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section className="hero is-white has-text-centered animate-fadeUp">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                Front-end Developer (Web and Mobile)
              </h1>
              <h2 className="subtitle is-size-4-desktop">
              I design and code beautifully simple things, and I love what I do.
              </h2>
              <img className="avatar is-rounded" src={avatar} height="200" width="200" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <img className="is-bottom" src={hero}/>
        </div>
      </div>
    </section>
    <section className="section hero is-primary is-medium  has-text-centered is-long">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi 👋,I'm Abdenour. Nice to meet you. </h1>
            <h2 className="subtitle is-size-5-desktop">
            Still learning, but learning fast, I was able to pass from a simple user of computers to an enthousiast of everything that turns around it, now i have great vision of what a man can do with a computer , and how can the world be affected by the revolution of this technology, so yes this is becoming my field of study: Computer Engineering at ESI the Higher National School of Computer Engineering ,algiers, Algeria. I am a front-end developer who enjoys building beautifully simple and fluid UI's. Trust me, We can do art ;)
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <figure className="image">
                  <img className="image is-64x64" src={android}/>
                </figure>
                <h1 className="title is-size-4 is-spaced">Mobile Developer</h1>
                <p>I like turning any idea into reality in the mobile since it is obviously the most used device nowadays by everyone</p>
                <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>React Native, Flutter, JAVA</p>
                <p className="list-title  has-text-primary has-text-weight-normal">Tools I use:</p>
                <ul>
                  <li>Android Studio</li>
                  <li>Intellij IDEA</li>
                  <li>Visual Studio code</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image">
                  <img className="image is-64x64" src={web}/>
                </figure>
                <h1 className="title is-size-4 is-spaced">Web front-end Developer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p className="list-title has-text-primary has-text-weight-normal is-centered">Languages I speak:</p>
                <p>JavaScript, ReactJS, JQuery, HTML, CSS, Bulma, Bootstrap, Sass</p>
                <p className="list-title  has-text-primary has-text-weight-normal is-centered">Dev Tools:</p>
                <ul>
                  <li>Visual Studio</li>
                  <li>Chrome</li>
                  <li>Github</li>
                  <li>Codepen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default App;
