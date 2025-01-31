import { useState } from "react"

export default function Player({name, symbol}) {
const [isEditing, setIsEditing] = useState(false)

function handleEditClick() {
    setIsEditing(true)
}

let playerName = <span class="player-name">{name}</span>

if(isEditing) {
    playerName = <input type="text" required />
}

    return <li>
    <span class="player">
    <span class="player-name">{playerName}</span>
    <span class="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>Edit</button>
    </li>
}