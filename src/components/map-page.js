/** @jsx jsx */
import React, { useState, useEffect } from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

import {Map, Marker, ImageOverlay, Tooltip} from 'react-leaflet'
import L from 'leaflet'

import mapimage from '../images/laurelwood-map-design-2.jpg'
import emptyIcon from '../images/px.png'

import 'leaflet/dist/leaflet.css'

import MapLightBox from './map-lightbox'

if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: emptyIcon,
    iconUrl: emptyIcon,
    shadowUrl: emptyIcon
  })
}

const MapPage = ({locations}) => {
  const [height, setHeight] = useState(0)
  const [currLightboxItem, setCurrLightboxItem] = useState(null)

  const markerClick = index => {
    const {edges} = locations
    setCurrLightboxItem(edges[index].node)
  }

  const updateWindowDimensions = () => {
    setHeight(window.innerHeight)
  }
  const closeLightBox = () => {
    setCurrLightboxItem(null)
  }

  const escFunction = event => {
    if (event.keyCode === 27) {
      // esc key pressed
      closeLightBox()
    }
  }

  const calcLabelOffset = labelDir => {
    switch (labelDir) {
      case 'top':
        return [0, 25]
      case 'bottom':
        return [0, -5]
      case 'left':
        return [20, 20]
      case 'right':
        return [-20, 25]
      default:
        return [15, 25]
    }
  }

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!')
    updateWindowDimensions()
    document.addEventListener('keydown', escFunction, false)
    window.addEventListener('resize', updateWindowDimensions)

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => {
      document.removeEventListener('keydown', escFunction, false)
      window.removeEventListener('resize', updateWindowDimensions)
    }
  })

  const inBrowser = (typeof window !== 'undefined')

  if (typeof window !== 'undefined') {
    return (

      <>
        {currLightboxItem && <MapLightBox content={currLightboxItem} closeLightBox={closeLightBox} />}

        {inBrowser && (
          <Map
            className='map'
            crs={L.CRS.Simple}
            bounds={[
              [0, 0],
              [1209, 1920]
            ]}
            minZoom={-0.5}
            maxZoom={0.5}
            zoomSnap={0.1}
            // center={[20, 960]}
            style={{height: `${(height - 116).toString()}px`, marginTop: '116px'}}
          >
            <ImageOverlay
              url={mapimage}
              bounds={[
                [0, 0],
                [1209, 1920]
              ]}
            />
            {/* <Polygon
            positions={[[300, 900], [300, 600], [600, 600], [600, 900]]}
            color="blue"
            onClick={this.MarkerClick}
          /> */}
            {locations.edges.map(({node}, index) => {
              const latLong = [node.y, node.x]
              const currOffset = calcLabelOffset(node.labelDirection)
              // console.log(node.labelDirection)

              return (
                <>
                  {(latLong !== null) && (
                    <Marker
                      key={latLong}
                      position={latLong}
                      onClick={() => markerClick(index)}
                    >
                      <Tooltip permanent interactive direction={node.labelDirection} offset={currOffset}>
                        {node.title}
                      </Tooltip>
                    </Marker>
                  )}
                </>
              )
            })}
          </Map>
        )}
      </>
    )
  } else {
    return null
  }
}

export default MapPage
