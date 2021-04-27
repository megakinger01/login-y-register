import React from 'react'
import db from './firebase/config-firebase'
import db from './firebase/config-firebase'





 const usuario = {
     nombre: 'Mafer',
     activo: true,
     fecha: 0
 }

PARA INSERTAR REGISTROS

db.collection( 'usuarios')
    .add( usuario )
    .then( docRef => console.log( docRef ))



PARA ACTUALIZAR

db.collection( 'usuarios')
    .doc( '0JJNnpeeAfov9WcJP7oT')
    .update({
        nombre: 'Mariafernanda'
    })
    .then( console.log('actualizado'))

    update : actualiza el campo 
    set detruye la data y reemplaza con la nueva data 


BORRAR REGISTROS 


db.collection( 'usuarios')
    .doc( 'CQoDqqL3TY4O9uCZkx2u')
    .delete()


TRAER LOS REGISTROS CON SU ID
db.collection('usuarios')
    .onSnapshot(snap => {

        const usuarios = [];

        snap.forEach(snapHijo => {
            usuarios.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
            console.log(usuarios);
        })
    })
