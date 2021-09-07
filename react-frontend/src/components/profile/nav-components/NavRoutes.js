import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    routes: {
        width: "100%",
        "@media(max-width: 600px)": {
            backgroundColor: "#ccc",
            marginTop: "20px",

        }
    },
    navLinks: {
        display: "block",
        width: "100%", 
        marginBottom: "25px",
        padding: "8px 20px",
        cursor: "pointer",
        "@media(max-width: 600px)": {
            // backgroundColor: "green"
        }
    }
});



export default function NavRoutes ({ isActive, showNav }) {

    const classes = useStyles();
   
    return (
        <div className={classes.routes} style = {{
            display: showNav ? "block" : "none",
            // height: showNav ? "100vh" : "auto",
            // // zIndex: showNav && "1",
            // position: showNav && "absolute",
            // left: showNav && "0",
            // right: showNav && "0",
            // top: showNav && "95%",
            // bottom: showNav && "0"
            }}>
            <span 
                className={classes.navLinks}
                style = {{
                    backgroundColor: isActive ? "#986d8e5e" : "white"
                }}
            > 
                My Report
            </span>
            <span className={classes.navLinks}>My Routine</span>
            <span className={classes.navLinks}>My Reviews</span>
            <span className={classes.navLinks}>My Information</span>
        </div>
    );
}