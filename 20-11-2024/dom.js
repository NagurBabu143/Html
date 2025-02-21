// window.console.log("hello fromm js file")
// alert("dom started")
//window object - gobal object
 
 
//wimdow-doucmnt- add script -
 
 
//styles
//create elemet
// const headerName = document.getElementById('header')
// console.log(headerName)


alert("welcome nagur")
 document.body.style.backgroundColor="red"
 const headerName = document.getElementById('header')
 headerName.textContent="list of ALL nagurs and Shaiks"
console.log(headerName)
 
const container = document.getElementsByClassName('listitem')
console.log(container)
const tagNme = document.querySelector('li')
tagNme.innerText="babu A"
tagNme.style.color="white"
tagNme.style.fontSize= "20px"
console.log(tagNme)
const tagNme1 = document.querySelector('ul')
tagNme1.style.color="blue"
tagNme1.style.backgroundColor="white"
console.log(tagNme1)

const tagname4= document.querySelector('.listitem')
tagname4.style.backgroundColor="blue"
tagname4.style.color="black"
console.log(tagname4)

const tagname1 = document.querySelector('#unorderlist')
tagname1.style.backgroundColor="yellow"
console.log(tagname1)


const table=document.getElementById('table')

console.log(table)


const table1=document.querySelector('.table')
table1.style.backgroundColor="white"
table1.style.border="5px"
table1.style.margin="20px"
table1.style.padding="10px"
console.log(table1)


const trow=document.querySelector('.row')
trow.style.backgroundColor="yellow"
console.log(trow)





const tagNme3 = document.getElementsByTagName('li')

console.log(tagNme3)







const tag=document.getElementById('p')
tag.style.color="black"
tag.style.backgroundColor="yellow"
console.log(tag)






const dom=document.getElementById('heading')
dom.textContent = 'welcome babu'

console.log(dom)
