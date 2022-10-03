import React, { useState, useEffect } from 'react'
import BotCard from './BotCard'

function BotCollection() {
  const [bots, setBots] = useState([])
  const API_URL = 'http://localhost:8002/bots'

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setBots(data))
  }, [])

  return (
    <div className='ui four column grid'>
      <div className='row'>
        {bots.map((data) => (
          <BotCard key={data.id} bot={data} />
        ))}
      </div>
    </div>
  )
}

export default BotCollection
