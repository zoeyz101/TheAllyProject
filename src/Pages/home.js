import "../Styles/home.css";
import {Navbar} from "../Components/navbar";
import hands from "../Images/Hands.png";
import black from "../Images/Black2.png"


export const Home = () => {
    return(
        <body>
            <h1>
                <span class="red-text"> The Ally </span>
                <span class="white-text">&nbsp;Project</span>
            </h1>

            <p id="explain-text-1">
                Since the beginning of the pandemic, over 3800 anti-Asian racist incidents have been reported.
            </p>
            <p id="explain-text-2">
                The Ally Project was inspired by ... Since the beginning of the pandemic, over 3800 anti-Asian racist incidents have been reported.
            </p>

            <a href="../questionnaire">
                <button>
                    <div class="button-text" > TAKE THE ANTI-RACIST QUIZ </div>
                </button>
            </a>
            
            <img src={hands} alt="together!" className={Home.hands} class="hands-image"/>
            <img src={black} alt="BLACK" className={Home.black} class="black-image"/>
        </body>
        
    )
}

