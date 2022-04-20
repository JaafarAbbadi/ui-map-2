import React from "react";

interface props {
    header: () => React.ReactNode;
}
export function Application ({header}: props) {
    
    return <div>{header()}</div>
}