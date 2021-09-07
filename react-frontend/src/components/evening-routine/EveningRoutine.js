import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// Components
import Header from "../header/Header";
import NextPrevButtons from "../NextPrevButtons";
import ProgressBar from "../ProgressBar";
import Routine from "./Routine";




const useStyles = makeStyles({

    evening_routine: {
        backgroundColor: "white",
        width: "80%",
        minHeight: "90vh",
        margin: "auto",
        padding: "2%",
        borderRadius: "5px",
    },

    routines: {
        width: "60%",
        height: "200px",
        '&::-webkit-scrollbar': {
            width: '2px'
        },
        // '&::-webkit-scrollbar-track': {
        //     boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        //     webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        // },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#986d8e5e'
        },
        overflowY: "auto",
        padding: "1%",
        borderRight: "1px solid rgba(0, 0, 0, 0.1)",
        margin: "2% auto 6% auto",
        // backgroundColor: "#DAD5AB",
        "@media(max-width: 600px)": {
            width: "100%",
            padding: "0 2%"
        }
    }
});



export default function EveningRoutine ({ eveningRoutines, updateEveningRoutine}) {
    const classes = useStyles();

    const [products, setProducts] = useState([
        {
            id: 1,
            productName: "Makeup Remover",
            details: "Do it for 15 minutes or so."
        },
        {
            id: 2,
            productName: "Cleanser",
            details: "Cleaning takes 5 minutes or so"
        },
        {
            id: 3,
            productName: "Exfoliator",
            details: "Do it for 15 minutes or so."
        },
        {
            id: 4,
            productName: "Rinser",
            details: "Do it for 15 minutes or so."
        },
    ]);

    return (
        <div className={classes.evening_routine}>
            <ProgressBar />
            <Header text = "What does your evening skin care routine look like?" />
            <div className={classes.routines}>
                {products.map(product => {
                    return (
                        <Routine 
                            product = {product}
                            eveningRoutines = {eveningRoutines}
                            updateEveningRoutine = {updateEveningRoutine} 
                        />
                    );
                })}
            </div>
            <NextPrevButtons />
        </div>
    );
}