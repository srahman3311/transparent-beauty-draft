import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

// Components
import BeautyGoals from "./BeautyGoals";
import BeautyRoutine from "./BeautyRoutine";

const useStyles = makeStyles({

    myRoutine_container: {
        width: "80%",
        minHeight: "100%",
        // minHeight: "100%",
        padding: "0px 10px",
        // backgroundColor: "green",
        "@media(max-width: 600px)": {
            width: "100%",
            height: "80%",
            zIndex: "1",
            padding: "0"
        }
    },
    my_routine: {
        width: "100%",
        minHeight: "100%",
        backgroundColor: "white",
        padding: "3% 2%",
        display: "flex",
        "@media(max-width: 600px)": {
            // padding: "100%"
        }
    },
    myRroutine_content: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        "@media(max-width: 600px)": {
            display: "block"
        }
    }

});



export default function MyRoutine ({ activeContent }) {

    const classes = useStyles();
    const [isActive, setIsActive] = useState(true);
    const [showNav, setShowNav] = useState(false);
    const [newIngredient, setNewIngredient] = useState("");

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return (
        <div 
            className={classes.myRoutine_container} 
            style = {{
                display: activeContent === "My Routine" ? (windowWidth <= 600 ? (showNav ? "none" : "block") : "block") : "none",
            }} 
        >
            <div className={classes.my_routine}>
                <BeautyGoals />
                <BeautyRoutine />
            </div>
        </div>
    );
}