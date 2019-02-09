# trap-core


# get started

* install
	 
	```
	yarn add @trapts/core
	```

* example

	```javascript
	import { Server } from '@trapts/core'
	import * as bodyParser from 'koa-bodyparser'
	
	const bootstrap = () => {
		const server = new Server()
	
		// bind cache client to context
		server.bindToContext('cache', new Cache({ stdTTL: 86400000 }))
		
		// koa middleware
		server.use(bodyParser())
		
		// koa keys
		server.keys(['Hello', 'World'])
		
		// start
		server.start(3000)
	}
	
	bootstrap()
	```
