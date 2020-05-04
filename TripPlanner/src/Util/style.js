export const getRootElementSize =()=>{
    return parseFloat(
        getComputedStyle(document.documentElement).fontSize
    )
}
export const convertRemToPx=( remValue ) =>{
    return remValue * getRootElementSize()
}