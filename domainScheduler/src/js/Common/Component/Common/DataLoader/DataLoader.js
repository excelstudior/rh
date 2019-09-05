import React from 'react';
const DataLoader = ({stylingId,show,text,handleOnClick}) =>{
    return (
        show ? <div id={stylingId} className='dataLoader' onClick={handleOnClick}>{text}</div> : ''

    )
}
export default DataLoader;