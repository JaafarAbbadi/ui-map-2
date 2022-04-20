import { Box, SxProps, Theme } from "@mui/material";

interface Props<T> {
    data: T[];
    renderItem: (item?: T) => React.ReactNode;
    containerSx?: SxProps<Theme> | undefined;
    container?: React.ElementType<any> & (React.ElementType<any> | undefined);
    elementsSx?: SxProps<Theme> | undefined;
    element?: React.ElementType<any> & (React.ElementType<any> | undefined);
}
export function Basic<T>({containerSx, elementsSx, data, renderItem, container, element}: Props<T>){
    return <Box  component={container} sx={{...containerSx}}>
        {data?.map((item,i) => 
            <Box component={element} sx={{...elementsSx}} key={i}>{renderItem(item)}</Box>
        )}
    </Box>
}
