import React, { useState } from "react";
import CollapsiblePanel from "./component/CollapsiblePanel";

import {usersJSON} from './data'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
function App() {

  const [collapse, setCollapse] = useState(true);
    const [title, setTitle] = useState("Expand All");
    const collapseAll = () => {
        setCollapse(!collapse);
        setTitle(state => {
            return state === "Expand All" ? "Collapse All" : "Expand All";
        });
    };
    return (
        <div className="App container my-2">
            {/* Expand/Collapse All */}
            <button
                type="button"
                className="btn-warning mt-4 mb-3 float-left"
                onClick={collapseAll}
            >
                {title}
            </button>
            <h3>Leaderboard</h3>

            {
                usersJSON.map((item, index) => <CollapsiblePanel key={index} title={"Leader " + index} collapse={collapse}>
                    <span>Name: {item.name}</span><br />
                    <span>Age: {item.age}</span><br />
                    <span>Rank: {item.rank}</span><br />
                    <span>Points: {item.points}</span>
                </CollapsiblePanel>
                )}
        </div>
    );
}

export default App;
