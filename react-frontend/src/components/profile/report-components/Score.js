// React Circular Progress Bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Material UI
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    score: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "green"
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    scoreContent: {
        padding: "20px",
        // backgroundColor: "pink"
    }
});



export default function Score() {

    const classes = useStyles();
    const percentage = 80;

    return (
       
        <div className={classes.score}>
            <div className={classes.scoreContent}>
                <p style = {{width: "100%", textAlign: "center", marginBottom: "10px"}}>Overall Score</p>
                <div style = {{width: "50%", margin: "auto"}}>
                    <CircularProgressbar 
                        value={percentage} 
                        text={`${percentage}`} 
                        counterClockwise
                        strokeWidth={4}
                        styles = {{
                            path: {
                                stroke: "rgba(255, 0, 0, 0.630)",

                            },
                            trail: {
                                stroke: '#ccc'
                            },
                            text: {
                                fill: "black",
                                fontSize: "48px"
                            }
                        }}
                    />
                </div> 
            </div>
        </div>
    );
}