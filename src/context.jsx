import React, { useEffect, useReducer } from 'react'
import { getTopTracks } from './thunks/thunks'

export const StateContext = React.createContext()
export const DispatchContext = React.createContext()

let initialState = {
  trackList: [],
  heading: 'Top 10 tracks',
  isLoading: false,
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRACK_LIST':
      return {
        ...state,
        trackList: [...action.trackList],
      }
    case 'SET_HEADING':
      return {
        ...state,
        heading: action.newHeading,
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}

export const contextActions = {
  setTrackList: trackList => ({ type: 'SET_TRACK_LIST', trackList }),
  setHeading: newHeading => ({ type: 'SET_HEADING', newHeading }),
  setIsLoading: isLoading => ({ type: 'SET_IS_LOADING', isLoading }),
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    getTopTracks(dispatch)
  }, [])

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const Consumer = StateContext.Consumer
