import {HTTP} from '../utils/http';
class IndexModel extends HTTP {
   getNewsList(field,showCount){
       return new Promise ((resolve,reject)=>{
        this.ajax({
            url:'Juhe/getNewsList',
            type:'POST',
            dataType:'JSON',
            data:{
                field:field
            },
            success(data){
             const lists=data.result.data,
                   len=lists.length;
             let pageData=[],
                 index=0;
             while(index<len){
                 pageData.push(lists.slice(index,index+=showCount));
             }
             resolve(pageData)
            }
        })
    })
   }
   
   
}
 
export{IndexModel};