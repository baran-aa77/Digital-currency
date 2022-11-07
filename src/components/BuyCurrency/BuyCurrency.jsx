import React, {useEffect, useState} from 'react'
import { Grid,TextField,Dialog,DialogTitle,DialogContent} from '@mui/material';
import Biglogo from "../../assets/image/biglogo.webp";
import {getcurrency} from "../../api/api";
const BuyCurrency=()=>{
    const toman=35000;
    const[coins,setcoins]=useState([])
    const[number,setnumber]=useState(1)
    const handleGetData = async () => {
        const data = await getcurrency()
        setcoins(data)
        console.log(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])

    const[search,setsearch]=useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const[Coinid,setCoinid]=useState('bitcoin')
    const handleChange=(e)=>{
        setsearch(e.target.value)
    }
    const handleCoin=(id)=>{
        setCoinid(id)
        setDialogOpen(false)
    }
    const handleChangeNumber=(e)=>{
        setnumber(e.target.value)
    }
    
    const coinforinput=coins.filter(coinMan=>coinMan.id===Coinid)
    const totalprice=coinforinput.current_price*toman*number
    const filterCoins=coins.filter(coin=>coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    return(
        <Grid container xs={12} sx={{marginTop:'60px',textAlign:'center'}}>

            <Grid item xs={12}>
                <img src={Biglogo} width='300px'/>
            </Grid>
            <Grid item container xs={12} sx={{justifyContent:'center'}}>
                <Grid item xs={2} >
                    <TextField sx={{width:'98%'}} label="تومان" value={totalprice} defaultValue={'789779'}></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField defaultValue={''}
                               value={number}
                        sx={{width:'98%'}}
                        label="واحد"
                               onChange={handleChangeNumber}
                    />
                </Grid>
                <Grid item xs={2}>

                    <TextField
                        sx={{cursor:'pointer'}}
                        value={coinforinput.name}
                        defaultValue={'Bitcoin'}
                        id="outlined-basic"
                        label="انتخاب ارز"
                        variant="outlined"
                        onClick={() => setDialogOpen(true)}
                    />
                </Grid>

            </Grid>



            <Grid>

                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} sx={{zIndex:1}}>
                    <DialogTitle>انتخاب ارز</DialogTitle>
                    <DialogContent dividers>
                        <input type='search' onChange={handleChange}></input>
                        {filterCoins.map((coin) => (
                            <Grid container key={coin.id} onClick={()=>handleCoin(coin.id)} sx={{cursor:'pointer'}}>
                                <Grid item xs={6}><img src={coin.image} width='50px'/> </Grid>
                                <Grid item xs={6}>{coin.name}</Grid>
                            </Grid>
                        ))}
                    </DialogContent>
                </Dialog>
            </Grid>
        </Grid>
    )
}
export default BuyCurrency
