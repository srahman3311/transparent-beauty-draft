import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from "@material-ui/core";
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';


// Components

const useStyles = makeStyles({
    goals: {
        display: "flex",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#986d8e0e",
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: "3px",
        marginBottom: "20px"
    },
    checkbox_container: {
        width: "10%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding: "2%",
        // backgroundColor: "pink"
    },
    goalImage_container: {
        width: "15%",
        height: "100%",
        padding: "1% 0.5%",
        // backgroundColor: "blue"
    },
    goal_image: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
    },
    goal_details: {
        width: "75%",
        padding: "0 20px"
        // height: "100%",
        // backgroundColor: "green"
    }
});



export default function Goal () {

    const classes = useStyles();
    
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return (
        <div className={classes.goals}>
            <div className={classes.checkbox_container}>
                <FormControlLabel
                    style = {{backgroundColor: "", margin: "0"}} 
                    control={
                        <Checkbox
                            style= {{color: "#986d8ea6", transform: "scale(1.1)"}}
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                        />
                    }
                />
            </div>
            <div className={classes.goalImage_container}>
                <img
                    className={classes.goal_image} 
                    src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/headlines/brand-innovation/amazon-launches-skin-care-range-can-data-insights-create-ideal-beauty-products/9310985-1-eng-GB/Amazon-launches-skin-care-range-can-data-insights-create-ideal-beauty-products_wrbm_large.jpg" 
                    alt = ""
                />
            </div>
            <div className={classes.goal_details}>
                <h4 style = {{marginBottom: "6px"}}>Find a product that works for rosera</h4>
                <p style = {{fontSize: "14px", opacity: "0.5"}}>Goals from: 06/07/2021</p>
            </div>
        </div>
    );
}