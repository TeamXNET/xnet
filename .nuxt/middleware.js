const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['not-auth'] = require('../middleware/not-auth.js')
middleware['not-auth'] = middleware['not-auth'].default || middleware['not-auth']

export default middleware
