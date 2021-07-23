const { promises: fs } = require('fs')
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-metrics'), { endpoint: '/__metrics' })

fastify.register(require('fastify-cors'), {
  origin: [
    /\.wvffle\.net$/
  ]
})

fastify.get('/favicon.ico', async (request, reply) => {
  return fs.readFile('favicon.ico')
})

fastify.get('/.well-known/matrix/server', async (request, reply) => {
  return {
    "m.server": "matrix.wvffle.net:443"
  }
})

fastify.get('*', async (request, reply) => {
  reply.type('html')
  return fs.readFile('index.html')
})

const start = async () => {
  try {
    await fastify.listen(8666, '0.0.0.0')
    console.log(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
