import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import DescriptionModal from './DescriptionModal';

// import * as ddg from "duckduckgo-images-api"

interface ICarusel {
    url: string;
}

export default (props: ICarusel) => {
    // ddg.image_search({ query: "birds", moderate: true }).then(results => console.log(results))

    const [data, setData] = React.useState<any>({});

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const filtering = (text: any) => {
        setData(data.results.filter((d: any) => d[Object.keys(d)[0]].includes(text.target.value)))
    }
    React.useEffect(() => {
        axios.get(props.url).then(resp => setData(resp.data))
    }, [data])

    return data.results != undefined ?
        (
            <Box>
                <TextField fullWidth id="standard-basic" label="Search..." variant="standard" onChange={filtering} />
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
        null
}
