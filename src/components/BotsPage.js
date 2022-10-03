import React, { useState, useEffect } from 'react'
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

function BotsPage() {
  const API_URL = 'http://localhost:8002/bots'

  const [selectedBots, setSelectedBots] = useState([])
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setBots(data))
  }, [])

  // get the bot that was clicked on
  // add it to the selectedBots array
  function handleBotClick(bot) {
    setSelectedBots([...selectedBots, bot])
  }

  return (
    <div>
      <YourBotArmy displayedBots={handleBotClick} />
      <BotCollection data={bots} />
    </div>
  )
}

export default BotsPage
