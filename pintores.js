//Declaramos mongoose para llamar db
let mongoose = require (`mongoose`);
// creamos un schema de (nuestra base de datos)
    Let; Schema = mongoose.Schema;

//Creamos la coleccion
    Let; PintoresSchema = new Schema({
    nombre : {
        type: String,
        required: [ true, `Requerimos el nombre`]
    },
    corriente:{
        type: String,
        required:[true,`Requerimos el estilo`]
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }


});
