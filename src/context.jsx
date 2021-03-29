import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export const Provider = ({children}) => {
  const [state, setState] = useState({
    trackList: [],
    heading: 'Top 10 tracks',
  })

  useEffect(() => {
    axios
      .get(`https://thingproxy.freeboard.io/fetch/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ru&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      .then(res => setState({
        ...state,
        trackList: res.data.message.body.track_list
      }))
      .catch(err => console.error(err))
  }, [])

    return (
      <Context.Provider value={[state, setState]}>
        {children}
      </Context.Provider>
    )
}

export const Consumer = Context.Consumer
