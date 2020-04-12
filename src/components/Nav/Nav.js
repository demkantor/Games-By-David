import React, { Component } from 'react';
import '../App/App.css';


class Nav extends Component {


    render() {
        return (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="https://github.com/demkantor/Games-By-David" target="__blank" className="nav-link">
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
        <a href="#whack" className="nav-link">
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
          <span className="link-text">Whack-a-Mouse</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#snake" className="nav-link">
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
        <a href="#connect" className="nav-link">
          <svg aria-hidden="true"
          focusable="false"
          data-icon="four"
          role="img"
          xmlns="http://www.w3.org/2000/svg" 
          width="24px"
          viewBox="0 0 47.4 47.4"
          className="fa-primary" >
              <path fill="currentColor" 
              d="M47.306,22.274c-0.295-1.812-1.201-3.452-2.552-4.618c-1.35-1.165-3.097-1.814-4.919-1.829h-0.062c-0.574,0-1.092,0.056-1.584,0.172c-3.649,0.859-6.036,3.959-5.938,7.713c0.021,0.785-0.193,1.47-0.635,2.034c-0.606,0.769-1.559,1.228-2.55,1.228c-0.295,0-0.587-0.041-0.868-0.12c-1.314-0.373-2.298-1.449-2.446-2.679c-0.179-1.461,0.372-2.566,1.638-3.284c2.882-1.635,4.386-4.876,3.741-8.063c-0.728-3.597-3.793-6.11-7.455-6.11c-0.402,0-0.809,0.031-1.208,0.092c-1.921,0.291-3.703,1.39-4.889,3.016c-1.197,1.64-1.687,3.605-1.378,5.534c0.393,2.446,1.696,4.321,3.876,5.574c0.942,0.541,1.475,1.347,1.586,2.394c0.095,0.911-0.188,1.795-0.798,2.49c-0.625,0.713-1.536,1.135-2.499,1.159c-0.008,0-0.062,0.001-0.071,0.001c-0.867,0-1.742-0.381-2.34-1.019c-0.579-0.617-0.866-1.451-0.807-2.347c0.032-0.501-0.01-1.038-0.131-1.643c-0.349-1.757-1.288-3.333-2.646-4.44c-1.341-1.094-3.043-1.697-4.793-1.697c-0.466,0-0.94,0.042-1.408,0.126c-1.956,0.351-3.732,1.527-4.873,3.224c-1.138,1.693-1.554,3.775-1.142,5.713c0.76,3.588,3.826,6.094,7.454,6.094c1.348,0,2.664-0.366,3.807-1.06c0.474-0.288,0.979-0.434,1.5-0.434c0.1,0,0.2,0.005,0.301,0.016c1.733,0.196,2.957,1.605,2.912,3.351c-0.013,0.496,0.01,0.933,0.071,1.337c0.271,1.809,1.17,3.46,2.532,4.649c1.355,1.182,3.084,1.834,4.867,1.834c0.254,0,0.512-0.013,0.768-0.039c1.589-0.163,2.944-0.683,4.027-1.544c1.07-0.851,1.901-2.053,2.47-3.573c0.341-0.909,0.385-1.835,0.408-2.952c0.031-1.476,1.252-3.068,3.171-3.068c0.538,0,1.048,0.139,1.517,0.412c1.204,0.703,2.489,1.059,3.821,1.059c0.421,0,0.851-0.034,1.279-0.102c1.957-0.309,3.693-1.389,4.889-3.043C47.139,26.185,47.621,24.211,47.306,22.274z M7.578,26.869c-0.923,0-1.791-0.361-2.444-1.015s-1.013-1.523-1.013-2.445c0.001-1.942,1.521-3.463,3.462-3.463c0.929,0.003,1.799,0.365,2.451,1.019c0.653,0.655,1.011,1.523,1.008,2.445C11.035,25.285,9.449,26.869,7.578,26.869z M20.234,14.263c0.012-1.899,1.56-3.444,3.452-3.444c0.942,0.006,1.817,0.374,2.469,1.036c0.653,0.66,1.009,1.537,1.001,2.466c-0.015,1.884-1.569,3.417-3.462,3.417c-0.003,0-0.005,0-0.008,0C21.771,17.724,20.223,16.165,20.234,14.263z M23.695,36.577c-0.001,0-0.001,0-0.002,0c-0.919,0-1.787-0.363-2.442-1.021c-0.66-0.661-1.021-1.538-1.017-2.468c0.009-1.891,1.563-3.43,3.463-3.43c1.914,0.007,3.464,1.559,3.459,3.459C27.152,35.021,25.599,36.574,23.695,36.577z M39.824,26.869c-0.001,0-0.003,0-0.004,0c-0.924,0-1.796-0.365-2.455-1.028c-0.659-0.664-1.019-1.537-1.013-2.458c0.003-0.92,0.368-1.784,1.024-2.434c0.565-0.559,1.214-0.84,1.616-0.999c0.253-0.391,0.696-0.432,0.764-0.436c0.02-0.001,0.039-0.002,0.059-0.002c0.031,0,0.602,0.007,0.868,0.515c0.033,0.013,0.066,0.025,0.096,0.037c0.114,0.043,0.235,0.089,0.36,0.141c0.422,0.174,0.8,0.427,1.125,0.753c0.652,0.656,1.01,1.534,1.008,2.474C43.264,25.319,41.717,26.86,39.824,26.869z"/
              >
            </svg>
          <span className="link-text">Connect Four</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#nav" className="nav-link">
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
        <a href="#nav" className="nav-link">
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
        <a href="#nav" className="nav-link">
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