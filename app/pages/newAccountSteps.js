import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Grid from "@material-ui/core/Grid";
import Layout from '../components/layout';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoIcon from '@material-ui/icons/Info';
import classes from '../styles/Stepper.module.css'
import '../styles/Stepper.module.css'
import {StepConnector} from "@material-ui/core";


function getSteps() {
    return ['Personal information', 'instagram account', 'Bio'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}

function ColorLibStepIcon(props) {
    const { active, completed } = props;

    const icons = {
        1: <PersonIcon />,
        2: <InstagramIcon />,
        3: <InfoIcon />,
    };

    return (
        <div
            className={clsx(classes.root_icon, {
                [classes.active_icon]: active,
                [classes.completed_icon]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

export default function HorizontalLabelPositionBelowStepper() {
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
        <Layout pageOption={1}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={2}>

                </Grid>
                <Grid item xs={12} sm={8}>
                    <div style={{width: '100%'}}>
                        <Stepper activeStep={activeStep} alternativeLabel connector={<StepConnector style={{marginTop: '10px'}}
                        classes={{completed: classes.completed_conn, active: classes.active_conn, line: classes.line_conn}}/>}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorLibStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {activeStep === steps.length ? (
                                <div>
                                    <Typography style={{marginTop: '4%', marginBottom: '4%'}}>All steps completed</Typography>
                                    <Button onClick={handleReset}>Reset</Button>
                                </div>
                                // here we need to go to user page
                            ) : (
                                <div>
                                    <div>{getStepContent(activeStep)}</div>
                                    <div>
                                        {activeStep === 0 ? (
                                            <Link href={'/newAccount'} >
                                                <Button
                                                    style={{marginRight: '4%'}}
                                                >
                                                    Back
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                onClick={handleBack}
                                                style={{marginRight: '4%'}}
                                            >
                                                Back
                                            </Button>
                                        )}
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>

                </Grid>
            </Grid>
        </Layout>
    );
}
