import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom'

const styles = makeStyles({
    bar:{
        background: "#FFFAFA",
        height: "10vh"
    },
    menuItem: {
        flexGrow: 1
    },
    innerItem: {
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        "&:hover": {
            borderBottom: "solid 2px black"
        }
    },
    space: {
        flexGrow: 1
    }
})

function NavBar(){
    const classes = styles()
    return(
        <Toolbar color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <Typography className={classes.space}/>
            <Typography className={classes.space}/>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to='/' className={classes.innerItem}> 
                    About Me
                </Link>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                <Link to='/portfolio/' className={classes.innerItem}> 
                    Portfolio
                </Link>
            </Typography>
            <Typography className={classes.space}/>
            <Typography className={classes.space}/>
        </Toolbar>
    );
}

export default NavBar