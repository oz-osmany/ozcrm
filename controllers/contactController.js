const {response}=require('express');
const Contactos=require('../models/schema_contacts');

const createContact=async (req,res=response)=>{

    try {
        
        const contacto=new Contactos(req.body);
        //  console.log(req.body)
        // Insertar en BD
        await contacto.save();

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
const updateContact=async (req,res=response)=>{
         const contactId=req.body._id
         const data=req.triggerCont
        // console.log(req.body)
    try {
        
        // const contacto=new Contactos(req.body);
        const contact=await Contactos.findById(contactId)
        if ( !contact ) {
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
        const eventoActualizado = await Contactos.findByIdAndUpdate( contact, nuevoEvento, { new: true } )

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

const deleteContact=async(req,res=response)=>{
    const contactId=req.params.id
    // const data=req.tableCompany
    

    try {

        const evento = await Contactos.findById( contactId );

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


        await Contactos.findByIdAndDelete( contactId );

        res.json({ ok: true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
module.exports={createContact,updateContact,deleteContact}