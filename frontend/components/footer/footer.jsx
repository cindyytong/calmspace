import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container dark-green-fill">
                   <h4 className="white row">Talkspace</h4>
                   <div className="icons row">
                       <a href="https://github.com/cindyytong"><img className="social-icon" src={window.githubURL} /></a>
                        <a href="https://www.cindytong.me/"><img className="social-icon" src={window.contactURL} /></a>
                        <a href="https://www.linkedin.com/in/heytong/"><img className="social-icon" src={window.linkedInURL} /></a>
                        <a href="https://www.instagram.com/sincerelyregards/"><img className="social-icon" src={window.instagramURL} /></a>
                        
                        
                        
                   </div>
                   <div className="disclaimer row white">
                        This is a clone of Talkspace, built by Cindy Tong at App Academy
        
            </div>
        </div>
    )
}

export default Footer; 