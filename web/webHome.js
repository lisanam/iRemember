import React from 'react';
import {Button} from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="landing">
      <img 
        src="homepage.jpg"
        srcset="homepage2x.jpg 2x, 
                homepage3x.jpg 3x" 
        className="home-image"/>
      <div className="home-box">
        <div className="home-logo">iRemember</div>
        <div className="home-description">Designed to help caregivers support patients struggling with Alzheimer’s Disease and other forms of dementia.</div>
        <div className="home-bullet">With 
          <span className="home-bullet bold-text">iRemember</span>
          , you can: set reminders help care recipients recognize loved ones easy mobile app</div>
        <button className="sign-up-button">
          <a href="/auth/google" className="sign-up-button-text">Sign up now</a>
        </button>
        <a href="/signin" className="sign-in">Sign in</a>
      </div>
    </div>
    )    
  }
}