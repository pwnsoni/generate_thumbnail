const {app, express} = require('./index');

const {loadNuxt} = require('nuxt');
const port = process.env.SERVER_PORT || 3000;

app.use('/_nuxt', express.static('./../.nuxt/dist/client'))

app.get('/testUI', (req, res) => {
    console.log('`enjoy --> ${req.url}`')
    res.send({status: 200, message: 'ok'})
})

app.get('/*', async (req, res) => {
    console.log(`serving start ${req.url}`)
    console.log('initiating Nuxt');
    const nuxt = await loadNuxt('start')
    nuxt.render(req, res);
    console.log('served')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

