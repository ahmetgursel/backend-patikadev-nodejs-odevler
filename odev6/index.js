const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('koa-example', '/', (ctx) => {
  ctx.body = '<h1>Anasayfaya hosgeldiniz.</h1>';
});

router.get('hakkimda', '/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkimda sayfasina hosgeldiniz.</h1>';
});

router.get('iletisim', '/iletisim', (ctx) => {
  ctx.body = '<h1>Iletisim sayfasina hosgeldiniz.</h1>';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
