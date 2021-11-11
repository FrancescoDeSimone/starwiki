import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import DescriptionModal from './DescriptionModal';

import * as ddg from "duckduckgo-images-api"

interface ICarusel {
    url: string;
}

export default (props: ICarusel) => {
    ddg.image_search({ query: "birds", moderate: true }).then(results => console.log(results))

    const [data, setData] = React.useState<any>(null);
    const [filter, setFilter] = React.useState<string>("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        const get_data = async () => {
            let resp = await fetch(props.url + filter)
            let data = await resp.json()
            setData(data)
        }
        get_data()

    }, [filter])

    return data != null ?
        (
            <Box>
                <TextField fullWidth id="standard-basic" label="Search..." variant="standard" onChange={(event) => setFilter(`?search=${event.target.value}`)} />
                <ImageList cols={4} gap={40} sx={{ margin: 10 }}>
                    {data.results.map((item: any, index: number) => (
                        <ImageListItem key={index.toString()} onClick={handleOpen}>
                            <img
                                src="https://wallpapercave.com/wp/nHaLQDm.gif?w=248&fit=crop&auto=format"
                                srcSet="https://wallpapercave.com/wp/nHaLQDm.gif?w=248&fit=crop&auto=format&dpr=2 2x"
                                alt={item[Object.keys(item)[0]]}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item[Object.keys(item)[0]]}
                            />
                            <DescriptionModal data={item} open={open} handleOpen={handleOpen} handleClose={handleClose} />
                        </ImageListItem>
                    ))
                    }
                </ImageList >
            </Box >
        ) :
        (
            <Box>
                <TextField fullWidth id="standard-basic" label="Search..." variant="standard" onChange={(event) => setFilter(`?search=${event.target.value}`)} />
            </Box >
        )
}
