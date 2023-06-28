import RatingSelect from "./RatingSelect"
import Card from "./Shared/Card"
import { useState } from "react"
import Button from "./Shared/Button"
import { useContext ,useEffect } from "react"
import FeedbackContext from "../Context/FeedbackContext"


function FeedbackForm() {

const {addFeedback,feedbackEdit,updateFeedback,setFeedbackEdit} = useContext(FeedbackContext);

useEffect(() => {
  if(feedbackEdit.edit === true){
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }
},[feedbackEdit])

const [text,setText] = useState('')
const [rating,setRating] = useState(10)
const [btnDisabled,setBtnDisabled] = useState('true')
const [message,setMessage] = useState('')

const changeText = (e) => {
    if(text === ''){
        setMessage(null);
        setBtnDisabled(true);
    }
    else if(text !== '' && text.trim().length <=10){
        setMessage("this is short message !");
        setBtnDisabled(true);
    }
    else{
        setMessage(null);
        setBtnDisabled(false);
    }

    setText(e.target.value);//why use e in here
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(text.trim().length > 10){
    const newFeedback = {
      text,
      rating
    }

    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id,newFeedback);
    }else{
      addFeedback(newFeedback);
    }
    setFeedbackEdit({
      item : {},
      edit : false
    });

    setText('');
  }
}

  return (
    <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rating for our web?</h2>
      <RatingSelect select = {(rating) => setRating(rating)}/>
      <div className="input-group">
            <input onChange={changeText} type='text' placeholder="Write your feedback here!" value={text}/>
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className="message">{message}</div>}
      
    </form>
    </Card>
  )
}

export default FeedbackForm
