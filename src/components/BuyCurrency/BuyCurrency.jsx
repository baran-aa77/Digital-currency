import React, { useEffect, useState } from 'react'
import { Grid, TextField, Dialog} from '@mui/material';
import Biglogo from "../../assets/image/biglogo.webp";
import { getcurrency } from "../../api/api";
const BuyCurrency = () => {
    const toman = 35000;
    const [coins, setcoins] = useState([])
    const [number, setnumber] = useState(1);
    const [Coinid, setCoinid] = useState('bitcoin')
    const [coinforinput, setcoinforinput] = useState({})
    const [loading, setloading] = useState(true)
    const handleGetData = async () => {
        const data = await getcurrency()
        setloading(false)
        setcoins(data)
        console.log(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])

    useEffect(() => {
        setcoinforinput(coins.filter(coinMan => coinMan.id === Coinid)?.[0])
    }, [coins, Coinid])
    const [search, setsearch] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const handleChange = (e) => {
        setsearch(e.target.value)
    }
    const handleCoin = (id) => {
        console.log(id)
        setCoinid(id)
        setDialogOpen(false)
    }
    const handleChangeNumber = (e) => {
        setnumber(e.target.value)
    }

    if (loading) {
        return <div>Loading</div>
    }

    return (
        <Grid container  item xs={12} sx={{ marginTop: '60px', textAlign: 'center' }}>

            <Grid item xs={12}>
                <img src={Biglogo} width='300px' />
            </Grid>
            <Grid item container xs={12} sx={{ justifyContent: 'center' }}>
                <Grid item xs={2} >
                    <TextField sx={{ width: '98%' }} label="تومان" value={coinforinput?.current_price * toman * number} defaultValue={'789779'}></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField defaultValue={'1'}
                        value={number}
                        sx={{ width: '98%' }}
                        label="واحد"
                        onChange={handleChangeNumber}
                    />
                </Grid>
                <Grid item xs={2}>

                    <TextField
                        sx={{ cursor: 'pointer' }}
                        value={coinforinput?.name}
                        defaultValue={'Bitcoin'}
                        id="outlined-basic"
                        label="انتخاب ارز"
                        variant="outlined"
                        onClick={() => setDialogOpen(true)}
                    />
                </Grid>

            </Grid>
            <Grid>
          
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} >
                <Grid bgcolor={'white'} sx={{p:3}}>
                    <Grid>انتخاب ارز</Grid>
                    <Grid >
                        <input type='search' onChange={handleChange}></input>
                        {coins.filter(coin => coin?.name?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase())).map((coin) => (
                            <Grid container key={coin.id} onClick={() => handleCoin(coin.id)} sx={{ cursor: 'pointer' }}>
                                <Grid item xs={6}><img src={coin.image} width='50px' /> </Grid>
                                <Grid item xs={6}>{coin?.name}</Grid>
                            </Grid>
                        ))}
                    </Grid>
                    </Grid>
                </Dialog>
        </Grid>
    )
}
export default BuyCurrency
