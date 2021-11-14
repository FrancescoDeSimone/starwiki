import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import isURL from '../utils';


interface ICarusel {
    url: string;
}
export default (props: ICarusel) => {
    const mobile = useMediaQuery('(max-width:450px)');
    const phablet = useMediaQuery('(max-width:700px)');
    const tablet = useMediaQuery('(max-width:1000px)');
    const [data, setData] = React.useState<any>([]);
    const [nextData, setNextData] = React.useState<any>(null);
    const [filter, setFilter] = React.useState<string>("");

    const fetchNextData =
        (data: any) => fetch(data[data.length - 1].next)
            .then(res => res.json())
            .then(d => { setNextData(d); return d })

    const navigate = useNavigate()

    const goTo = (data: any) => {
        let toSend = { ...data }
        let keys = Object.keys(data).filter((key: any) => isURL(data[key]))
        keys.forEach(k => toSend[k] = [])
        keys.forEach((k: any) => {
            data[k].toString().split(",")
                .map((el: any) => fetch(el)
                    .then((res: any) => res.json()).then((c: any) => {
                        toSend[k] = [...toSend[k], [c]]
                    }).then(() => navigate('/detail', { state: toSend, replace: true })
                    ))
        }
        )
    }

    React.useEffect(() => {
        const get_data = async () => {
            let resp = await fetch(props.url + filter)
            let d = await resp.json()
            setData([d])
            if (d.next && window.visualViewport.width >= window.innerWidth)
                fetchNextData([d])
                    .then(d => fetchNextData([d]))
        }
        get_data()
    }, [filter])

    React.useEffect(() => {
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
                <ImageList cols={mobile ? 1 : phablet ? 2 : tablet ? 3 : 4} gap={(mobile || phablet) ? 2 : 10} sx={{ margin: (mobile || phablet) ? 0 : 10 }}>
                    {data.map((element: any) => element.results.map((item: any, index: number) => (
                        <ImageListItem key={index.toString()} onClick={() => goTo(item)}>
                            <img
                                src="https://wallpapercave.com/wp/nHaLQDm.gif?w=248&fit=crop&auto=format"
                                srcSet="https://wallpapercave.com/wp/nHaLQDm.gif?w=248&fit=crop&auto=format&dpr=2 2x"
                                alt={item[Object.keys(item)[0]]}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item[Object.keys(item)[0]]}
                            />
                        </ImageListItem>
                    )))
                    }
                </ImageList >
            </InfiniteScroll>
        </Box >
    )
}
