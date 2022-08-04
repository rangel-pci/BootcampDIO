import { useState } from "react";
import Button from "./Button";

export default function Search({ handleSearchUser }){
    const [username, setUsername] = useState('')

    return(
        <div className="search-container">
            <input type="text" placeholder="GitHub username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Button title="Search" className="search-button" onClick={() => handleSearchUser(username)} />
        </div>
    )
}