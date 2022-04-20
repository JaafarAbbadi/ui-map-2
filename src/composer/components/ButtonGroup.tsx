import { Add, Create, Menu, ViewArray } from '@mui/icons-material';
import {Button as MuiButton, } from '@mui/material'
import React from 'react'

interface buttonProps {
    variant?: 'text'|'contained'|'outlined';
    disabled?: boolean;
    child: () => string|React.ReactNode ;
    endIcon?: () => React.ReactNode;
    startIcon?: () => React.ReactNode;
}

interface groupProps {
    buttons: {}[];
    disabled: boolean, text: string, endIcon: () => React.ReactNode;
}
export function Button({variant, disabled, child, endIcon, startIcon}: buttonProps){
    return <MuiButton variant={variant} endIcon={endIcon && endIcon()} startIcon={startIcon && startIcon()} disabled={disabled}>{child()}</MuiButton>
}





export const menuButton = () => Button({variant: 'contained', 'child': () => <Menu/>});
export const addButton = () => Button({variant: 'contained', 'child': () => <Add/>});
export const createButton = () => Button({variant: 'contained', 'child': () => <Create/>});
export const readButton = () => Button({variant: 'contained', 'child': () => <ViewArray/>});


