import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({

    buttons: {
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 10px", 
        "@media(max-width: 600px)": {
            width: "80%",
            marginTop: "50px"
            // padding: "0 2%"
        }
    }

});


export default function NextPrevButtons () {

    const classes = useStyles();


    return (
        <div className={classes.buttons}>
            <Button variant="outlined" size="small">Back</Button>
            <Button variant="outlined" size="small" style={{backgroundColor: "yellow"}}>Next</Button>
        </div>
    );
}