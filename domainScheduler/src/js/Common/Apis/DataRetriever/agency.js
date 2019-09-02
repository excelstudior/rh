import request from './request';
import * as Endpoint from '../Domain/Endpoint/domain';
import querystring from 'querystring';

export const getAllAgencies = (criteria='name:"Ray White"', pageNumber = 1, pageSize = 100,data=[]) =>{
    let nextPageNumber=pageNumber;
    let agencies=data;
    getAgencies( criteria, nextPageNumber, pageSize )
    .then ((res)=>{
        if (res.data!=undefined && res.data.length!=0){
            console.log(res.data)
            let data=[...agencies,res.data];
            nextPageNumber++;
            getAllAgencies(criteria,nextPageNumber,pageSize,data)
        }
        
    })
    return agencies
}

export const getAgencies = (criteria='name:"Ray White"', pageNumber = 1, pageSize = 20) =>{
    //****** */ handle error 
    //if (criteria===undefined) { alert ('Criteria missing'); return}
    //get rid of criteria default value
    let baseURL=Endpoint.DOMAIN_ROOT_API+Endpoint.DOMAIN_API_VERSION;
    let url=Endpoint.DOMAIN_AGENCIES;
    let method='get';
    let params={ q:criteria,
                pageNumber,
                pageSize };
    url=url+'?'+querystring.stringify(params);
    let config={ 
        url
    }

    return request(baseURL,method,config)
}