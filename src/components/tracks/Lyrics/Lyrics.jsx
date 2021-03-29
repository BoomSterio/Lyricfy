import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import moment from 'moment'

const Lyrics = () => {
  const [track, setTrack] = useState(null)
  const [lyrics, setLyrics] = useState(null)

  const { trackId } = useParams()
  const history = useHistory()

  useEffect(() => {
    axios
      .get(
        `https://thingproxy.freeboard.io/fetch/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        setLyrics(res.data.message.body.lyrics)

        return axios.get(
          `https://thingproxy.freeboard.io/fetch/https://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
        )
      })
      .then(res => setTrack(res.data.message.body.track))
      .catch(err => console.error(err))
  }, [trackId])

  if (!track) return <Spinner />

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
