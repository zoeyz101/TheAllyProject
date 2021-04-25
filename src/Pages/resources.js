import "../Styles/resources.css";
import {Navbar} from "../Components/navbar";
import resources from "../Images/Resources.png";


export const Resources = () => {
    return(
        <div class="container">
            <div class = "mega-links">
            <h2>Donations
                <div class="link-container">
                    <li><a id="links" href="https://www.gofundme.com/c/act/stop-aapi-hate">Stop AAPI Hate</a></li>
                    <li><a id="links" href="https://www.gofundme.com/f/securityforoaklandchinatown">Security for Oakland Chinatown</a></li>
                    <li><a id="links" href="https://donatenow.networkforgood.org/hateisavirus">Hate is a Virus</a></li>
                </div>
            </h2>
            <h2>Sign A Petition
                <div class="link-container">
                    <li><a id="links" href="https://www.change.org/p/governor-andrew-cuomo-end-hate-crimes-against-asian-americans">End Hate Crimes Against Asian Americans</a></li>
                    <li><a id="links" href="https://actionnetwork.org/letters/take-action-against-the-racial-profiling-of-asian-americans-and-asian-immigrants-and-call-for-an-end-to-the-justice-departments-china-initiative
">Write a Letter to Take Action Against Racial Profiling</a></li>
                </div>
            </h2>
            <h2>Educational Resources
                <div class="link-container">
                    <li><a id="links" href="https://www.pbs.org/show/asian-americans/">PBS-Asian Americans</a></li>
                    <li><a id="links" href="https://stopaapihate.org/reports/">Stop AAPI Hate - Reports</a></li>
                    <li><a id="links" href="https://www.usatoday.com/story/life/2021/03/17/violence-against-asians-on-the-rise-how-be-ally-to-community-amid-racism/4730202001/">Violence Against Asians on the Rise</a></li>
                </div>
            </h2>
            <h2>Report an Incident
                <div class="link-container">
                    <li><a id="links" href="https://www.gofundme.com/c/act/stop-aapi-hate">Stop AAPI Hate</a></li>
                </div>
            </h2>
            
            
            </div>
            <img src={resources} alt="resources" className={Resources.resources} class="resources-image"/>
        </div>
        
    )
}

