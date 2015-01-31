# Load deps
require './browser-deps'

# do something
Vue = require 'vue'

Vue.config.debug = true

App = new Vue
  name: 'App'
  data:
    str: 'Hello, world!'

App.$mount '#cstap-sandbox'
