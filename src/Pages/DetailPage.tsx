import { ArrowBack } from '@mui/icons-material';
import { AppBar, Box, Button, Container, CssBaseline, Icon, IconButton, Link, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import isURL from '../utils';


const printVal = (item: any) => {
    console.log(item, typeof item)
    if (!Array.isArray(item))
        return item
    const text = item.reduce((res: string, el: any) => res += el[0][Object.keys(el[0])[0]] + " ,", "")
    return text.slice(0, -1)
}

export default () => {
    const { state } = useLocation();

    [...Object.keys(state).filter((key: string) => state[key] == ""),
        "url",
        "created",
        "edited"].forEach((k: string) => delete state[k]) //remove all data missing or not userfull 

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/starwiki" style={{
                        color: 'white'
                    }}><ArrowBack></ArrowBack></Link>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 3 }}>
                        {state[Object.keys(state)[0]]}
                    </Typography>
                </Toolbar>
            </AppBar>
            <CssBaseline />
            < Container maxWidth="sm">
                <Box sx={{
                    height: '100vh'
                }}>
                    {Object.keys(state).map((key: string) =>
                        <p>
                            <span style={{ fontWeight: 'bold' }}>{key}: </span> {printVal(state[key])}
                        </p>
                    )
                    }
                </Box>
            </Container>
        </React.Fragment >
    )
}
