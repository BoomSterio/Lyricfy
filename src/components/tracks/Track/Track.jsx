import React from 'react'

const Track = ({ track }) => {
  return (
    <div className={'col-md-6'}>
      <div className="card mb-4 shadow-sm">
        <div className={'card-body'}>
          <h4>{track.artist_name}</h4>
          <p className="card-text">
            <strong><i className={'fas fa-play'} /> Track</strong>: {track.track_name}
            <br/>
            <strong><i className={'fas fa-compact-disc'} /> Album</strong>: {track.album_name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Track
