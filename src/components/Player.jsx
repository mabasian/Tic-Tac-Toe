export default function Player({name, symbol}) {
    return <li>
    <span class="player">
    <span class="player-name">{name}</span>
    <span class="player-symbol">{symbol}</span>
    </span>
    <button>Edit</button>
    </li>
}