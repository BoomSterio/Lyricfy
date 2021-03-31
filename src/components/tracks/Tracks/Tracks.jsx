import React, { useContext } from 'react'
import { StateContext } from '../../../context'
import Spinner from '../Spinner/Spinner'
import Track from '../Track/Track'

const Tracks = () => {
  const { trackList, heading, isLoading } = useContext(StateContext)

  if(isLoading) return <Spinner />

  return (
    <>
      <h3 className={'text-center mb-4'}>{heading}</h3>
      <div className={'row'}>
        {trackList.length === 0 &&
        <h1>No results</h1>}
        {trackList.map(t => (
          <Track key={t.track.track_id} track={t.track} />
        ))}
      </div>
    </>
  )
}

export default Tracks
