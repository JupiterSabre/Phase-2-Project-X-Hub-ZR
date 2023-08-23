import Map from "react-map-gl"

function HubMap() {



return (
     <Map
     mapboxAccessToken="pk.eyJ1IjoienVsYWlyIiwiYSI6ImNsbG45aXdtZDJoZzgzbnF2OXV0dTAweHgifQ.1loirG3PCMdbLlVVSy5Rjw"
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -73.9978363,
      latitude: 40.7219349,
      zoom: 9,
    }}
    
    style={{width: 1000, height: 600}}
    mapStyle="mapbox://styles/zulair/cllneo9wi001m01phb7ec6lc6"
  >
  </Map>
)
      
    
}

export default HubMap