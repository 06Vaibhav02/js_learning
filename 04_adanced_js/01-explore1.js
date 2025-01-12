// syncrohonous code -- each line executed in order -- regular js
// asyncrohonus code -- some code part executed after some time -- having pause 


function sayHello(){
    console.log("hello I am printed after 5 seconds")
}

setTimeout(() => {
    sayHello()
}, 5000);       
    //async nature -- inspite of being before for() it is executed later after 5s        

for (let index = 0; index < 10; index++) {
    console.log(index);
}