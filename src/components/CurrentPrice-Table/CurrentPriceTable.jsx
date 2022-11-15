import React from 'react'
import { getcurrency } from "../../api/api";
import { useState, useEffect } from "react";
import { Grid, Typography, TextField } from '@mui/material';
import './Currentprice.scss'
const CurrentPriceTable = () => {
    const toman = 35000;
    const [coins, setcoins] = useState([]);
    const [search, setsearch] = useState('');
    const handleGetData = async () => {
        const data = await getcurrency()
        setcoins(data)
    }
    useEffect(() => {
        handleGetData()
    }, [])
    const handleChange = (e) => {
        setsearch(e.target.value)
    }
    const filterCoins = coins.filter(coin => coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    return (
        <Grid sx={{ p: '50px', textAlign: 'center' }}>
            <Typography variant='h5' sx={{ marginBottom: '20px' }}>قیمت لحظه‌ای</Typography>
            <Grid >
                <TextField type='text' placeholder='جستجو' className="Coin-input" onChange={handleChange} sx={{ marginBottom: '20px' }} />
            </Grid>
            <table>
                <thead>
                    <th scope='col'>تغییرات</th>
                    <th scope='col'>قیمت فروش</th>
                    <th scope='col'>قیمت خرید</th>
                    <th scope='col'>ارز دیجیتال</th>
                </thead>
                <tbody>
                    {filterCoins.map((coin) => {
                        return (
                            <tr key={coin.id} className='TR' style={{ borderBottom: '2px solid gray' }}>
                                <td >{coin.ath_change_percentage}</td>
                                <td>{coin.current_price * toman}</td>
                                <td >{coin.high_24h * toman}</td>
                                <td>{coin.name}<img src={coin.image} width='50px' /></td>

                            </tr>

                        );
                    })}
                </tbody>
            </table>
        </Grid>
    )
}
export default CurrentPriceTable