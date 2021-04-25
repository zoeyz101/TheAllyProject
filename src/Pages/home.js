import "../Styles/home.css";
import {Navbar} from "../Components/navbar";
import hands from "../Images/Hands.png";
import black from "../Images/Black2.png"


export const Home = () => {
    return(
        <div class="container">
            <div class="h1-text">
                <span class="red-text"> The Ally </span>
                <span class="white-text">&nbsp;Project</span>
            </div>

            <div class ="p-text" id="explain-text-1">
                Since the beginning of the pandemic, over 3800 anti-Asian racist incidents have been reported.
            </div >
            <div class ="p-text" id="explain-text-2">
                The Ally Project was created to expose the internal biases that people may have towards the asian community.
            </div>

            <a href="../questionnaire">
                <div class = "button1">
                    <div class="button-text" > TAKE THE ANTI-RACIST QUIZ </div>
                </div>
            </a>
            
            <img src={hands} alt="together!" className={Home.hands} class="hands-image"/>
            <img src={black} alt="BLACK" className={Home.black} class="black-image"/>
        </div>
        
    )
}

