import React,{useState} from 'react'


export default function PropHide() {
    const [showMessage, setShowmessage] = useState(false);
    const PropHide=()=>{
        setShowmessage(!showMessage);
    }
  return (
    <div>
        <button onClick={PropHide}>
            {showMessage ? 'Hide Message' : 'Show Message'}
        </button>
        {showMessage ? <p>Hi! How are you!!!</p> : ""}
    </div>
  )
}
