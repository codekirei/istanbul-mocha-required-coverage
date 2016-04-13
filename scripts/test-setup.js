import { jsdom } from 'jsdom'

global.document = jsdom('<div id="foo">hello world!</div>')
global.window = document.defaultView
global.navigator = { userAgent: 'node.js' }

function thisIsNeverCalled() {
  return 'this function would throw off coverage if istanbul considered this file for coverage'
}

export default thisIsNeverCalled
