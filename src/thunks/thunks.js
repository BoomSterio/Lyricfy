import { tracksAPI } from '../api/api'
import { contextActions } from '../context'

export const getTopTracks = async dispatch => {
  dispatch(contextActions.setIsLoading(true))

  let data = await tracksAPI.getTopTracks()
  dispatch(contextActions.setTrackList(data.message.body.track_list))
  dispatch(contextActions.setHeading('Top 10 Tracks'))

  dispatch(contextActions.setIsLoading(false))
}

export const getTracksByQuery = async (dispatch, query, searchBy) => {
  dispatch(contextActions.setIsLoading(true))

  let data = await tracksAPI.searchTracks(searchBy, query)
  dispatch(contextActions.setHeading('Search Results'))
  dispatch(contextActions.setTrackList(data.message.body.track_list))

  dispatch(contextActions.setIsLoading(false))
}

export const getLyrics = async (dispatch, trackId) => {
  dispatch(contextActions.setIsLoading(true))

  let data = await tracksAPI.getLyrics(trackId)

  dispatch(contextActions.setIsLoading(false))
  return data
}
