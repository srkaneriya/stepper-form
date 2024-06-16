import { useState } from "react";
import UserInformationSection from "../../pages/stepperForm/UserInformationSection";
import AddressSection from "../../pages/stepperForm/AddressSection";
import GreetingSection from "../../pages/stepperForm/GreetingSection";


export function useMultiSteps(steps) {
    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState(null);


    function back() {
        setActiveStep(prevStep => {
            if (prevStep <= 0) return prevStep;
            return prevStep - 1;
        })
    }


    function next(values) {
        setData(data ? { ...data, ...values } : { ...values });
        setActiveStep(prevStep => {
            if (prevStep >= steps.length - 1) return prevStep;
            return prevStep + 1;
        })

    }

    function getStepContent({ step, back, next }) {
        switch (step) {
            case 1:
                return <AddressSection back={back} next={next} />
            case 2:
                return <GreetingSection data={data} />
            case 0:
            default:
                return <UserInformationSection next={next} data={data} />
        }
    }

    return {
        activeStep,
        back,
        next,
        getStepContent
    }
}