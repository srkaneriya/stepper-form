import HorizontalLinearAlternativeLabelStepper from '../../components/stepper';
import Stack from '@mui/material/Stack';
import { steps } from '../../components/Data';
import { useMultiSteps } from '../../customHook/useMultiSteps/useMultiSteps';


export default function StepperForm() {

    const { activeStep, back, next, getStepContent } = useMultiSteps(steps);


    return (
        <Stack bgcolor='gainsboro' p={3.5} width='90%' mx='auto' my={2} boxShadow='inset 0px 1px 2px 0px rgba(0,0,0,0.75)'>
            <Stack bgcolor='white' p={2} gap={5} borderRadius={1} boxShadow='0px 1px 2px 0px rgba(0,0,0,0.75)'>
                <HorizontalLinearAlternativeLabelStepper steps={steps} activeStep={activeStep} />
                {getStepContent({ step: activeStep, back, next })}
            </Stack>
        </Stack>

    );
}