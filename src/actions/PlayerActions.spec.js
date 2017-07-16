import * as actions from './PlayerActions.js'
import * as actionTypes from '../actionTypes.js'

describe('PlayerAction', () => {
  describe('volumeMouseMove', () => {
    test('volumeMouseMove default', () => {
      const init = {
        payload: {
          volume: {
            volumeNew: 184,
            volumeNumber: 0.575
          }
        },
        type: '[8] changeVolume'
      }

      const event = {
        target: {
          getBoundingClientRect: () => ({
            left: 150,
            width: 320
          })
        }
      }

      const windowEvent = {
        clientX: 334
      }

      const dispatсh = o => expect(o).toEqual(init)

      actions.volumeMouseMove(event, dispatсh)(windowEvent)
    })

    test('volumeMouseMove new volume > maxPoint', () => {
      const init = {
        payload: {
          volume: {
            volumeNew: 320,
            volumeNumber: 1
          }
        },
        type: '[8] changeVolume'
      }

      const event = {
        target: {
          getBoundingClientRect: () => ({
            left: 150,
            width: 320
          })
        }
      }

      const windowEvent = {
        clientX: 834
      }

      const dispatсh = o => expect(o).toEqual(init)

      actions.volumeMouseMove(event, dispatсh)(windowEvent)
    })

    test('volumeMouseMove new volume < 0', () => {
      const init = {
        payload: {
          volume: {
            volumeNew: 0,
            volumeNumber: 0
          }
        },
        type: '[8] changeVolume'
      }

      const event = {
        target: {
          getBoundingClientRect: () => ({
            left: 150,
            width: 320
          })
        }
      }

      const windowEvent = {
        clientX: 140
      }

      const dispatсh = o => expect(o).toEqual(init)

      actions.volumeMouseMove(event, dispatсh)(windowEvent)
    })
  })

/*   describe('showHideControls', () => {
    test('showHideControls default', () => {
      const dispatch = () => {}
      const getState = () => ({ showControls: false })

      actions.showHideControls()(dispatch, getState)
    })
  }) */
})
