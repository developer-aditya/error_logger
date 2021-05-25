const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const app = express();

app.use(express.static(path.join(process.cwd(), 'build')));
app.use('/', jsonServer.router('./db.json'));

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server Running on Port: ${port}`));
