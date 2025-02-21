// document.body.style.backgroundColor = "red";
// document.body.style.color = "white";
// document.body.style.textAlign = "center";
// // setTimeout: Executes once after the specified delay.
// // setTimeout runs the function only once after the specified time.

// setTimeout(() => {
//   console.log("This runs after 2 seconds!");
// }, 2000);

// // setTimeout(() => {
// //     document.body.style.backgroundColor = "lightblue";
// //     console.log("Background color changed after 3 seconds!");
// // }, 3000); // 3 seconds delay

// setTimeout(() => {
//   document.getElementById("message").textContent =
//     "This message has changed after 4 seconds!";
// }, 4000);





// // setInterval: Executes repeatedly at regular intervals until cleared.
// // setInterval runs the function repeatedly at the specified interval.

// setInterval(() => {
//   console.log("This runs every 1 second!");
// }, 1000);

// // setInterval(() => {
// //     document.body.style.backgroundColor = "red";
// //     console.log("Background color changed after 2 seconds!");
// // }, 2000);

// let count = 0;

// const intervalId = setInterval(() => {
//     count++;
//     document.getElementById("counter").innerText = count;
// }, 1000);





// let number = 1;

// function prinnt(){

// }



let nu=1;
 const A= setTimeout(function prinnt(){
    console.log(nu);
    nu++;
    if(nu <=10){
        setTimeout(prinnt,1000);
    }
 },1000);