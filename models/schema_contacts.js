const {Schema,model} =require('mongoose');

const ContactSchema=Schema({
    name_c:{
        type:String,
        require:true
    },
    lastname_c:{
        type:String,
        require:true
    },
    cargo_c:{
        type:String,
        require:true
    },
    email_c:{
        type:String,
        require:true
    },
    phone_c:{
        type:String,
        require:true
    },
    country_c:{
        type:String,
        require:true
    },
    company_c:{
        type:String,
        require:true
    },
    fecha_creacion:Date
});

module.exports=model('Contactos',ContactSchema);