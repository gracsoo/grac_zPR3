import React,{Component} from 'react';
import './index.css'
function Table(){
    return <div className="mems">
        <h1>Memories</h1>
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th style={{width:'150px'}}>Event</th>
                    <th style={{width:'800px'}}>Details</th>
                    <th style={{width:'1px'}}>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://twitter.com/marktwain0802/status/1185487083625803783?s=20">SuperM LA Debut Showcase</a></td>
                    <td>This was my first time seeing Mark Lee performing live on stage. Although the experience wasn't that great, I am still glad that I attended this concert.</td>
                    <td>2019/10/5</td>
                </tr>
                <tr>
                    <td><a href="https://youtu.be/gmJsqMQ9yWQ">SuperM LA Concert</a></td>
                    <td>This is the most recent concert that I have attended... I was wearing a mask during the entire concert since I was scared to get the covid. Enjoyed the show, but at the same time it was a weird experience since I had a hard time breathing with a mask on for two hours.</td>
                    <td>2020/2/1</td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default Table