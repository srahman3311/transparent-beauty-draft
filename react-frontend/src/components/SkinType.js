import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';

// Components
import NextPrevButtons from "./NextPrevButtons";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles({

   skin_type: {
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
        marginTop: "50px",
        marginBottom: "100px",
    },
    list_content: {
        width: "25%",
        height: "200px",
        padding: "10px",
        position: "relative",
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



export default function SkinType ({ skinType, updateSkinType}) {

    const classes = useStyles();

    const types = [
        {
            _id: 1,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Normal"
        },
        {
            _id: 2,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Dry"
        },
        {
            _id: 3,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Oily"
        },
        {
            _id: 4,
            imageUrl: "https://previews.123rf.com/images/estherqueen999/estherqueen9991703/estherqueen999170300306/75075019-cartoon-beauty-skin-care-woman-smile-on-blue-background.jpg",
            content: "Combination"
        },
    ];

    // const [selected, setSelected] = useState(false);


    return (
        <div className={classes.skin_type}>
            <ProgressBar />
            <div className={classes.header}>
                <h2 className={classes.header_text}>What kind of skin do you have?</h2>
            </div>

            <div className={classes.list_container}>

                {types.map(type => {
                    return (
                        <div className={classes.list_content}>
                            <div className={classes.imageDiv} style = {{backgroundColor: skinType === type.content && "yellow"}}>
                                <div className={classes.hiddenDiv} onClick = {updateSkinType}>
                                    {type.content}
                                </div>
                                <img 
                                    className={classes.image} 
                                    src = {type.imageUrl} 
                                    alt="abc" 
                                />
                            </div>
                            <p className={classes.content}>{type.content}</p>
                            {/* <div className={classes.icon} style = {{display: selected ? "flex" : "none"}}>
                                <CheckIcon style = {{fontSize: "20px"}} />
                            </div> */}
                        
                        </div>
                    );
                })}
               
               
            </div>
            <NextPrevButtons />

        </div>
    );
}