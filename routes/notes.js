/* 
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const {Router}= require('express');
const router=Router();

const Datos_note=require("../models/schema_notes")
const{createNote,updateNote,deleteNote}=require('../controllers/noteController');




//Contacts
router.get('/',async(req, res)=>{
    const task=await Datos_note.find();
    res.json(task);
});
router.get('/:email',async(req,res)=>{
   
    const dato=req.params.email
     task=await Datos_note.find({"email_c":dato});
     res.json(task);
});
router.get('/domain/:domain',async(req,res)=>{
   
    const dato=req.params.domain
   
task=await Datos_note.find({"email_c":{$regex:`.*${dato}.*`}});
     res.json(task);
});
router.post('/',createNote);
router.put('/:id',updateNote);
router.delete('/:id', deleteNote);



module.exports=router;
