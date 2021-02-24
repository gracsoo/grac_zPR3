import React from 'react';
import './index.css';
function Text(){
    return <div className="container">
        <form>
            <label htmlFor="fname">First Name: </label>
            <br></br>
            <input type="text" id="fname" name="fname"/>
            <br></br>
            <label htmlFor="lname">Last Name: </label>
            <br></br>
            <input type="text" id="lname" name="lname"/>
            <br></br>
        </form>
        <form method="get" action="submit">
            <p>Favorite Animal</p>
            <input type="radio" id="cat" name="animal" value="cat"/>
            <label htmlFor="cat" className="label">Cat</label>
            <br></br>
            <input type="radio" id="cheetah" name="animal" value="cheetah"/>
            <label htmlFor="cheetah" className="label">Cheetah</label>
            <br></br>
            <input type="radio" id="lion" name="animal" value="lion"/>
            <label htmlFor="lion" className="label">Lion</label>
            <br></br>
            <br></br>
            <button>Done</button>
        </form>
    </div>
}
export default Text