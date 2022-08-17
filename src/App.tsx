import { useState, useEffect } from 'react'
import Map from "./components/Map"
import LoadingSpinner from "./components/LoadingSpinner"
import axios, {AxiosError} from 'axios'
import {EventData} from './types'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)
  const [checked, setChecked] = useState({wildfires: true, severeStorms: false, volcanoes: false, seaLakeIce: false})

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      setError(null)
      console.log("FETCH???")
      try{
        const { data } = await axios.get('https://eonet.gsfc.nasa.gov/api/v3/events')
        setEventData(data.events)
        setLoading(false)
      } catch(error:any){
          console.log("ERROR FETCHING: ", error)
          setError(error)
          setLoading(false)
      }
      
    }

    fetchEvents()
  }, [])

  return (
    <div className="app">
      <Header checked={checked} setChecked={setChecked} />
      {/* {!loading ? <Map eventData={eventData} /> : <LoadingSpinner />} */}
      <Map eventData={eventData} dataSet={checked} />
      {loading && <LoadingSpinner />}
    </div>
  )
}

export default App
