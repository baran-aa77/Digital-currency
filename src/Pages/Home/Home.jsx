import React from 'react'
import { Grid,Button} from '@mui/material';
import logo from '../../assets/image/logo.svg'
import BuyCurrency from "../../components/BuyCurrency/BuyCurrency";
import {Link} from "react-router-dom";

const Home=()=>{
    return(
        <Grid>
        <Grid container sx={{justifyContent:'space-between'}}>
            <Grid item xs={6}>
                    <Button variant='Mainbtn'>منو</Button>
                    <Button variant='Mainbtn'>خانه</Button>
                    <Link to={'Current-Price'}><Button variant='Mainbtn'>قیمت لحظه ای</Button></Link>
                    <Button variant='Mainbtn'>کارمزد ها</Button>
                    <Button variant='Mainbtn'>پورتفوی</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant='secondbtn'>ورود / ثبت نام</Button>
                <Button><img src={logo} alt='logo' width='150px'/></Button>
            </Grid>
            <BuyCurrency/>
        </Grid>
           
        </Grid>
    )
}
export default Home