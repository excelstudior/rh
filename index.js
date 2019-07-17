var container=document.querySelector(".container");
var loading=document.querySelector(".loading")
var isFetching;
var page=1;
var noData=document.querySelector('.no-data')
var hasMoreData=true;
/* create movie obj , creaet li add to container*/ 
function createLi(movie){
    var li=document.createElement('li')
    li.innerHTML=`
    <a href="" class="cover">
                <img src="${movie.cover}" alt="">
            </a>
            
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
    `
    container.appendChild(li)
}
var m={
    title:'Title',
    cover:'small_png.jpg',
    description:'dddd'
}

var movies=[
    {
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },
    {
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },
    {
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },
    {
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },{
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    },
    {
        title:'Title',
        cover:'small_png.jpg',
        description:'dddd'
    }
]
// createLi(m)

// createLis(movies)
function createLis(movies){
    for(var i=0;i<movies.length-1;i++){
        createLi(movies[i])
    }
}

function fetchData(callback){
  setTimeout(function(){
      page++;
      if(page==3){
          callback([]);
          return;
      }
        var movieData=movies
        callback(movieData)
  },5000)   
}

function getMoreMovies(){

    if(!hasMoreData||isFetching){
return; 
    }
    isFetching=true;
    //loading
    loading.style.display='block'
    fetchData(function(movies){
        createLis(movies);
        //not loading
        loading.style.display='none';
        if(movies.length===0){
            hasMoreData=false;
            //show 
            noData.style.display='block';
        }
        isFetching=false;
    })

}

// fetchData(function(movies){
//     console.log(movies);
//     fetchData(function(movies){
//         console.log(movies);
//         fetchData(function(movies){
//         console.log(movies);
//         fetchData(function(movies){
//         console.log(movies);
//     })
//     })
//     })
    
// })

getMoreMovies()

window.onscroll=function(){
    console.log('SCroll')
    var bottom=document.documentElement.scrollHeight
    -document.documentElement.scrollTop
    -document.documentElement.clientHeight
    if(bottom<=60){
        getMoreMovies()
    }
}