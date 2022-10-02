/* 
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const {Router}= require('express');
const router=Router();

const Datos_email=require("../models/schema_emails")
const{createEmail,updateEmail,deleteEmail}=require('../controllers/emailController');




//Contacts
router.get('/',async(req, res)=>{
    const task=await Datos_email.find();
    res.json(task);
});
router.get('/:email',async(req,res)=>{
   
    const dato=req.params.email
     task=await Datos_email.find({"email_c":dato});
     res.json(task);
});
router.get('/domain/:domain',async(req,res)=>{
   
    const dato=req.params.domain
   
task=await Datos_email.find({"email_c":{$regex:`.*${dato}.*`}});
     res.json(task);
});
router.post('/',createEmail);
router.put('/:id',updateEmail);
router.delete('/:id', deleteEmail);



module.exports=router;
