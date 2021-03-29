import React from 'react'
import { Link } from 'react-router-dom'

const Track = React.memo(({ track }) => {
  return (
    <div className={'col-md-6'}>
      <div className="card mb-4 shadow-sm">
        <div className={'card-body'} style={{ height: '200px' }}>
          <h4 className={'one-line'}>{track.artist_name}</h4>
          <p className="card-text">
            <strong>
              <i className={'fas fa-play'} /> Track
            </strong>: {track.track_name}
            <br />
            <p className={'one-line'}>
              <strong>
                <i className={'fas fa-compact-disc'} /> Album
              </strong>: {track.album_name}
            </p>
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className={'btn btn-dark brn-block'}
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  )
})

export default Track
