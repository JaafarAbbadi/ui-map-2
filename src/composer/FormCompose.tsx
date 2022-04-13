import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from '@mui/icons-material/AccountCircle';

import {  FieldControl, FormControl, FieldGroup} from "react-reactive-form";
import { useState } from "react";


const pascaleSeperation = (str: string) => {
  let pascal = str.charAt(0).toUpperCase() + str.slice(1);
  let indecies = pascal.match(/[A-Z]/g)?.map(l => pascal.indexOf(l));
  
  return pascal.replace(/([A-Z])/g, ' $1').trim();
}

const FormCompose = (props: any) => {
    const header = () => <h1>hello world</h1>
    const handleReset = () => props.loginForm.reset();
    const handleSubmit=(e: any) => {
        e.preventDefault();
        console.log("Form values", props.loginForm.value);
    }

    const nestedFlattener = (obj: any): string => {
      return Object.entries<string>(obj).map(([key, val]) => `${pascaleSeperation(key)} ${pascaleSeperation(val.toString())}`).reduce((prev,curr) => prev= pascaleSeperation(prev)+ ', ' + pascaleSeperation(curr), '')  
    }
    const [errorsList, setErrorList] = useState({} as any);
    const TextInput = (data: {handler:any, touched:any, hasError:any, meta:any  }) => {
      const errorLabel = errorsList[data.meta.label]? Object.entries<any>(errorsList[data.meta.label]).map(([err,params]) => `${pascaleSeperation(err)}. ${nestedFlattener(params)}`)[0] : '';
      
      return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
              InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                          <AccountCircle />
                      </InputAdornment>
                  ),
              }}
              color="primary"
              style={{margin: 12}}
              error = {errorLabel.length}
              id="outlined-error-helper-text"
              label={data.meta.label}
              defaultValue="Hello World"
              helperText={errorLabel}
              variant="standard"
              multiline
              {...data.handler()}
          />
        </Box>
      
    )
     }
    Object.entries<FormControl>(props.loginForm.controls).forEach(([controlName,control]) => {
      control.valueChanges.subscribe((v: any) => {
        errorsList[controlName] = control.errors;
        setErrorList(errorsList);
      })
    })

        return (
              <FieldGroup control={props.loginForm} render={({ get, invalid }) => (
                
                <form onSubmit={handleSubmit}>
                  {
                    Object.entries<FormControl>(props.loginForm.controls).map(([controlName,control]) => 
                      <FieldControl key={controlName} name={controlName} render={TextInput} meta={{label: controlName}}/>
                      )
                    
                  }
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

export default FormCompose;