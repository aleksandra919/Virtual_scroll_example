import React from 'react'
import VirtualScroll from './VirtualScroll'

const generateItems = numItems =>
  Array(numItems)
    .fill(true)
    .map(_ => ({
      key: Math.round(Math.random() * 10),
      label: Math.random()
        .toString(36)
        .substr(2),
    }));



const App = () => {
  console.log('items', generateItems(2))
  return (
    <div className="App">
      <p>Test</p>
      <VirtualScroll
        itemCount={200}
        height={300}
        rowHeight={30}
        itemData={generateItems(100)}
      >
      </VirtualScroll>
    </div>

  )
}

export default App
