import { AppBar, Box, Toolbar} from '@mui/material';
import * as React from 'react';
interface props {
  slots: Array<() => React.ReactNode>
}
export function Header({slots}: props): React.ReactNode{
    const sx = {display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'space-between'}; 
    return <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{...sx}}>
                {slots.map((slot,i) => <div key={i}>{slot()}</div>)}
        </Toolbar>
      </AppBar>
    </Box>
}