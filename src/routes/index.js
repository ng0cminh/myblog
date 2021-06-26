const blogRouter = require('./blog')
const userRouter = require('./user')
const siteRouter = require('./site')

// middleware that is specific to this router
// router.use(middwares)
function router(app) {
    app.use('/blog', blogRouter)

    app.use('/user', userRouter)
    
    app.use('/', siteRouter)
}


module.exports = router