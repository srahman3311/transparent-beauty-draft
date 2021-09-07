import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';

// Components
import NextPrevButtons from "./NextPrevButtons";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles({

   concerns: {
        backgroundColor: "white",
        width: "70%",
        margin: "auto",
        padding: "2%",
        borderRadius: "5px"
    },

    header: {
        // backgroundColor: "green",
        width: "70%",
        margin: "auto"
    },
    header_text: {
        textAlign: "center"
    },

    list_container: {
        width: "80%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "50px",
    },
    list_content: {
        width: "25%",
        height: "150px",
        padding: "10px 10px",
        position: "relative",
        marginBottom: "10px"
    },
    imageDiv: {
        width: "100%",
        height: "100%",
        position: "relative",
        marginBottom: "2px",
        // backgroundColor: "#f4f4f4",
        padding: "10px",
        opacity: "1",
        zIndex: "1",
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
        zIndex: "1",
        cursor: "pointer"
    },
    image: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        height: "90%",
    },
    content: {
        width: "100%",
        textAlign: "center"
    },
    icon: {
        position: "absolute",
        top: "50%",
        left: "15%",
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
});



export default function OtherConcerns ({ otherConcerns, updateOtherConcerns}) {

    const classes = useStyles();

    const concerns = [
        {
            _id: 1,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 1"
        },
        {
            _id: 2,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 2"
        },
        {
            _id: 3,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 3"
        },
        {
            _id: 4,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 4"
        },
        {
            _id: 5,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 5"
        },
        {
            _id: 6,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 6"
        },
        {
            _id: 7,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 7"
        },
        {
            _id: 8,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Concern 8"
        },
    ];

    const [selected, setSelected] = useState(false);


    return (
        <div className={classes.concerns}>
            <ProgressBar />
            <div className={classes.header}>
                <h2 className={classes.header_text}>Do you have any other concern?</h2>
            </div>

            <div className={classes.list_container}>

                {concerns.map(concern => {
                    return (
                        <div className={classes.list_content}>
                            <div
                                style = {{backgroundColor: otherConcerns.includes(concern.content) && "yellow"}} 
                                className={classes.imageDiv} 
                            >
                                <div className={classes.hiddenDiv} onClick = {updateOtherConcerns} >
                                    {concern.content}
                                </div>
                                <img 
                                    className={classes.image} 
                                    src = {concern.imageUrl} 
                                    alt="abc" 
                                />
                            </div>
                            <p className={classes.content}>{concern.content}</p>
                            <div className={classes.icon} style = {{display: selected ? "flex" : "none"}}>
                                <CheckIcon style = {{fontSize: "20px"}} />
                            </div>
                        </div>
                    );
                })}
               
               
            </div>
            <NextPrevButtons />

        </div>
    );
}