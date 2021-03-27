import React, { useContext, useState } from 'react'
import { Context } from '../../../context'
import axios from 'axios'

const ALL = '_track_artist'
const TRACK = '_track'
const ARTIST = '_artist'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchBy, setSearchBy] = useState(ALL)

  const setGlobalState = useContext(Context)[1]

  const onChange = e => setQuery(e.target.value)

  const onSelect = e => setSearchBy(e.target.value)

  const findTrack = (e) => {
    e.preventDefault()

    axios
      .get(
        `https://thingproxy.freeboard.io/fetch/https://api.musixmatch.com/ws/1.1/track.search?q${searchBy}=${query}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        if(res.data.message.body.track_list.length === 0) alert('Nothing was found')

        setGlobalState({
          heading: 'Search Results',
          trackList: res.data.message.body.track_list,
        })
        setQuery('')
      })
      .catch(err => console.error(err))
  }

  return (
    <div className={'card card-body mb-4 p-4'}>
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search for a Song
      </h1>
      <p className="lead text-center">Get lyrics for any Song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <div className={'d-md-flex'}>
            <input
              type="text"
              className="form-control form-control-lg"
              style={{marginRight: '10px'}}
              placeholder={'Song title...'}
              value={query}
              onChange={onChange}
            />
            <select defaultChecked={searchBy} onChange={onSelect} className="form-select" style={{width: '100px'}}>
              <option value={ALL}>All</option>
              <option value={TRACK}>Track</option>
              <option value={ARTIST}>Artist</option>
            </select>
          </div>
          <button
            className="btn btn-primary btn-lg mb-5 mt-2 w-100"
            type={'submit'}
            disabled={!query}
          >
            Get Track Lyrics
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
