import React, { Component } from 'react'
import { Consumer } from '../../../context'
import Spinner from '../Spinner/Spinner'
import Track from '../Track/Track'

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {({ trackList, heading }) => {
          if (trackList.length === 0) {
            return <Spinner />
          } else {
            return (
              <>
                <h3 className={'text-center mb-4'}>{heading}</h3>
                <div className={'row'}>
                  {trackList.map(t => (
                    <Track key={t.track.track_id} track={t.track} />
                  ))}
                </div>
              </>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks
