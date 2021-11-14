import { ArrowBack } from '@mui/icons-material';
import { AppBar, Box, Button, Container, CssBaseline, Icon, IconButton, Link, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import isURL from '../utils';


const printVal = (item: any) => {
    if (typeof item != "object")
        return item
    const text = item.reduce((res: string, el: any) => res += el[Object.keys(el)[0]] + " ,", "")
    return text.slice(0, -1)
}

export default () => {
    const { state } = useLocation();
    console.log(state);
    let _ = [...Object.keys(state).filter((key: string) => state[key] == ""),
        "url",
        "created",
        "edited"].forEach((k: string) => delete state[k]) //remove all data missing or not userfull 

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/starwiki/#/starwiki" style={{
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
                            <span style={{ fontWeight: 'bold' }}>{key.replaceAll("_", " ")}: </span> {printVal(state[key])}
                        </p>
                    )
                    }
                </Box>
            </Container>
        </React.Fragment >
    )
}
