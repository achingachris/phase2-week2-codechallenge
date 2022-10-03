import React, { useState, useEffect } from 'react'

function BotCollection() {
  const [bots, setBots] = useState([])
  const API_URL = 'http://localhost:8002/bots'

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div className='ui four column grid'>
      <div className='row'></div>
    </div>
  )
}

export default BotCollection
