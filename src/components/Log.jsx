export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turns) => (
        <li key={`${turns.player.row}${turns.player.col}`}>
          {turns.player} selected {turns.square.row}, {turns.square.col}
        </li>
      ))}
    </ol>
  )
}
