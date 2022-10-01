import { useEffect, useState } from "react";
import axios from 'axios'
import { Box, Tabs, Tab, Grid, OutlinedInput, InputAdornment, Button } from '@mui/material';
import { Container } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CustomDialog from "../component/CustomDialog";
import Skeleton from 'react-loading-skeleton';

const Index = () =>
{
    const [data, setData] = useState([]);
    const [tag, setTag] = useState('');
    const [dialog, setDialog] = useState(false);
    const [dialogData, setDialogData] = useState({});

    const handleClose = () =>
    {
        setDialog(false)
    }

    const handleSearchTag = async () =>
    {
        const newData = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/public-feeds?tag=${tag}`)
        setData(newData.data.data);
    }

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const newData = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/public-feeds`)
            setData(newData.data.data);
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="main">
                <Container>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={"1"} aria-label="">
                            <Tab icon={<RssFeedIcon />} iconPosition={"start"} label="Public Feeds" value="1">
                            </Tab>
                        </Tabs>
                    </Box>

                    <p style={{ fontWeight: '800', fontSize: '24px' }}>Discover your best sources from any topic</p>
                    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <OutlinedInput fullWidth value={tag} placeholder={"Search by Tags"} onChange={(e) => { setTag(e.target.value) }}
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>} endAdornment={<Button variant={"contained"} onClick={handleSearchTag} disabled={tag === ""}>Search</Button>}>
                        </OutlinedInput>
                    </div>
                    {data.length === 0 ?
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                            {Array(20).fill(0).map((data, i) =>
                            {
                                return <Grid key={i} item xs={6} sm={4} md={4} lg={3}  >
                                    <Box sx={{ boxShadow: 3 }} style={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
                                        <Skeleton width={200} height={240} />
                                    </Box>
                                </Grid>
                            })}
                        </Grid>
                        :
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                            {data.map((data, i) =>
                            {
                                return <Grid key={i} item xs={6} sm={4} md={4} lg={3} style={{ textAlign: 'center' }}  >
                                    <Button onClick={() => { setDialog(true); setDialogData(data); }} >
                                        <Box className="item-hover" sx={{ boxShadow: 3 }} style={{ padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
                                            <img src={data.media.m} width={200} height={240} alt={"image " + i} />
                                        </Box>
                                    </Button>
                                </Grid>
                            })}
                        </Grid>
                    }
                    <CustomDialog isOpen={dialog} onClose={handleClose} data={dialogData} />
                </Container>
            </div>
        </>
    )
}

export default Index;