import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        marginBottom: "10px",
        fontWeight: "normal"
    }
});



export default function Title() {

    const classes = useStyles();

    return (
        <h1 className={classes.title}>Irritation Report</h1>
    );
}