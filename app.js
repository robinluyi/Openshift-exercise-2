const Koa = require('koa');
const app = new Koa();
const port = 8080;
const helloTo = process.env.HELLO || 'World';
app.use(async ctx => {
  ctx.body = 'Hello '+ helloTo;
});

app.listen(port, function() { 
    console.log('Node.js server started on port: ' + port
});
