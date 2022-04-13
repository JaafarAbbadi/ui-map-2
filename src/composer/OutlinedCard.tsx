import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function OutlinedCard(props: any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">    
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
          {props.subtitle}
        </Typography>
        <Typography variant="h5" color="primary">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="secondary">
          {props.info}
        </Typography>
        <Typography variant="body2">
        {props.children}
        </Typography>
      </CardContent>
      <CardActions>
        {props.actions}
      </CardActions>
    </Card>
    </Box>
  );
}