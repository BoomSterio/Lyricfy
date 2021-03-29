import React, { useContext } from 'react'
import { Context } from '../../../context'
import Spinner from '../Spinner/Spinner'
import Track from '../Track/Track'

const Tracks = () => {
  const [gState] = useContext(Context)

  const { trackList, heading } = gState

  if (trackList.length === 0) return <Spinner />

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

export default Tracks
