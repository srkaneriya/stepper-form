import StepperForm from './pages/stepperForm/index.js';
import { GlobalStyles } from '@mui/material';
import { cssGlobalStyles } from './components/Data/index.js';

function App() {
  return (
    <div className="app">
      <GlobalStyles styles={cssGlobalStyles} />
      <StepperForm />
    </div>

  );
}

export default App;
