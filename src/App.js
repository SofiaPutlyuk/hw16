import { Feedback } from "./components/Feedback";
import { ModalFeedback } from "./components/ModalFeedback";
import '../src/components/global-static.css'
function App() {
  return (
    <div className="feedbackContainer">
      <Feedback />
        <ModalFeedback />
    </div>
  );
}

export default App;
