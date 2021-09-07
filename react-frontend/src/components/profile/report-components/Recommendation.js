import { useState } from "react";
// Circular Progress Bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// Components
import Highlights from "./Highlights";

const useStyles = makeStyles({

    rec_container: {

    },
    recommendations: {
        padding: "5px 15px",
        marginBottom: "10px",
        width: "100%",
        backgroundColor: "#ffdfaf0a",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    recommendations_content: {
        width: "90%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    recommendationsProgress_bar: {
        width: "5%",
    },
    recommendations_texts: {
        width: "96%",
        paddingLeft: "20px"
    },
    recommendations_icon: {
        position: "relative",
        height: "100%",
        overflow: "hidden"
        // backgroundColor: "green"
    },
    arrowDown_icon: {
        width: "100%",
        // height: "100%",
        verticalAlign: "bottom",
        fontSize: "24px",
        cursor: "pointer"
    },
    hiddenSpan: {
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
        zIndex: "1",
        cursor: "pointer",
        opacity: "0"

    },
    // accordion: {
    //     // display: "block",
    //     width: "100%",
    //     backgroundColor: "#ccc"
    // }
});



export default function Recommendation ({ ingredient, newIngredient, setNewIngredient }) {

    const classes = useStyles();
    const percentage = 80;

    

    // console.log(newIngredient);

    return (
        <div className={classes.rec_container}>
            <div className={classes.recommendations}>
                <div className={classes.recommendations_content}>
                    <div className = {classes.recommendationsProgress_bar}>
                        <CircularProgressbar
                            value={percentage} 
                            text={`${percentage}`} 
                            strokeWidth={8} 
                            styles = {{
                                path: {
                                    stroke: "#66DE93",
                                },
                                trail: {
                                    stroke: "gray"
                                },
                                text: {
                                    fill: "black",
                                    fontSize: "36px"
                                }
                            }}
                        />
                    </div>
                    <p className = {classes.recommendations_texts}>
                        Lorem Ipsum Gorem Laureth Suffloscinaterel
                    </p>
                </div>
                <div className= {classes.recommendations_icon}>
                    <div 
                        className={classes.hiddenSpan} 
                        onClick={e => newIngredient === "" ? setNewIngredient(e.target.textContent) : setNewIngredient("")} 
                        // onClick={e => console.log(e.target.textContent)} 
                    > 
                        {ingredient}
                    </div>
                    {/* <Button
                        startIcon = {<KeyboardArrowDownIcon 
                            className = {classes.arrowDown_icon} 
                        />} 
                        onClick = {event => console.log(event.target.value)} 
                        value = "abc"
                    >
                        <KeyboardArrowDownIcon 
                            className = {classes.arrowDown_icon} 
                        />
                    </Button> */}
                    <KeyboardArrowDownIcon 
                        className = {classes.arrowDown_icon}
                        onClick = {event => console.log(event.target.value)} 
                        value = "abc" 
                    />
                </div>
            </div>
            <div className={classes.accordion} style = {{display: ingredient === newIngredient ? "block" : "none"}}>
                <h1>hello, I am okay.</h1>
                <Highlights />
            </div>
        </div>
        
    );
}