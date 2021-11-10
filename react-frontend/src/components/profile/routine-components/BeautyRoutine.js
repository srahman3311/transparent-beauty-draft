import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';


// Components

const useStyles = makeStyles({

    beauty_routines: {
        backgroundColor: "#ccc",
        width: "100%",
        minHeight: "95vh",
        // display: "flex",
        position: "relative",
        "@media(max-width: 600px)": {
            display: "block",
            width: "100%",
            minHeight: "100vh"
        }
    },

    routine_dropDown: {
        margin: "auto",
        padding: "10px 20px",
        width: "70%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: "#ccc"
    },
    menu_buttons: {
        backgroundColor: "pink",
        width: "100%", 
        margin: "0", 
        display: "flex", 
        justifyContent: "flex-start",
        "&:hover": {
            backgroundColor: "green"
        }
    }
    

});



export default function BeautyRoutine () {

    const classes = useStyles();
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    const [show, setShow] = useState(false);

    return (
        <div className={classes.beauty_routines} >
           <h1>My Beauty Routine</h1>
           <div className={classes.routine_dropDown}>
               <div style = {{width: "60%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <WbSunnyIcon />
                    <p>Morning Routine</p>
               </div>

                <Button
                    style = {{display: show ? "none" : "flex"}}
                    onClick = {() => setShow(true)} 
                > 
                    <ExpandMoreIcon style = {{margin: "auto"}} /> 
                </Button>

                <Button
                    style = {{display: show ? "flex" : "none"}}
                    onClick = {() => setShow(false)} 
                > 
                    <ExpandLessIcon /> 
                </Button>
              
              
               
               {/* <div className={classes.night_icon}>
                    <Brightness3Icon />
               </div> */}
                {/* <select  */}
           </div>
           
           <div 
                className={classes.menu} 
                style = {{
                    display: show ? "block" : "none", 
                    width: "70%", 
                    border: "1px solid red",
                    borderTop: "none",
                    margin: "auto",
                    // padding: "1% 0%",
                    marginBottom: "5px",
                }} 
            >
                <Button
                    className = {classes.menu_buttons} 
                   
                >
                    menu
                </Button>
                <Button 
                  className = {classes.menu_buttons}
                   
                >
                        menu 22
                </Button>
            </div>
        </div>
    );
}