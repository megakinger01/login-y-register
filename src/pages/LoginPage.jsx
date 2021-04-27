import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyle } from '../hooks/useStyle';
import { useForm } from '../hooks/useForm';
import {  signIn } from '../redux/actions/auth';



export const LoginPage = () => {

    const dispatch = useDispatch()

    const style = useStyle()
    const [ values, handleInputChange ] = useForm({
        email:'pedro@correo.com',
        password: '123456*-',
    })

    const {  email , password  } = values

    const onsubmit = (ev) => {
        ev.preventDefault() 
        dispatch( signIn( email, password ))
    }


    return (
        < >
            <Grid>
                <Paper elevation={9} className={style.paper}>

                    <Grid align="center">
                        <Avatar className={style.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Ingresar</h2>
                    </Grid>
                    
                    <form onSubmit={onsubmit}>

                            <TextField 
                                    placeholder="" 
                                    label="email" 
                                    value={email}
                                    name="email"
                                    onChange={ handleInputChange }
                                    fullWidth
                            />

                            <TextField 
                                    placeholder="" 
                                    type="password" 
                                    label="contraseña"
                                    value={password}
                                    name="password"
                                    onChange={ handleInputChange }
                                    fullWidth 
                            />

                            <FormControlLabel
                                    control={
                                    <Checkbox
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="Recordar usuario"
                            />

                            <Button 
                                type="submit" 
                                color="primary" 
                                variant="contained"
                                className={style.btn}
                                fullWidth 
                            >
                            
                                INGRESAR
                            </Button>
                    </form>

                    <Typography>
                        ¿No tienes cuenta?
                        <Link  to="/auth/register">
                            registrate
                        </Link>
                    </Typography>
                    
                </Paper>
            </Grid>
        </>
    )
}
