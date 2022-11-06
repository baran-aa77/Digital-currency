import React from 'react'
import axios from 'axios'
export const api=axios.create({
    baseURL:"https://api.coingecko.com/"
})
export const getcurrency=()=>{
    return api('api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(data=>data.data)
}