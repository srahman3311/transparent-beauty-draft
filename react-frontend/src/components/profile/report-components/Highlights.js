import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({

    highlights: {
        width: "70%",
        padding: "1% 0%", 
        // backgroundColor: "green",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    highlights_header: {
        backgroundColor: "#986d8e5e",
        marginBottom: "10px",
        padding: "10px"
    },
    highlights_texts: {
        display: "flex", 
        alignItems: "center",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        marginBottom: "15px",
        letterSpacing: "1px"
    },
    text_icons: {
        fontSize: "24px",
        marginRight: "10px"
    }
});



export default function Highlights() {

    const classes = useStyles();

    return (
       
        <div className={classes.highlights}>
            <h3 className = {classes.highlights_header}>Lorem Ipsum Dorem</h3>
            <Typography 
                className = {classes.highlights_texts}
                variant="subtitle2" 
                component="p" 
            >
                <CheckIcon className={classes.text_icons} style = {{color: "green"}} /> lorem ipsum gorem timran sukaluku faka
            </Typography>
            <Typography 
                className = {classes.highlights_texts}
                variant="subtitle2" 
                component="p" 
            >
                <CloseIcon className={classes.text_icons} style = {{color: "red"}} /> 
                lorem ipsum gorem timran sukaluku faka
            </Typography>
            <Typography 
                className = {classes.highlights_texts}
                variant="subtitle2" 
                component="p" 
            >
                <CheckIcon className={classes.text_icons} style = {{color: "green"}} /> lorem ipsum gorem timran sukaluku faka lorem ipsum gorem timran sukaluku faka lorem ipsum gorem timran sukaluku faka lorem ipsum gorem timran sukaluku faka lorem ipsum gorem timran sukaluku faka lorem ipsum gorem timran sukaluku faka
            </Typography>
        </div>
    );
}