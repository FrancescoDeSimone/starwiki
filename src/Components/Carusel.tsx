import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import DescriptionModal from './DescriptionModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import InfiniteScroll from 'react-infinite-scroll-component';


interface ICarusel {
    url: string;
}
export default (props: ICarusel) => {
    const mobile = useMediaQuery('(max-width:800px)');
    const tablet = useMediaQuery('(max-width:1000px)');
    const [data, setData] = React.useState<any>([]);
    const [nextData, setNextData] = React.useState<any>(null);
    const [filter, setFilter] = React.useState<string>("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchNextData =
        (data: any) => fetch(data[data.length - 1].next)
            .then(res => res.json())
            .then(d => setNextData(d))

    React.useEffect(() => {
        const get_data = async () => {
            let resp = await fetch(props.url + filter)
            let d = await resp.json()
            setData([d])
            if (window.visualViewport.width >= window.innerWidth) {
                fetchNextData([d])
            }
        }
        get_data()
    }, [filter])

    React.useEffect(() => {
        console.log(nextData)
        if (nextData != null)
            setData([...data, nextData])

    }, [nextData])

    return (
        <Box>
            <TextField sx={{ mb: 5 }} fullWidth id="standard-basic" label="Search..." variant="standard" onChange={(event) => setFilter(`?search=${event.target.value}`)} />
            <InfiniteScroll
                dataLength={data.reduce((acc: number, d: any) => acc += d.count, 0)}
                next={() => fetchNextData(data)}
                hasMore={data.length > 0 && data[data.length - 1].next != null}
                loader={""}
                scrollableTarget="scrollableDiv"

            >
                <ImageList cols={tablet ? 3 : mobile ? 2 : 4} gap={mobile ? 2 : 10} sx={{ margin: mobile ? 0 : 10 }}>
                    {data.map((element: any) => element.results.map((item: any, index: number) => (
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
                    )))
                    }
                </ImageList >
            </InfiniteScroll>
        </Box >
    )
}
