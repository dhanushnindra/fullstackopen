
import React from 'react'
import {useState} from 'react'

const App = () => {

    const [good, setGood] = useState(0);
    const [average, setAverage] = useState(0);
    const [bad, setBad] = useState(0);

    const [all,setAll] = useState(0);
    const [mean,setMean] = useState(0);
    const [positive,setPositive] = useState(0);
    


    return (
        <div>
            <h1>CAFEE CAFEEE CAFEEE</h1>
            <h1>Give us feedback</h1>

            <button onClick={()=>{setGood(good+1);setMean((mean*all+1)/(all+1));setAll(all+1); setPositive(((positive*all-1)/100 +1)/all*100 )}}>GOOD</button>
            <button onClick={()=>{setAverage(average+1);setMean((mean*all +1)/(all+1));setAll(all+1);}}>AVERAGE</button>
            <button onClick={()=>{setBad(bad+1);setMean((mean*all-1)/(all+1));setAll(all+1);}}>BAD</button>
            
            <h3>GOOD : {good}</h3>
            <h3>AVERAGE : {average}</h3>
            <h3>BAD : {bad}</h3>
            <h3>ALL : {all}</h3>
            <h3>MEAN : {mean}</h3>
            <h3>POSITIVE : {positive}%</h3>
            

        </div>

    )
}


export default App;