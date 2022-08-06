import { useState } from 'react'
import Map from "./components/Map"
import LoadingSpinner from "./components/LoadingSpinner"

function App() {

  return (
    <div className="app">
      {/* <h1>here we go</h1> */}
        <Map />
      {/* <LoadingSpinner /> */}
    </div>
  )
}

export default App
