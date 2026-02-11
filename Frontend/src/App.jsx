import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css";

import prism from "prismjs";
import './App.css'
// import { use } from '../../BackEnd/src/routes/ai.routes';

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    prism.highlightAll();
  })

  return (
    <>
    <main>
      <div className="left">
        <div className="code"></div>
        <pre>
          <code className="language-javascript">
            {`function sum(){
            return 1+1
            }`}

          </code>
        </pre>
        <div className="review">Review</div>
      </div>
      <div className="right">
        
      </div>
    </main>
    </>
  )
}


export default App
