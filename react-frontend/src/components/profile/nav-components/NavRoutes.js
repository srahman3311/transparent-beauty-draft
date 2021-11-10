import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    routes: {
        width: "100%",
        minHeight: "80%",
        "@media(max-width: 600px)": {
            // backgroundColor: "green",
            minHeight: "80%",
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



export default function NavRoutes ({ isActive, showNav, activeContent, setActiveContent }) {

    const classes = useStyles();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
   
    return (
        <div className={classes.routes} style = {{
            display: windowWidth <= 600 ? (showNav ? "block" : "none") : "block",
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
                    backgroundColor: activeContent === "My Report" ? "#986d8e5e" : "white"
                }}
                onClick = {() => setActiveContent("My Report")}
            > 
                My Report
            </span>
            <span 
                className={classes.navLinks}
                style = {{
                    backgroundColor: activeContent === "My Routine" ? "#986d8e5e" : "white"
                }}
                onClick = {() => setActiveContent("My Routine")}
            >
                My Routine
            </span>

            <span 
                className={classes.navLinks}
                style = {{
                    backgroundColor: activeContent === "My Reviews" ? "#986d8e5e" : "white"
                }}
                onClick = {() => setActiveContent("My Reviews")}
            >
                My Reviews
            </span>
            <span 
                className={classes.navLinks}
                style = {{
                    backgroundColor: activeContent === "My Information" ? "#986d8e5e" : "white"
                }}
                onClick = {() => setActiveContent("My Information")}
            >
                My Information
            </span>
            








            
        </div>
    );
}