const {response}=require('express');
const Company=require('../models/schema_companies');

const createCompany=async (req,res=response)=>{
   
    try {
        
        const company=new Company(req.body);
        // console.log(req.body)
        // Insertar en BD
        await company.save();

        res.status(201).json({
            ok:true,
            msg:'registro',
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
    }
}
const updateCompany=async (req,res=response)=>{
    const companyId=req.body._id
    const data=req.triggerComp
   console.log(req.body._id)
try {
   
   // const contacto=new Contactos(req.body);
   const company=await Company.findById(companyId)
   if ( !company ) {
       return res.status(404).json({
           ok: false,
           msg: 'Evento no existe por ese id'
       });
   }
   const nuevoEvento = {
       ...req.body,
       user: data
   }
   // update en BD
   const eventoActualizado = await Company.findByIdAndUpdate( company, nuevoEvento, { new: true } )

   res.json({
       ok: true,
       evento: eventoActualizado
   });
} catch (error) {
   console.log(error)
   res.status(500).json({
       ok:false,
       msg:'Por favor hable con el administrador'
   })
}
}

const deleteCompany = async( req, res = response ) => {
    const companyId=req.params.id
    // const data=req.tableCompany
    

    try {

        const evento = await Company.findById( companyId );

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'La Empresa no existe por ese id'
            });
        }

        // if ( evento.user.toString() !== uid ) {
        //     return res.status(401).json({
        //         ok: false,
        //         msg: 'No tiene privilegio de eliminar este evento'
        //     });
        // }


        await Company.findByIdAndDelete( companyId );

        res.json({ ok: true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}
module.exports={createCompany,updateCompany,deleteCompany}