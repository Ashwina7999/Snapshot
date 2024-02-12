import React from "react";

function Footer() {
    
    return(
        <div className="footer">
            <div className="center">
                <h5>Support US</h5>
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src={require(`../assets/icons/Facebook.png`)} className="icons" alt="facebook"></img></a>
                
                <a href="https://www.instagram.com/ashwin_a79_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" rel="noreferrer" target="_blank"><img src={require("../assets/icons/Instagram.png")} className="icons" alt="instagram"></img></a>
                
                <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><img src={require("../assets/icons/Youtube.png")} className="icons" alt="youtube"></img></a>
                
                <a href="https://twitter.com/" rel="noreferrer" target="_blank"><img src={require("../assets/icons/Twitter.png")} className="icons" alt="twitter"></img></a>
                
                <a href="https://www.whatsapp.com/" rel="noreferrer" target="_blank"><img src={require("../assets/icons/Whatsapp.png")} className="icons" alt="whatsapp"></img></a>
                
                <a href="https://www.linkedin.com/in/ashwin-a-9054331b1/" rel="noreferrer" target="_blank"><img src={require("../assets/icons/LinkedIn.png")} className="icons" alt="linkedin"></img></a>
                
                <a href="https://www.google.com/gmail/about/" rel="noreferrer" target="_blank"><img src={require("../assets/icons/Gmail.png")} className="icons" alt="gmail"></img></a>
                
                <a href="https://join.skype.com/invite/WITXpvnNPZxa" rel="noreferrer" target="_blank"><img src={require("../assets/icons/Skype.png")} className="icons" alt="skype"></img></a>
                
                <p>Terms of Use - Privacy Policy - &copy; 2025 <a href="https://github.com/Ashwina7999"  className="link" rel="noreferrer" target="_blank">Ashwin A</a></p>
            </div>
	    </div>
    )
}

export default Footer