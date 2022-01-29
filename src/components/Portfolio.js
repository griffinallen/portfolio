import { makeStyles } from "@material-ui/core";

import NewYorkNeigbourhoods from '../New York State Neighbourhood Density.png';

const styles = makeStyles({
    MapPicture: {
        width: "40vw",
        outline: "black solid medium"
    },
    BlackText:{
        color: "black",
        fontFamily: "Poppins",

    }

})

function Portfolio(){
    const classes = styles()
    return(
        <div className="content-wrapper">
            <h6 className={classes.BlackText}>
            Below you can find some of my maps. To see some of my coding projects, check out my <a href="https://github.com/griffinallen">GitHub</a>
            </h6>
            <div>
                <img src={NewYorkNeigbourhoods} className={classes.MapPicture} />
            </div >
        </div>
    );
}

export default Portfolio