import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../Components/TabPanel'
import Carusel from '../Components/Carusel'
import { Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const allProps = (index: number) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

export default () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://swapi.dev/api").then(resp => resp.json()).then(data => setData(data))
    }, [data])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };
    const appbar: string[] = Object.keys(data)
    const content: string[] = Object.values(data)
    return (
        <Box sx={{ bgcolor: 'background.paper' }}>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        StarWiki
                    </Typography>
                </Toolbar>
            </AppBar>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {appbar.map((data, index) => < Tab key={index} label={data} {...allProps(index)} />)}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {content.map((data, index) => <TabPanel value={value} index={index} dir={theme.direction} > <Carusel url={data}></Carusel></TabPanel>)}
            </SwipeableViews>
        </Box >
    );
}

