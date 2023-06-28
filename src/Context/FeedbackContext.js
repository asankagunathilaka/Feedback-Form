//import { v4 as uuidv4 } from 'uuid'
import { createContext,useState,useEffect} from "react"
//import { json } from 'react-router-dom';


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback,setfeedback] = useState([])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    useEffect(() => {
        fetchFeedback();
    },[])

    //Fech data
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)

        const data = await response.json()

        setfeedback(data);
    }

    //Update feedback
    const updateFeedback = async (id,updItem) => {
        const response = await fetch(`/feedback/${id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json();
        setfeedback(feedback.map((item) => (item.id === id ? {...item,...data} : item)));
    }

    //Delete Feedback
    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure ? ")){
          await fetch(`/feedback/${id}`,{
            method: 'DELETE'
          })
          setfeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Add feedback
    const addFeedback = async (newFeedback) => {
       // newFeedback.id = uuidv4();
        const respose = await fetch('/feedback',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(newFeedback),
        })
        const data = await respose.json();
        setfeedback([data,...feedback]);
    }

    //edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit : true
        })
    }
    return (
        <FeedbackContext.Provider value={{ feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,setFeedbackEdit,updateFeedback}}>
             {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext