import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";

const useStyles = makeStyles({

    progress_bar: {
        width: "30%",
        height: "5px",
        margin: "1% auto 6% auto",
        display: "flex",
        alignItems: "center",
        
    },
    bar: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc"
    },
    bar_content: {
        width: "20%",
        height: "100%",
        backgroundColor: "#986D8E"
    }

});


export default function ProgressBar () {

    const classes = useStyles();


    return (
        <div className={classes.progress_bar}>
            <div className={classes.bar}>
                <div className={classes.bar_content}></div>
            </div>
            <p style = {{marginLeft: "3px", fontSize: "12px"}}>20%</p>
        </div>
    );
}