import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme/temaConfig'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { AppRouter } from './routes/AppRouter'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={ theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>   
    )
}

