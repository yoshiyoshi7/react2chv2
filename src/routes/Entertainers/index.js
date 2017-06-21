import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'entertainers',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Entertainers = require('./containers/EntertainersContainer').default
      const reducer = require('./modules/entertainers').default

      /*  Add the reducer to the store on key 'entertainers'  */
      injectReducer(store, { key: 'entertainers', reducer })

      /*  Return getComponent   */
      cb(null, Entertainers)

    /* Webpack named bundle   */
    }, 'entertainers')
  }
})
