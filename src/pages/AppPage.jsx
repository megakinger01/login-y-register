import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../redux/actions/auth'

export const AppPage = () => {

    const dispatch = useDispatch()
    const salirsesion = () => {
        dispatch( cerrarSesion() )
    }

    
    return (
        <div>
            <Button 
                onClick={ salirsesion }
                variant="contained"
                color="secondary"
            >
                Salir
            </Button>
        </div>
    )
}
