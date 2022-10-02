const {Schema,model} =require('mongoose');

const NoteSchema=Schema({
    email_c:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true
    },
    date:{
        type:Date
    }
   
});

module.exports=model('Notes',NoteSchema);