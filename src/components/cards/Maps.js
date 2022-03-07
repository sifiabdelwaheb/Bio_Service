import React, { useState, useEffect, useRef } from 'react'
import ReactMapGL, { Source, Layer, ScaleControl, Marker, Popup } from 'react-map-gl'

// change to see effect
let lon = 10.1585743,
  lat = 36.8390439
var radius = 5
var center = [lon, lat]
var options = { steps: 50, units: 'kilometers', properties: { foo: 'bar' } }
const MARKERS = [
  {
    id: 'tenerife-1',
    latitude: 36.8390439,
    longitude: 10.1585743,
    city: 'tunisia'
  },

]
//console.log(line);

const MarkerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="56"
    fill=""
    viewBox="0 0 24 24"
    stroke="#3eb8db"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 
      0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)
export default function App() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400, // , [-87.61694, 41.86625]
    latitude: lat,
    longitude: lon,
    zoom: 8,
    pitch: 0,
    bearing: 0,
  })
  const mapRef = useRef(null)
  
  const [popupInfo, setPopupInfo] = useState(null);

  console.log('popupopen', popupInfo)




  return (
    <div className="App">
      {/* <a href="https://bdevg.com/articles/Source-and-Layer-component-of-react-map-gl/5fd769aae3b00a0008a72d01">
        <h1>Source and Layer component of react-map-gl</h1>
      </a> */}
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        onClick={(e, v) =>
          console.log(
            e.features.forEach((feature) => {
              console.log(feature.layer.id.split('-')[1], e.lngLat)
            }),
          )
        }
        transitionDuration={300}
        mapStyle="mapbox://styles/rafilos556/ckhrp0auk0ol119s02qvctvh4"
        mapboxApiAccessToken="pk.eyJ1IjoicmFmaWxvczU1NiIsImEiOiJja2hoaHFwZjcwZ3pyMnFwNmY3aHY2eDg4In0.Ai4rUxBMjwoNzHTIDqmuBA"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <div style={{ position: 'absolute', bottom: 200, left: 100 }}>
          <ScaleControl maxWidth={100} unit={'metric'} />
        </div>
        <Source id="my-data" type="geojson">
          <Layer
            id="point-90-hi"
            type="fill"
            paint={{
              'fill-color': '#088',
              'fill-opacity': 0.4,
              'fill-outline-color': 'yellow',
            }}
          />
        </Source>

        <Source id="my-ata" type="geojson">
          <Layer
            id="point-9-hi"
            type="line"
            paint={{
              'line-color': 'red',
              'line-width': 2,
            }}
          />
        </Source>
        {MARKERS.map(({ id, ...marker }) => (
          <Marker key={id} {...marker} offsetLeft={-17.5}
            offsetTop={-38} onClick={() => setPopupInfo(true)}>
            <MarkerIcon />

          </Marker>
        ))}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number("10.1585743")}
            latitude={Number("36.8390439")}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}

          >
            <div>
              <p>
                <b>3 Avenue du Roi Abedlaziz Al Saoud 2092 El Manar 2
                </b>
              </p>

            </div>
          </Popup>

        )}

      </ReactMapGL>
    </div >
  )
}
