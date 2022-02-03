import { makeStyles } from "@material-ui/core";
import NewYorkNeigbourhoods from '../assets/New York State Neighbourhood Density.png';
import StCatharinesDrivingDistance from '../assets/St. Catharines Driving Distance.png';
import MonochromeStCath from '../assets/MonochromeStCath.png';
import NearestPark from '../assets/Nearest Park.png';
import AmazingRace from '../assets/Amazing Race.png'

const styles = makeStyles({
    BlackText:{
        color: "black",
        fontFamily: "Poppins",

    },
})

function Portfolio(){
    const classes = styles()
    return(
        <div className="content-wrapper">
            <h6 className={classes.BlackText}>Welcome!</h6>
            <h6 className={classes.BlackText}>
            Below you can find some of my maps. To see some of my coding projects, check out my <a href="https://github.com/griffinallen">GitHub</a>
            </h6>
            <div>
                <div>
                    <img src={AmazingRace} className={"map-picture"} />
                    <img src={NearestPark} className={"map-picture"} />
                </div>     
                <div>
                    <img src={MonochromeStCath} className={"map-picture"} />
                    <img src={StCatharinesDrivingDistance} className={"map-picture"} />
                </div>
                <div>
                    <img src={NewYorkNeigbourhoods} className={"map-picture"} />
                </div>
            </div >
        </div>
    );
}

export default Portfolio