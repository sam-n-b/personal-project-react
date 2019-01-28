import React from 'react'

function Monkeys({names}) {
  return <div>
    <ul>
      {names.map((name, i) => <li key={i}>{name}</li>)}
    </ul>
  </div>
}

export default Monkeys
