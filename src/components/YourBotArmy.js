import React from 'react'
import BotCard from './BotCard'

const YourBotArmy = ({ bots, action, removeCard }) => {
  return (
    <div className='ui segment inverted olive bot-army'>
      <div className='ui five column grid'>
        <div className='row bot-army-row'>
          {bots.map((bot) => {
            return <BotCard bot={bot} action={action} removeCard={removeCard} />
          })}
        </div>
      </div>
    </div>
  )
}

export default YourBotArmy
