import {FormControl, Input, InputAdornment, InputLabel} from '@mui/material'
import { useEffect, useState } from 'react'
interface Props {
    title: string;
    icon?: () => React.ReactNode;
    onChange?: (text?: string) => any;
    init?: () => any;
    destroy?: () => any;
}
export function TextInput ({title, icon, onChange, init, destroy }: Props) {
    const [text, writeText] = useState<string>()
    useEffect(() => {if(init){init()} return () => {if(destroy){ destroy()}}}, []);
    useEffect(() => {if(onChange){onChange(text)}}, [text]);
    return  <FormControl color='secondary' variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">{title}</InputLabel>
        <Input 
            id="input-with-icon-adornment" 
            startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
            onChange={e => writeText(e.target.value)}
        />
    </FormControl>
}