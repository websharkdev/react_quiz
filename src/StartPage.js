import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <div>
      <h2 className="text-white font-semibold text-lg">Пройди тест</h2>
      <Link to={{
        pathname: `questions/1`,
      }}>
        <button>Начать</button>
      </Link>
    </div>
  )
}

export default StartPage
