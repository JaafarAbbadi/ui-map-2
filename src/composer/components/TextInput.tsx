import { AccountCircle } from '@mui/icons-material';
import {FormControl, Input, InputAdornment, InputLabel, TextField} from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
    title: string;
    icon?: () => React.ReactNode;
    onChange?: (text?: string) => any;
    cycle?: React.EffectCallback;
    
}


export function TextInput ({title, icon, onChange, cycle }: Props) {
    const [text, writeText] = useState<string>()
    useEffect(cycle? cycle : () => {},[]);
    useEffect(() => {
        const y = onChange? onChange(text): '';
    },[text]);

    const temp = <TextField  label="Standard" onChange={e => writeText(e.target.value)}  variant="standard" />;
    return  <FormControl variant="standard">
        
        <InputLabel htmlFor="input-with-icon-adornment">{title}</InputLabel>
        <Input 
            id="input-with-icon-adornment" 
            startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
            onChange={e => writeText(e.target.value)}
        />
    
    </FormControl>
    
    
    
}