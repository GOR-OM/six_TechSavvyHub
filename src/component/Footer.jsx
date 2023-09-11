import React from 'react'
import '../style/Footer.scss'


const Footer = () => {
  return (
    <footer>
        <div>
        <p>© 2023 Your Website. All rights reserved.</p>
        </div>
        <div>
            <h1>
                Follow us
            </h1>
            <div>
                <a href="https://www.facebook.com/">FaceBook<i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/">Twitter<i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/">Instagram<i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/">Linkedin<i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.pinterest.com/">Pinterest<i className="fab fa-pinterest-p"></i></a>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer