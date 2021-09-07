import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    routine: {
        position: "relative",
        width: "100%",
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1% 2%",
        marginBottom: "10px",
        borderRadius: "6px",
        backgroundColor: "#fde59c0e",
        cursor: "pointer"
    },
    hiddenDiv: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        opacity: "0",
        zIndex: "1"
    },
    icon: {
        fontSize: "16px"
    },
});



export default function Routine({ product, morningRoutines, updateMorningRoutine }) {

    const classes = useStyles();


    return (
        <div className={classes.routine} style = {{backgroundColor: morningRoutines.includes(product.productName) && "green"}}>
            <div className = {classes.hiddenDiv} onClick = {updateMorningRoutine}>{product.productName}</div>
            <div className={classes.routine_content}>
                <p>{product.productName}</p>
                <p style = {{fontSize: "12px", marginTop: "3px"}}>{product.details}</p>
            </div>
            <ArrowForwardIosIcon className={classes.icon} />
        </div>
    );
}