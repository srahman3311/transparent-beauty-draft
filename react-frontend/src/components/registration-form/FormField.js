import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles({

    formField_container: {
        // height: "40px",
        width: "40%",
        margin: "0 auto 10px auto",
        // backgroundColor: "gray"
    },
    form_field: {
        backgroundColor: "#986d8e11",
        width: "100%",
        height: "15px",
        margin: "0"
    }
    
});



export default function FormField ({ type, placeholder, label }) {

    const classes = useStyles();


    return (
        <div className={classes.formField_container}>
            <p style = {{fontSize: "12px"}}>{label}</p>
            <TextField
                type = {type}
                inputProps = {{
                    className: classes.form_field
                }}
                fullWidth
                variant="outlined"
                placeholder={placeholder}
                margin="dense"
            />
        </div>
    );
}