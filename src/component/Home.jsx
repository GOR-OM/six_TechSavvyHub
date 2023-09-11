import React from 'react'
import "../style/Home.scss"
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillYoutube , AiFillAmazonCircle,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main >
            <h1>TechSavvyHub</h1>
            <p>i can solve your all porblems </p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphic" />
        <div >
            <p>
            TechSavvyHub is your ultimate destination for all things technology. With a focus on innovation, knowledge sharing, and the latest trends, we're here to connect tech enthusiasts, professionals, and curious minds.
            </p>
            <p>
            Our platform serves as a central hub for insightful articles, in-depth reviews, captivating tutorials, interactive forums, and much more. Whether you're a seasoned tech guru or just starting to explore the digital realm, TechSavvyHub is your go-to source for staying informed and inspired.
            </p>
            <p>
            Join us and embark on an exciting journey through the ever-evolving landscape of technology.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <main>

        <h1>Who We are ? </h1>
        <div>
        <p>
        At TechSavvyHub, we ensure you stay up-to-date with the fast-paced world of technology. Our timely articles and news updates bring you the latest developments, product releases, and industry insights, making sure you're always in the know.
        </p>
        <p>
        Our team of tech experts rigorously tests and reviews a wide range of gadgets, software, and services. From smartphones to smart home devices, we provide unbiased and comprehensive reviews to help you make informed decisions when it comes to your tech purchases.
        </p>
        <p>
        Whether you're a beginner or a tech aficionado, TechSavvyHub offers a plethora of tutorials and guides to enhance your technological prowess. From coding tutorials and software walkthroughs to hardware setup guides, we're here to simplify complex concepts.
        </p>
        </div>
        </main>
    </div>


    <div className="home4" id='brands'>
        <div>
            <h1>Our Services</h1>

            <article>
                <div style={{animationDelay : "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay : "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay : "0.7s"}}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>
                <div style={{animationDelay : "0.9s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>


        </div>

    </div>

    </>
  )
}

export default Home