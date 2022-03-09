import { makeStyles } from "@material-ui/core";

import MyPicture from "../assets/me.jpg"

const styles = makeStyles({
    BlackText:{
        color: "black",
        fontFamily: "Poppins",

    }

})

function About(){
    const classes = styles()
    return(
        <div className="content-wrapper">
            <h6 className={classes.BlackText}>
                Thanks for checking out my site!<br></br>
                My name is Griffin Allen. I'm a developer/geographer in the Niagara region.
            </h6>
            <div>
                <iframe width="100%" height="800px" src="https://brock.maps.arcgis.com/apps/Cascade/index.html?appid=b64abe6507d64a4097f5c9a70e0cc1d9" frameborder="0" scrolling="yes"></iframe>
            </div>
            <h6 className={classes.BlackText}>
                If you'd like to contact me, you can find me on <a href="https://www.linkedin.com/in/griffin-allen-090655171/">LinkedIn</a> or feel free to send me an <a href="mailto:griffinallendev@gmail.com">email</a>
            </h6>
        </div>
    );
}

export default About