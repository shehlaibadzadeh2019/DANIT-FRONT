const app = require('express')();

app.set('views', './views');
app.set('view engine', 'pug');
app.get('/', (request, response) => {
    response.render('index', {title: 'This is cool title', message: 'this is cool messsage'});
});

app.listen(3000);
