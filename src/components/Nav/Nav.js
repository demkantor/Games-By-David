import React, { Component } from 'react';



class Nav extends Component {


    render() {
        return (
            <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="#login" className="nav-link">
          <span className="link-text logo-text">Games By David</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li className="nav-item">
        <a href="#memory" className="nav-link">
          <svg aria-hidden="true" 
          focusable="false" 
          data-prefix="fas" 
          data-icon="sd-card" 
          className="svg-inline--fa fa-sd-card fa-w-12" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 384 512">
              <path fill="currentColor" 
              d="M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 160h-48V64h48v96zm80 0h-48V64h48v96zm80 0h-48V64h48v96z"
              className="fa-secondary"
              ></path></svg>
          <span className="link-text">Memory</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#wack" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="mouse" 
        className="svg-inline--fa fa-mouse fa-w-12" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512">
          <path fill="currentColor" 
          d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"
          className="fa-secondary"
        ></path></svg>
          <span className="link-text">Wack-a-Mouse</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#nav" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas"
        data-icon="snake" 
        role="img"
        viewBox="0 0 24 24" 
        width="24px"  
        xmlns="http://www.w3.org/2000/svg" 
        className="fa-primary"
          >
          <path fill="currentColor"
          d="M21.8,18.1c0.1-0.3,0.2-0.7,0.2-1.1c0-1.7-1.3-3-3-3h-4V8h7V7h-3V4c0-2.2-1.8-4-4-4h-2c-2.2,0-4,1.8-4,4v10H5   c-1.7,0-3,1.3-3,3c0,0.4,0.1,0.8,0.2,1.1C0.9,18.5,0,19.6,0,21c0,1.7,1.3,3,3,3h18c1.7,0,3-1.3,3-3C24,19.6,23.1,18.5,21.8,18.1z    M11,4c0-1.1,0.9-2,2-2h2c1.1,0,2,0.9,2,2v2h-4v8h-2V4z M5,16h14c0.6,0,1,0.4,1,1s-0.4,1-1,1H5c-0.6,0-1-0.4-1-1S4.4,16,5,16z    M21,22H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,22,21,22z"/
          >
        </svg>
          <span className="link-text">Snake</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#other" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="city" 
        className="svg-inline--fa fa-city fa-w-20" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512">
            <path fill="currentColor" 
            d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"
            className="fa-primary"
        ></path></svg>
          <span className="link-text">City Planning</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#stages" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="money-check-alt" 
        className="svg-inline--fa fa-money-check-alt fa-w-20" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512">
            <path fill="currentColor" 
            d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07zM416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8v16z"
            className="fa-primary"
        ></path></svg>
          <span className="link-text">Banking</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#clients" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="code-branch" 
        className="svg-inline--fa fa-code-branch fa-w-12" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512">
            <path fill="currentColor" 
            d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
            className="fa-primary"
        ></path></svg>
          <span className="link-text">Branching</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#forms" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="paragraph" 
        className="svg-inline--fa fa-paragraph fa-w-14" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512">
            <path fill="currentColor" 
            d="M448 48v32a16 16 0 0 1-16 16h-48v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96h-32v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z"
            className="fa-primary"
        ></path></svg>
          <span className="link-text">Forms</span>
        </a>
      </li>

      <li className="nav-item final">
        <a href="https://github.com/demkantor/Games-By-David" target="__blank">
          <img className="final-image" src="/images/octocat.gif" width="100px" alt="octocat"/>
        </a>
      </li>
    </ul>
  </nav>
        )
    }
}


export default Nav;