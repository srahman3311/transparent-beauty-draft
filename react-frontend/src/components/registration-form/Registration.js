//import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// Components
import ProgressBar from "../ProgressBar";
import FormField from "./FormField"

const useStyles = makeStyles({

   registration: {
        backgroundColor: "white",
        width: "70%",
        margin: "auto",
        padding: "2%",
        borderRadius: "5px"
    },

    header: {
        // backgroundColor: "green",
        width: "100%",
        margin: "0 auto 20px auto"
    },
    header_text: {
        textAlign: "center"
    },

    registration_form: {
        width: "100%",
        // backgroundColor: "blue",
        margin: "auto",
        padding: "10px"
     
    },
    buttonDiv: {
        // backgroundColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#FDE49C"
    }
    
});



export default function Registration () {

    const classes = useStyles();


    return (
        <div className={classes.registration}>
            <ProgressBar />
            <div className={classes.header}>
                <h2 className={classes.header_text}>Get your free report!</h2>
            </div>

            <div className={classes.registration_form}>

                <FormField 
                    type = "text"
                    placeholder = "Rosa Parks"
                    label = "Name"
                />

                <FormField 
                    type = "email"
                    placeholder = "rosa@gmail.com"
                    label = "Email"
                />
                <FormField 
                    type = "password"
                    placeholder = "*********"
                    label = "Password"
                />
                 <FormField 
                    type = "password"
                    placeholder = "*********"
                    label = "Confirm Password"
                />
            </div>
            <div className={classes.buttonDiv}>
                <Button
                    className={classes.button}
                    variant="outlined"
                    size="small" 
                >
                    Create Account
                </Button>
            </div>
            

        </div>
    );
}