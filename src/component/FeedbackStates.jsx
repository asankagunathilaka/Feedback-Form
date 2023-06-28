import FeedbackContext from "../Context/FeedbackContext";
import { useContext } from "react";


function FeedbackStates() {

const {feedback} = useContext(FeedbackContext);

let average = feedback.reduce((acc,curr) => {
    return acc+curr.rating
},0)/feedback.length;

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>average : {average}</h4>
    </div>
  )
}

export default FeedbackStates