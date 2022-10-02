/* 
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const {Router}= require('express');
const router=Router();

const Datos_contact=require("../models/schema_contacts")
const{createContact,updateContact,deleteContact}=require('../controllers/contactController');




//Contacts
router.get('/',async(req, res)=>{
    const task=await Datos_contact.find();
    res.json(task);
});
router.get('/name/:name',async(req,res)=>{
   
    const dato=req.params.name
    // console.log(dato)
     task=await Datos_contact.find({"name_c":dato});
     res.json(task);
});
router.get('/last_name/:last_name',async(req,res)=>{
   
    const dato=req.params.last_name
    // console.log(dato)
     task=await Datos_contact.find({"lastname_c":dato});
     res.json(task);
});
router.get('/cargo/:cargo',async(req,res)=>{
   
    const dato=req.params.cargo
    // console.log(dato)
     task=await Datos_contact.find({"cargo_c":dato});
     res.json(task);
});
router.get('/email/:email',async(req,res)=>{
   
    const dato=req.params.email
    // console.log(dato)
     task=await Datos_contact.find({"email_c":dato});
     res.json(task);
});
router.get('/country/:country',async(req,res)=>{
   
    const dato=req.params.country
    // console.log(dato)
     task=await Datos_contact.find({"country_c":dato});
     res.json(task);
});
router.get('/company/:company',async(req,res)=>{
   
    const dato=req.params.company
    // console.log(dato)
     task=await Datos_contact.find({"company_c":dato});
     res.json(task);
});
router.get('/fecha_creacion/:fecha_creacion',async(req,res)=>{
   
    const dato=req.params.fecha_creacion
    // console.log(dato)
     task=await Datos_contact.find({"fecha_creacion":dato});
     res.json(task);
});
router.post('/',createContact);
router.put('/:id',updateContact);
router.delete('/:id', deleteContact );



module.exports=router;
