import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import AccountCircle from '@mui/icons-material/AccountCircle';

import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
    FormGroup
 } from "react-reactive-form";
 const TextInput = (data: {handler:any, touched:any, hasError:any, meta:any  }) => (

    
    
    <div>

    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
    </Box>
    <TextField
        style={{margin: 12}}
        error = {data.touched && data.hasError("required") && `${data.meta.label} is required`}
        id="outlined-error-helper-text"
        label={`Enter ${data.meta.label}`}
        defaultValue="Hello World"
        helperText={data.hasError("required")? 'required'  :  data.meta.label}
        multiline
        {...data.handler()}
    />

    </div>  
)


const Login = () => {
    const loginForm: FormGroup = FormBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        rememberMe: false
    });
    const handleReset=() => {
        loginForm.reset();
    }
    const handleSubmit=(e: any) => {
        e.preventDefault();
        console.log("Form values", loginForm.value);
    }
    loginForm.valueChanges.subscribe((va: any)=> {console.log(va)});
    
        return (
              <FieldGroup
                control={loginForm}
                render={({ get, invalid }) => (
                  <form onSubmit={handleSubmit}>
 
                    <FieldControl
                      name="username"
                      render={TextInput}
                      meta={{ label: "Username" }}
                    />
 
                    <FieldControl
                      name="password"
                      
                      render={TextInput}
                      meta={{ label: "Password" }}
                    />
 
                    <FieldControl
                      name="rememberMe"
                      render={({handler}) => (
                        <div>
                          <input {...handler("checkbox")}/>
                        </div>
                      )}
                    />
                    <button
                      type="button"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      disabled={invalid}
                    >
                      Submit
                    </button>
                  </form>
                )}
              />
        );
    
};

export default Login;