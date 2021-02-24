import React,{Component, useState} from 'react';
import './index.css'
function EmailCheck(){
    let [iptVal,setIptVal] = useState('');
    let [emailTest,setEmailTest] = useState('');
    const validate = () => {
        if(iptVal.includes('@') && (iptVal.includes('.com') || iptVal.includes('.edu'))){ 
            setEmailTest('success')
        }
        else{
            setEmailTest('fail')
        }
    }
    const changeIpt = (e) => {
        setIptVal(e.target.value);
    }
    const renderLabel = () => {
        if(emailTest === 'success'){
            return <label id="1b1text" style={{color:'green'}}>email successfully recorded</label>
        }
        if(emailTest === 'fail'){
            return <label id="1b1text" style={{color:'red'}}>invalid email address</label>
        }
    }
    return <div className="container">
        <form>
        <p>Email Validation Check</p>
            <input id="text1" placeholder="email" type="text" onChange={(e) => changeIpt(e)}/>
            <br></br>
            {emailTest.length <= 0 ? '' : renderLabel()}
            <br></br>
            <button onClick={validate} type="button">Submit</button>
        </form>
    </div>
}
export default EmailCheck