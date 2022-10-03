import React from 'react'
import BotCard from './BotCard'

const BotCollection = ({ botCollection, action, removeCard }) => {
  return (
    <div className='ui four column grid'>
      <div className='row'>
        {botCollection.map((bot) => (
          <BotCard bot={bot} action={action} removeCard={removeCard} />
        ))}
      </div>
    </div>
  )
}

export default BotCollection
