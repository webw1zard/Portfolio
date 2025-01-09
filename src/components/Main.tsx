import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import ava from './ryomen sakuna icon.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ava} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/webw1zard" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ulug'bek Nizomov</h1>
          <p>Front-End Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/webw1zard" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;