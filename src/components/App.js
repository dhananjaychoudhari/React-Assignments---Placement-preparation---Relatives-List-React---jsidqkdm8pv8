import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <ol key="relativeList">
                    <li key="relativeListItem1">Kanpur Wale Fufa</li>
                    <li key="relativeListItem2">Patna Wale Chacha Jee</li>
                    <li key="relativeListItem3">Noida Wale Bhaiya</li>
                    <li key="relativeListItem4">Ranchi Wali Mausi</li>
               </ol>
            </div>
        )
    }
}


export default App;
