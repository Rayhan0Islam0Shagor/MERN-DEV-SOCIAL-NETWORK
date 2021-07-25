const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// config dotenv
dotenv.config({ path: './config/config.env' });

// list of routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// configure app
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB connected'))
  .catch((e) => console.log(e));

// initial route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
