import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/',
  params: {
    'apikey': process.env.REACT_APP_MM_KEY
  },
})

export const tracksAPI = {
  getTopTracks: () => {
    return instance
      .get('chart.tracks.get?chart_name=top&page=1&page_size=10&country=ru&f_has_lyrics=1')
      .then(res => res.data)
      .catch(err => console.log(err))
  },
  searchTracks: (searchBy, query) => {
    return instance
      .get(`track.search?q${searchBy}=${query}&page_size=10&page=1&s_track_rating=desc`)
      .then(res => res.data)
      .catch(err => console.log(err))
  },
  getLyrics: (trackId) => {
    let lyrics, track

    return instance
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        lyrics = res.data.message.body.lyrics

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
        )
      })
      .then(res => {
        track = res.data.message.body.track
        return {lyrics, track}
      })
      .catch(err => console.log(err))
  },
}