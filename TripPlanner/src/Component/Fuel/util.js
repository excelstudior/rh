
export const buildFuelApiCommonHeaderObject = ( apikey, transactionid, requesttimestamp )=>{
    return {
        apikey,
        transactionid,
        requesttimestamp
    }
}

export const getValuesOfGivenProperty = (propertyName,obj)=>{
    let values=undefined;
    if (typeof(obj)!='object'){
        return values
    }
    if (obj.hasOwnProperty(propertyName)){
        return obj[propertyName]
    }
    return values
}

export function getUniqueValuesOfAnArray(array){

    let newArray=[];
    for(let i=0;i<array.length-1;i++){
        let item=array[i];
        if (newArray.indexOf(item)<0){
            newArray=[...newArray,item]
        }
    }
    return newArray;
}