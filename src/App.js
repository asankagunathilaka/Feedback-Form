import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import FeedbackList from './component/FeedbackList';
//import FeedbackData from './Data/FeedbackData';
//import { useState } from 'react';
//import Card from './component/Shared/Card';
import FeedbackStates from './component/FeedbackStates';
import FeedbackForm from './component/FeedbackForm';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';
import AboutIconLink from './component/AboutIconLink';

function App() {

return (
    <FeedbackProvider>
    <Router>
      
      <div>
      <Header />

      <Routes>
        <Route exact path='/' element={
          <>
            <FeedbackForm />
            <FeedbackStates />
            <FeedbackList />
            <AboutIconLink />
          </>
        }>
       </Route>
        <Route path='/About' element={<AboutPage/>}/>
      </Routes>
        
      </div>
    </Router>
    </FeedbackProvider>
  )

}

export default App;
