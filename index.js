const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');  
const todoRoutes = require('./routes/todos');
// const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/views'))

app.use('/api/todos', todoRoutes);
app.use('/',(req, res) => {
    res.sendFile('index.html', { root: __dirname + '/views' });
})
const PORT = 8000;
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
