const authRouter = require('./auth')
const postRouter = require('./post')
const mailerRouter = require('./mailer')
function route(app) {
    app.use('/', mailerRouter)
    app.use('/', postRouter)
    app.use('/',authRouter)
}
module.exports = route;