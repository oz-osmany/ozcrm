const {Schema,model} =require('mongoose');

const EmailSchema=Schema({
    email_c:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        require:true
    },
    data:{
        type:String
    },
    date:{
        type:Date
    }
   
});

module.exports=model('Emails',EmailSchema);