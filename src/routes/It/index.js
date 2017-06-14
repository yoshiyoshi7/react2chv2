import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'it',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const It = require('./containers/ItContainer').default
      const reducer = require('./modules/it').default

      /*  Add the reducer to the store on key 'it'  */
      injectReducer(store, { key: 'it', reducer })

      /*  Return getComponent   */
      cb(null, It)

    /* Webpack named bundle   */
    }, 'it')
  }
})
