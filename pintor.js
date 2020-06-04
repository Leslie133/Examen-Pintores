Let; mongoose = require(`mongoose`);
//Vamos a unirlo al modelo
Let; Pintores = require(`..\models\Pintores`);

Let; pintorescontroller= {};


/*LISTAR -> FIND()*/
pintoresController.list=(req, res)={
    Pintores.find({})
    .limite(20)
    .skitp(num0)
    .exec((err, pintor)=>{
        if(err){
            console.log(`Error:`,err)
        }
        res.render(view `../views/index`,options:{
            pintores:pintor,
            titulo:"Listado de pintores",
            year: new Date().getDate()
        })
    })
};

module.exports = pintoresController;
	
