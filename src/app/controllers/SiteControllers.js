
class SiteController {

    async index(req, res, next) {
        return res.render('home')
    }

    async about(req, res, next) {
        return res.render('about')
    }

    async contact(req, res, next) {
        return res.render('contact')
    }
}

module.exports = new SiteController;