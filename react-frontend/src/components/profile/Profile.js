import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

// Components
import ProfileImage from "./nav-components/ProfileImage";
import NavRoutes from "./nav-components/NavRoutes";
import Recommendation from "./report-components/Recommendation";
import Title from "./report-components/Title";
import Highlights from "./report-components/Highlights";
import Score from "./report-components/Score";

const useStyles = makeStyles({

    profile: {
        width: "100%",
        // minHeight: "95vh",
        display: "flex",
        position: "relative",
        "@media(max-width: 600px)": {
            display: "block"
        }
    },
    menuBar_icon: {
        display: "none",
        // position: "absolute",
        // top: "2%",
        // right: "2%",
        // transform: "translate(0%, -50%)",
        // backgroundColor: "blue",
        color: "black",
        fontSize: "28px", 
        "@media(max-width: 600px)": {
            display: "block",
            position: "absolute",
            top: "55px",
            right: "2%",
            zIndex: "2"
        }
    },
    navContainer: {
        width: "20%",
        // minHeight: "100%",
        // backgroundColor: "gray",
        padding: "0px 10px",
        "@media(max-width: 600px)": {
            width: "100%",
            // background: "none",
            backgroundColor: "white",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            padding: "20px 10px",
            // alignItems: "center"
        }
    },
    nav: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: "5% 2%",
        position: "relative",
        "@media(max-width: 600px)": {
            width: "100%",
            backgroundColor: "white",
            // background: "none",
            display: "flex",
            alignItems: "center",
            padding: "0",
            
        }
    },
    reportContainer: {
        width: "80%",
        // minHeight: "100%",
        padding: "0px 10px",
        // backgroundColor: "green",
        "@media(max-width: 600px)": {
            width: "100%",
            padding: "0"
        }
    },
    report: {
        width: "100%",
        // height: "100%",
        backgroundColor: "white",
        padding: "3% 2%",
        "@media(max-width: 600px)": {
            // padding: "100%"
        }
    },
    reportContent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        "@media(max-width: 600px)": {
            display: "block"
        }
    }

});



export default function Profile () {

    const classes = useStyles();
    const [isActive, setIsActive] = useState(true);
    const [showNav, setShowNav] = useState(false);
    const [newIngredient, setNewIngredient] = useState("");


    return (
        <div className={classes.profile} >
            <MenuIcon 
                className = {classes.menuBar_icon} 
                onClick = {() => showNav ? setShowNav(false) : setShowNav(true)} 
            />
            <div className={classes.navContainer}>
                <div className={classes.nav}>
                    <ProfileImage />
                    <NavRoutes isActive = {isActive} showNav = {showNav} />
                </div>
            </div>
            <div className={classes.reportContainer} >
                <div className={classes.report}>
                    <Title />
                    <div className={classes.reportContent}>
                        <Highlights />
                        <Score />
                    </div>
                    <Recommendation ingredient = "Lorem" newIngredient = {newIngredient} setNewIngredient = {setNewIngredient} />
                    <Recommendation ingredient = "Gorem" newIngredient = {newIngredient} setNewIngredient = {setNewIngredient} />
                    <Recommendation ingredient = "Vorem" newIngredient = {newIngredient} setNewIngredient = {setNewIngredient} />
                </div>
            </div>
        </div>
    );
}