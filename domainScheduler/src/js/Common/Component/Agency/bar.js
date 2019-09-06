import React from 'react';
const Bar = ({legend,parentClass,barClass,amount}) =>{
    let barlength=amount < 100 ? (amount*0.8)+'%' : '80%'
    return(
        <div className={parentClass}>
                        <span>{legend}</span>
                        <span className={barClass} style={{"width":barlength}}></span>
                        <span>{amount}</span>
        </div>
    )
}
export default Bar