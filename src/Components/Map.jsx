import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './map.css'

const center = {
    lat: 37.070639,
    lng: 37.369646
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCoNGjbb7Sug0IXfPULg6XhYHWQsUW_wVE"
    })
    // eslint-disable-next-line
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        map.setZoom(zoom)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    // eslint-disable-next-line
    const [zoom, setZoom] = useState(17)

    return isLoaded ? (
        <div className="map" >
            <GoogleMap
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                id="google-map"
                zoom={zoom}
            >
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default React.memo(MyComponent)