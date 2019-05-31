import {create} from 'dva-core'
import {createLogger} from 'redux-logger'
import createLoading from 'dva-loading'

let app
let store
let dispatch
let registered


function createApp(options) {
  options.onAction = [createLogger()]
  app = create(options)
  // app.use(createLoading({}))

  if(!registered) options.models.forEach(model => app.model(model))
  registered = true
  app.start()

  store = app._store
  app.getStore = () => store
  app.use({
    onError(err){
      console.log(`dva出错了${err.toString()}`)
    }
  })

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app;

}

export default {
  createApp,
  getDispatch(){
    return app.dispatch;
  }
}
