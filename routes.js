/Declaramos express
const express =require(`express`);
//Routeamos los pintores
Let; pintor =require(`../controllers/pintoresController.js`);
//Creamos las rutas
Let; router = express.Router();
//Damos imagen hbs del index
router.get(`/`, pintor.list);
//exportamos route
module.exports= router;
