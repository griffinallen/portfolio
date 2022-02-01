import { makeStyles } from "@material-ui/core";

import Map from './Map';

import NewYorkNeigbourhoods from '../assets/New York State Neighbourhood Density.png';

import StCatharinesDrivingDistance from '../assets/St. Catharines Driving Distance.png';

import MonochromeStCath from '../assets/MonochromeStCath.png';

const styles = makeStyles({
    MapPicture: {
        width: "40vw",
        outline: "black solid medium",
        margin: "2vw"
    },
    BlackText:{
        color: "black",
        fontFamily: "Poppins",

    },
    PictureSection:{

    },
    MapSection:{
        outline: "black solid medium",
        marginLeft: "15vw",
        marginRight: "15vw",
        marginTop: "2vw",
        marginBottom: "2vw"
    }

})

function Portfolio(){
    const classes = styles()
    return(
        <div className="content-wrapper">
            <h6 className={classes.BlackText}>Welcome!</h6>
            <h6 className={classes.BlackText}>
            Below you can find some of my maps. To see some of my coding projects, check out my <a href="https://github.com/griffinallen">GitHub</a>
            </h6>
            <div className={classes.PictureSection}>
                <div>
                    <img src={NewYorkNeigbourhoods} className={classes.MapPicture} />
                    <img src={StCatharinesDrivingDistance} className={classes.MapPicture} />
                </div>     
                <div>
                    <img src={MonochromeStCath} className={classes.MapPicture} />
                </div>

                <h6 className={classes.BlackText}>
                Amazing Race Locations (Country)
                </h6>
                <div className={classes.MapSection}>
                    <Map data={"Amazing Race"} season={0}/>
                </div>
            </div >
        </div>
    );
}

export default Portfolio