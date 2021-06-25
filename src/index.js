const path = require('path')
const express = require('express')
const handlebars  = require('express-handlebars');

const app = express()


app.engine('hbs', handlebars({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', function (req, res) {
    res.render('home');
});

 
app.listen(3000, () => {
    console.log(
        `App listening at http://localhost:3000`,
    )
})