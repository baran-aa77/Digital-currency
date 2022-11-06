import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components:{

        MuiButton:{
            variants:[
                {
                    props:{variant:'Mainbtn'},
                    style:{
                        padding:'20px',
                        color:'#908b8b',
                        textAlign:'Center',
                        height:'30px',
                        '&:hover':{
                            backgroundColor:'#f3f0f0'
                        }
                    }
                },
                {
                    props:{variant:'secondbtn'},
                    style:{
                        color:'#ffffff',
                        backgroundColor:'#4386f2',
                        '&:hover':{
                            backgroundColor:'#2f41bb'
                        }
                    }
                }
            ]
        }
    },
    palette: {
        background:'#EEE',
        primary:{
            main:'#50C2C9',
            light:'#94F6FC'
        },
    },
    typography: {
        fontfamily:'Poppins',
        h1:{
            fontWeight:700,
            fontSize:18,
            lineHeight:'27px',
            textAlign:'center'
        },
        h2:{
            fontWeight:400,
            fontSize:'13px',
            textAlign:'center'
        }

    },

})