import React from 'react';
import { makeStyles, Theme, createStyles }
    from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@mui/material";

function getSteps() {
    return [<b>Receiver</b>,
        <b>Sender</b>,
        <b>Amount</b>,
        <b>Fees</b>,
        <b>Confirm</b>];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(5),
            width: 300,
            borderRadius: '20px'
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },

    }),
);

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return (
                <form>
                    <h4> Who will be receiving this token?</h4>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Enter Receiver Address"
                        style={{ margin: 8, width: "90%" }}
                        fullWidth
                        margin="normal"
                        required
                    />
                </form>
            );
        case 1:
            return (
                <form>
                    <h4> Who will be sending this token?</h4>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Enter Sender Address"
                        style={{ margin: 8, width: "90%" }}
                        fullWidth
                        margin="normal"
                        required
                    />
                </form>
            );
        case 2:
            return (
                <form>
                    <h4> Enter Amount</h4>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Amount"
                        style={{ margin: 8, width: "90%" }}
                        fullWidth
                        margin="normal"
                        required
                    />
                </form>
            );
        case 3:
            return (
                <form>
                    <h4> Enter Fees</h4>
                    <TextField
                        size="small"
                        variant="outlined"
                        label="Enter Fees"
                        style={{ margin: 8, width: "90%" }}
                        fullWidth
                        margin="normal"
                        required
                    />
                </form>
            );
        case 4:
            return (
                <form>
                    <h4> Confirm Details</h4>
                </form>
            );
        default:
            return 'Unknown step';
    }
}

export default function MintStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div className={classes.actionsContainer}>
                <div>
                    <Button
                        variant="contained"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
            {activeStep === steps.length && (
                <Paper square elevation={0}>
                    <Typography>Form is submitted</Typography>
                    <Button onClick={handleReset}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}
