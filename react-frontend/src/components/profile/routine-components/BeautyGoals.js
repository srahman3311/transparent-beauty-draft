import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


// Components
import Goal from "./Goal";

const useStyles = makeStyles({

    beauty_goals: {
        // backgroundColor: "#f4f4f4",
        width: "100%",
        minHeight: "95vh",
        position: "relative",
        padding: "2% 0.5%",
        "@media(max-width: 600px)": {
            display: "block",
            width: "100%",
            minHeight: "100vh"
        }
    },
    header: {
        marginBottom: "5px",
        textAlign: "center"
    },

    buttonDiv: {
        width: "100%",
        textAlign: "center"
    },

    carousel_container: {
        position: "relative",
        width: "100%",
        height: "100px",
        backgroundColor: "#ccc",
        overflow: "hidden"
        // transform: "translateX(100%)",
    },
    backIcon: {
        position: "absolute",
        top: "50%",
        left: "0",
        transform: "translate(0%, -50%)",
        zIndex: "1"
    },
    forwardIcon: {
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translate(0%, -50%)",
        zIndex: "1"
    },
    carousel: {
        position: "absolute",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        width: "200%",
        height: "100%",
        overflow: "hidden",
        // backgroundColor: "blue",
        display: "flex",
        // flexDirection: "row",
        // flexWrap: "wrap",
        padding: "0 1%",
        // overflowX: "auto",
        transition: "0.5s"
        // transform: "translateX(100%)",
        // zIndex: "-1"
    },
    carousel_child: {
        width: "33.33%",
        height: "100%",
        // backgroundColor: "green",
        padding: "2% 3%"

    },

    carouselChild_content: {
        width: "100%",
        height: "100%",
        backgroundColor: "red"
    }

});



export default function BeautyGoals () {

    const classes = useStyles();

    const [step, setStep] = useState(0);
    const [left, setLeft] = useState(0);
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    function forward () {

        setStep(step + 1);

        if(step === 0) return setLeft(-33.33);
        if(step === 1) return setLeft(-33.33 * 2)
        if(step === 2) return setLeft(-33.33 * 3);
        if(step === 3) return setStep(step);
        
    }

    function backward () {

        setStep(step - 1);

        if(step === 1) return setLeft(0);
        if(step === 0) return setStep(step);
        setLeft(left + 33.33)
        
    }

    
    return (
        <div className={classes.beauty_goals} >
           <h1 className={classes.header}>My Beauty Goals</h1>
           <h4>Add or remove beauty goals</h4>
            <Goal />
            <Goal />
            <Goal />
            <div className={classes.buttonDiv}>
                <Button
                    // variant="outlined"
                    style = {{backgroundColor: "#986d8ea6", width: "80%"}}
                >
                    Add New Goal
                </Button>
            </div>
            <div className={classes.recommended_products}>
                <h3>Products you might like</h3>
                <div className={classes.carousel_container}>
                    <ArrowBackIosIcon onClick={backward} className={classes.backIcon} />
                    <ArrowForwardIosIcon onClick={forward} className={classes.forwardIcon} />
                    <div className={classes.carousel} style = {{left: `${left}%`}}>
                        <div className={classes.carousel_child}>
                            <div className={classes.carouselChild_content}>
                                1
                            </div>
                        </div>
                        <div className={classes.carousel_child}>
                            <div className={classes.carouselChild_content}>
                                2
                            </div>
                            
                        </div>
                        <div className={classes.carousel_child}>
                            <div className={classes.carouselChild_content}>
                                3
                            </div>
                            
                        </div>
                        <div className={classes.carousel_child}>
                            <div className={classes.carouselChild_content}>
                                4
                            </div>
                        </div>
                        <div className={classes.carousel_child}>
                            <div className={classes.carouselChild_content}>
                                5
                            </div>
                        </div>
                        <div className={classes.carousel_child}>
                            <div className={classes.carouselChild_content}>
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}