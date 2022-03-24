import React from 'react'

export default function Footer() {
    let d=new Date();
    return (
        
        <div className="footer">
           <p>Created by IT-park - {d.getFullYear()} </p> 
        </div>
    )
}
