import assert from 'assert'
import getFoo from '../src/get-foo'

exports.getFoo = {

  'returns element with id "foo"': () => assert.equal(getFoo().id, 'foo'),

}
