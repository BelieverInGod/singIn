import React from 'react';
import decoration from '../resources/sing.png';
import decorationLogo from '../resources/logo.png';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function SignIn() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    function logIn () {
        window.location.assign('/')
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };
    
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    
    return (
        <div>
            
   
            <img className="decoration" src={decoration} alt="sing"/>;
            <img className="decorationLogo" src={decorationLogo} alt="logo"/>;
            <h1 className='login'>Login</h1>;
            <div>
            <FormControl sx={{ m:1, width: '45ch' }} variant="standart" className="email">
            <TextField
                
                id="filled-search"
                label="Email"
                type="text"
                variant="filled"
                />
                </FormControl>
            </div>
            <FormControl sx={{ m:3, width: '45ch' }} variant="filled" className="password">
          <InputLabel  htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            <button onClick={logIn} className="logBut">LOGIN</button>;
        </div>
    )
}

export default SignIn;