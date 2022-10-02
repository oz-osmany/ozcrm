const {Schema,model} =require('mongoose');

const CompanySchema=Schema({
    nombreEmpresa :{
        type:String,
        require:true 
    },

    calle :{
        type:String,
        require:true 
    },

    codigoPostal :{
        type:String,
        require:true 
    },

    ciudad :{
        type:String,
        require:true 
    },

    pais :{
        type:String,
        require:true 
    },

    idioma :{
        type:String,
        require:true 
    },

    homepage :{
        type:String,
        require:true 
    },

    moneda :{
        type:String,
        require:true 
    },

    tipoAgencia :{
        type:String,
        require:true 
    },

    codigoTourPlan :{
        type:String,
        require:true 
    },
    fecha_entrada:{
        type: Date,
        require:true
    },
    domain :{
        type:String,
        require:true 
    },

    // agenciaPotencial :{
    //     type:String,
    //     require:true 
    // },

    // descripction :{
    //     type:String,
    //     require:true 
    // },

    
    
});

module.exports=model('Company',CompanySchema);