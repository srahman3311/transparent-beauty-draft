import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    imageContainer: {
        width: "100%",
        minHeight: "20%",
        // height: "150px",
        // margin: "0 auto 60px auto",
        marginBottom: "40px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media(max-width: 600px)": {
            width: "100%",
            height: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
            marginBottom: "0",
            marginTop: "0",
        }
    },
    userImage: {
        width: "100%",
        // height: "auto",
        // margin: "auto",
        borderRadius: "50%",
        marginBottom: "10px",
        "@media(max-width: 600px)": {
            width: "30%",
            flexDirection: "row",
            backgroundColor: "red",
            marginBottom: "0",
        
        }
    },
    text: {
        width: "100%", 
        textAlign: "center",
        "@media(max-width: 600px)": {
            width: "70%",
            // backgroundColor: "green",
            marginLeft: "10px",
            textAlign: "left",
        }

    }
});


export default function ProfileImage () {

    const classes = useStyles();

    return (
        <div className = {classes.imageContainer}>
            <img 
                className = {classes.userImage} 
                src = "https://media.istockphoto.com/photos/beautiful-young-girl-picture-id1206301506?k=20&m=1206301506&s=612x612&w=0&h=ju6sV_u99dUK2eNIRtT52klt35X6jSQ-Kf9wrro0Mp0=" 
                alt = "" 
            />
            <p className = {classes.text}>Welcome, <br/> FirstName LastName</p>
        </div>
    );
}