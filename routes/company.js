const {Router}= require('express');
const { createCompany,updateCompany,deleteCompany } = require('../controllers/companyController');
const router=Router();
const Datos_company=require("../models/schema_companies");


router.get('/',async(req, res)=>{
    const task=await Datos_company.find();
    res.json(task);
});
router.get('/company/:company',async(req,res)=>{
   
    const dato=req.params.company
    // console.log(dato)
     task=await Datos_company.find({"nombreEmpresa":dato});
     res.json(task);
});
router.get('/codigoPostal/:codigoPostal',async(req,res)=>{
   
    const dato=req.params.codigoPostal
    // console.log(dato)
     task=await Datos_company.find({"codigoPostal":dato});
     res.json(task);
});
router.get('/country/:country',async(req,res)=>{
   
    const dato=req.params.country
    // console.log(dato)
     task=await Datos_company.find({"pais":dato});
     res.json(task);
});
router.get('/language/:language',async(req,res)=>{
   
    const dato=req.params.language
    // console.log(dato)
     task=await Datos_company.find({"idioma":dato});
     res.json(task);
});
router.get('/domain/:domain',async(req,res)=>{
   
    const dato=req.params.domain
    // console.log(dato)
     task=await Datos_company.find({"domain":dato});
     res.json(task);
});
router.get('/currency/:currency',async(req,res)=>{
   
    const dato=req.params.currency
    // console.log(dato)
     task=await Datos_company.find({"moneda":dato});
     res.json(task);
});

router.post('/', createCompany );
router.put('/:id',updateCompany);
router.delete('/:id',deleteCompany);

module.exports=router;