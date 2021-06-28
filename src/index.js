const path = require('path')
const express = require('express')

//import router
const router = require('./routes');

// Import view engine
const handlebars  = require('express-handlebars');

const app = express()

//  ussage file static
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', handlebars({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// use router
router(app)

 
app.listen(3000, () => {
    console.log(
        `App listening at http://localhost:3000`,
    )
})