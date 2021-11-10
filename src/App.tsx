import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './Components/TabPanel'
import Carusel from './Components/Carusel'
import axios from "axios"

const a11yProps = (index: number) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

export default () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        axios.get("https://swapi.dev/api").then(resp => setData(resp.data))
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
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {appbar.map((data, index) => < Tab label={data} {...a11yProps(index)} />)}
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

