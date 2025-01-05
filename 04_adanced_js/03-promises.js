// PROMISES

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let success = true;
            let success = false;
            if (success) {
                resolve("Data fetched successfully"); //sent to then
            } else {
                reject("Error fetching data"); //sent to catch
            }
        }, 3000);
    })
}


// let response = fetchData()
// // console.log(response)
// console.log(typeof response)
//     ////here typeof == object == becuase value returned is object - [new Promise() -- instance of Promise]  

 

//THEN CHAINING
    // fetchData()
    //     .then((data) => {
    //         console.log(data);
    //         return data.toLowerCase(); //sent to next .then()
    //     })
    //     .then( (lowercase) => {
    //         console.log(`${lowercase}`)
    //     } )
    //     .catch(() => {
    //         console.log(error);
    //     })