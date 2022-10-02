const {response}=require('express');
const Notes=require('../models/schema_notes');

const createNote=async (req,res=response)=>{
    // console.log(req.body)
    try {
        
        const note=new Notes(req.body);
        //  console.log(req.body)
        // Insertar en BD
        await note.save();

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
const updateNote=async (req,res=response)=>{
         const contactId=req.body._id
         const data=req.triggerCont
        // console.log(req.body)
    try {
        
        // const contacto=new Notes(req.body);
        const contact=await Notes.findById(contactId)
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
        const eventoActualizado = await Notes.findByIdAndUpdate( contact, nuevoEvento, { new: true } )

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

const deleteNote=async(req,res=response)=>{
    const contactId=req.params.id
    // const data=req.tableCompany
    

    try {

        const evento = await Notes.findById( contactId );

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


        await Notes.findByIdAndDelete( contactId );

        res.json({ ok: true });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
module.exports={createNote,updateNote,deleteNote}