import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css'

function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
      } else {
        alert("Geolocation is not supported by this browser.")
      }
    }

    const success = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    }

    const error = () => {
      alert("Sorry, no position available.")
    }

    getLocation()
  }, [])

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>My Location</h1>
      {location ? (
        <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: "90%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lng]}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p style={{ textAlign: "center" }}>Getting location...</p>
      )}
    </div>
  )
}

export default App
