import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    header: {
        // backgroundColor: "green",
        width: "70%",
        margin: "auto",
        "@media(max-width: 600px)": {
            width: "100%",
            margin: "30px 0 30px 0",
            // padding: "0 2%"
        }
    },
    header_text: {
        width: "100%",
        textAlign: "center",
        fontWeight: "normal",
        "@media(max-width: 600px)": {
            fontSize: "20px"
        }
    }
});

export default function Header ({ text }) {

    const classes = useStyles();
    
    return (
        <div className={classes.header}>
            <Typography className={classes.header_text} variant="title" component = "h2">
                {text}
            </Typography>
        </div>
    );
}