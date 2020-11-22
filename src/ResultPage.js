import React from 'react'

function ResultPage(result) {
  const dictionary = {
    prioritizer: 'Приоритетчик',
    visualizer: 'Визуализатор',
    organizer: 'Организатор',
    planner: 'Плановик',
  }

  return (
    Object.keys(result).map((type, index) => {
      const title = dictionary[type]
      const points = result[type]
      return (
        <h3 key={ index }>{ `${ title }: ${ points }` }</h3>
      )
    })

  )
}

export default ResultPage
