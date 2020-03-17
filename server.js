"use strict";
const db = require(`./models`);

const express = require(`express`);

const PORT = process.env.PORT || 3006;

const app = express();

app.use(express.static(`public`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expressHandlebars = require(`express-handlebars`);

app.engine(`handlebars`, expressHandlebars({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

require(`./routes/html-routes`)(app);

// const routes = require('./controller/game_controller.js);
// app.use(routes);
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
 );
});
