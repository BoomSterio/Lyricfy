import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import moment from 'moment'
import { DispatchContext, StateContext } from '../../../context'
import { getLyrics } from '../../../thunks/thunks'

const Lyrics = () => {
  const [track, setTrack] = useState(null)
  const [lyrics, setLyrics] = useState(null)

  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  const { trackId } = useParams()
  const history = useHistory()

  useEffect(() => {
    getLyrics(dispatch, trackId)
      .then(data => {
        setTrack(data.track)
        setLyrics(data.lyrics)
      })
  }, [trackId, dispatch])

  if (!track || state.isLoading) return <Spinner />

  return (
    <>
      <div
        onClick={() => history.go(-1)}
        className={'btn btn-dark btn-md mb-4'}
      >
        <i className="fas fa-chevron-left"/> Go Back
      </div>
      <div className="card">
        <h4 className={'card-header d-flex justify-content-center'} >
          {track.track_name} – {track.artist_name}
        </h4>
        <div className="card-body mx-auto" style={{ whiteSpace: 'pre-line' }}>
          <p className="card-text">{lyrics?.lyrics_body || 'No lyrics for this song'}</p>
        </div>
      </div>
      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Album</strong>: {track.album_name}
        </li>
        <li className="list-group-item">
          <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0]?.music_genre.music_genre_name || 'Unknown'}
        </li>
        <li className="list-group-item">
          <strong>Explicit</strong>: {track.explicit ? 'Yes' : 'No'}
        </li>
        <li className="list-group-item">
          <strong>Release Date</strong>: {moment(track.updated_time).format('DD/MM/YYYY')}
        </li>
      </ul>
    </>
  )
}

export default Lyrics
