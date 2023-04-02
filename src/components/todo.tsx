import React from "react";

interface TodoProps{
    title:string,
    children:React.ReactNode
}

export const Todo= ({title,children}:TodoProps) =>{
    return (
        <div>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
    );
}