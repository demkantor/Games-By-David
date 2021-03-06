import React, { Component } from 'react';
import '../App/App.css';


class Nav extends Component {


    render() {
        return (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="https://demkantor.github.io/david-dot-com.io/" target="__blank" className="nav-link">
          <span className="link-text logo-text">Games By David</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
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
        <a href="#/" className="nav-link">
        <svg aria-hidden="true" 
          focusable="false" 
          data-prefix="fas" 
          data-icon="star" 
          className="svg-inline--fa fa-star fa-w-18" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 576 512">
            <path fill="currentColor" 
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            className="fa-secondary"
            ></path></svg>
          <span className="link-text">High Scores</span>
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
        <a href="#tic-tac-toe" className="nav-link">
        <svg version="1.1" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px"
        viewBox="0 0 512 512">
        <g><g>
          <path fill="currentColor"
          d="M55.652,0C24.968,0,0,24.968,0,55.652v183.652h239.304V0H55.652z"
          className="fa-secondary"
          ></path>
        </g></g><g><g>
          <path fill="currentColor"
          d="M372.87,105.739c-18.413,0-33.391,14.978-33.391,33.391s14.978,33.391,33.391,33.391s33.391-14.978,33.391-33.391S391.283,105.739,372.87,105.739z"
          className="fa-secondary"
          ></path>
	      </g></g><g><g>
          <path fill="currentColor"
          d="M456.348,0H272.696v239.304H512V55.652C512,24.968,487.032,0,456.348,0z M372.87,205.913c-36.826,0-66.783-29.956-66.783-66.783s29.956-66.783,66.783-66.783s66.783,29.956,66.783,66.783S409.696,205.913,372.87,205.913z"
          className="fa-secondary"
          ></path>
	      </g></g><g><g>
          <path fill="currentColor"
          d="M0,272.696v183.652C0,487.032,24.968,512,55.652,512h183.652V272.696H0z M184.327,394.457c6.521,6.516,6.521,17.092,0,23.609c-6.521,6.521-17.087,6.521-23.609,0l-21.587-21.587l-21.587,21.587c-6.521,6.521-17.087,6.521-23.609,0c-6.521-6.516-6.521-17.092,0-23.609l21.587-21.587l-21.586-21.587c-6.521-6.516-6.521-17.092,0-23.609c6.521-6.521,17.087-6.521,23.609,0l21.586,21.587l21.587-21.587c6.521-6.521,17.087-6.521,23.609,0c6.521,6.516,6.521,17.092,0,23.609l-21.587,21.587L184.327,394.457z"
          className="fa-secondary"
          ></path>
	      </g></g><g><g>
          <path fill="currentColor"
          d="M272.696,272.696V512h183.652C487.032,512,512,487.032,512,456.348V272.696H272.696z"
          className="fa-secondary"
          ></path>
	      </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
          <span className="link-text">Tic-Tac-Toe</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#whack" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="gavel" 
        className="svg-inline--fa fa-gavel fa-w-16" 
        role="img" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
          <path fill="currentColor" 
          d="M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z"
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
        <a href="#tetris" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="th-large" 
        className="svg-inline--fa fa-th-large fa-w-16" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
          <path fill="currentColor" 
          d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
          className="fa-primary"
          ></path></svg>
          <span className="link-text">Tetris</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#space" className="nav-link">
        <svg aria-hidden="true"
         focusable="false" 
         data-prefix="fas" 
         data-icon="ship" 
         role="img" 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 512 512">
           <path fill="currentColor" 
              d="M256,61c-21.63,0-42.264,29.681-59.418,71.785C210.595,143.85,232.385,151,256,151c25.457,0,46.254-7.714,59.432-18.181C298.275,90.7,277.636,61,256,61z"
              className="fa-primary"
              ></path>
            <path fill="currentColor" 
              d="M76,181c-26.596,0-37.502,43.352-41.957,81.623C46.427,267.829,60.859,271,76,271c15.233,0,29.599-3.171,41.94-8.366C113.489,224.358,102.603,181,76,181z"
              className="fa-primary"
              ></path>
            <path fill="currentColor" 
              d="M76,181c-26.596,0-37.502,43.352-41.957,81.623C46.427,267.829,60.859,271,76,271c15.233,0,29.599-3.171,41.94-8.366C113.489,224.358,102.603,181,76,181z"
              className="fa-primary"
              ></path>
            <path fill="currentColor" 
              d="M436,181c-26.64,0-37.52,43.477-41.959,81.791c25.12,10.179,58.894,9.818,83.904-0.251C473.484,224.292,462.578,181,436,181z"
              className="fa-primary"
              ></path>
            <path fill="currentColor"
              d="M256,241c-8.276,0-15,6.724-15,15v60c0,8.276,6.724,15,15,15s15-6.724,15-15v-60C271,247.724,264.276,241,256,241z"
              className="fa-primary"
              ></path>
            <path fill="currentColor"
              d="M480.447,293.835C466.635,298.385,451.536,301,436,301c-15.562,0-30.617-2.679-44.447-7.238c-0.119,2.543-0.216,4.978-0.289,7.238h-34.673c-5.283-45.077-16.121-95.887-30.439-139.14C307.486,173.784,282.931,181,256,181c-26.933,0-51.447-7.178-70.151-19.138c-14.73,44.504-25.494,96.913-30.439,139.138h-34.673c-0.071-2.19-0.167-4.561-0.28-7.02C106.769,298.482,91.709,301,76,301c-15.617,0-30.749-2.41-44.46-6.916C31.093,303.78,31,311.616,31,316c0,22.544,2.168,135,45,135c18.516,0,31.23-19.658,38.73-60h45.059l25.605,25.605C188.207,419.418,192.016,421,196,421h120c3.984,0,7.793-1.582,10.605-4.395L352.211,391h45.059c7.5,40.342,20.215,60,38.73,60c42.832,0,45-112.456,45-135C481,311.58,480.905,303.64,480.447,293.835z M301,316c0,24.814-20.186,45-45,45c-24.814,0-45-20.186-45-45v-60c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45V316z"
              className="fa-primary"
              ></path>
            <path fill="currentColor"
              d="M214.669,451c5.072,20.841,15.449,41.329,30.725,56.605c2.93,2.93,6.768,4.395,10.606,4.395s7.676-1.465,10.605-4.395c15.276-15.276,25.655-35.764,30.727-56.605H214.669z"
              className="fa-primary"
              ></path>
              </svg>
          <span className="link-text">Space Invaders</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#game-of-life" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="heartbeat" 
        className="svg-inline--fa fa-heartbeat fa-w-16" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
          <path fill="currentColor" 
          d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
          className="fa-primary"
          ></path></svg>
          <span className="link-text">Game of Life</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#r-p-s" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="hand-scissors" 
        className="svg-inline--fa fa-hand-scissors fa-w-16" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
          <path fill="currentColor" 
          d="M216 440c0-22.092 17.909-40 40-40v-8h-32c-22.091 0-40-17.908-40-40s17.909-40 40-40h32v-8H48c-26.51 0-48-21.49-48-48s21.49-48 48-48h208v-13.572l-177.551-69.74c-24.674-9.694-36.818-37.555-27.125-62.228 9.693-24.674 37.554-36.817 62.228-27.124l190.342 74.765 24.872-31.09c12.306-15.381 33.978-19.515 51.081-9.741l112 64A40.002 40.002 0 0 1 512 168v240c0 18.562-12.77 34.686-30.838 38.937l-136 32A39.982 39.982 0 0 1 336 480h-80c-22.091 0-40-17.908-40-40z"
          className="fa-primary"
        ></path></svg>
          <span className="link-text">Rock Paper Scissors</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#breakout" className="nav-link">
        <svg 
          aria-hidden="true" 
          focusable="false" 
          data-prefix="fas" 
          data-icon="pallet" 
          className="svg-inline--fa fa-pallet fa-w-20" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 640 512"
        ><path fill="currentColor" 
          d="M144 256h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H384v128l-64-32-64 32V0H144c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zm480 128c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-64h48zm-336 64H128v-64h160v64zm224 0H352v-64h160v64z"
          className="fa-primary"
          ></path>
        </svg>
          <span className="link-text">Breakout</span>
        </a>
      </li>  

      <li className="nav-item">
        <a href="#flappy" className="nav-link">
        <svg 
          aria-hidden="true" 
          focusable="false" 
          data-prefix="fas" 
          data-icon="dove" 
          className="svg-inline--fa fa-dove fa-w-16" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512">
            <path fill="currentColor" 
            d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
            className="fa-primary"
            ></path>
        </svg>
          <span className="link-text">Flappy Bird</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#pac" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="ghost" 
        className="svg-inline--fa fa-ghost fa-w-12" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512">
          <path fill="currentColor" 
          d="M186.1.09C81.01 3.24 0 94.92 0 200.05v263.92c0 14.26 17.23 21.39 27.31 11.31l24.92-18.53c6.66-4.95 16-3.99 21.51 2.21l42.95 48.35c6.25 6.25 16.38 6.25 22.63 0l40.72-45.85c6.37-7.17 17.56-7.17 23.92 0l40.72 45.85c6.25 6.25 16.38 6.25 22.63 0l42.95-48.35c5.51-6.2 14.85-7.17 21.51-2.21l24.92 18.53c10.08 10.08 27.31 2.94 27.31-11.31V192C384 84 294.83-3.17 186.1.09zM128 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
          className="fa-primary"
        ></path></svg>
          <span className="link-text">Pac-Man</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#dice" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="dice" 
        className="svg-inline--fa fa-dice fa-w-20" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512">
          <path fill="currentColor" 
          d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
          className="fa-primary"
        ></path></svg>
          <span className="link-text">Dice Game</span>
        </a>
      </li>  

      <li className="nav-item">
        <a href="#chess" className="nav-link">
        <svg aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="chess-knight" 
        className="svg-inline--fa fa-chess-knight fa-w-12" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512">
          <path fill="currentColor" 
          d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
          className="fa-primary"
        ></path></svg>
          <span className="link-text">Chess</span>
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