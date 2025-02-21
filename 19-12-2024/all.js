//   const axios = require('axios');

//   const url ='https://dummyjson.com/posts';

//   axios.get(url)
//   .then(reseponse =>{
//     console.log(`Data:`,reseponse.data)
//   })
//   .catch(error =>{
//     console.error(`error:`,error);
//   });
  

const data=new Promise((resolve,reject)=>{
    let x=true;
    if(x){
        resolve("ok");

    }else{
        reject("error")
    }
} ) ;
data
.then(value =>{
    console.log(value);
})
.catch(error => {
    console.error(error);
});

