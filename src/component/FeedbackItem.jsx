import { FaTimes,FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"
import Card from "./Shared/Card"

function FeedbackItem({item}) {

  const {deleteFeedback,editFeedback} = useContext(FeedbackContext);

  //const handleClick = (id) => {
  //  console.log(id,'manoj');
 // }

  return (
 
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="purple"/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="pruple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem