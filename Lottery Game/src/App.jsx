import './App.css'
import { sum } from './helper.js';
import Lottery from './Lottery.jsx'

function App() {
     let ticketCount = 5;
     let targetSum = 15;
     let winningSum=(ticket)=>{
      return sum(ticket)===targetSum;
     }
      
  return(
    <div >
      <Lottery no={ticketCount} winningSum={winningSum}/>
    <p>You are the Winner if Your ticket numbers digit sum is {targetSum}</p>
      </div>
    
  )
  
}

export default App
