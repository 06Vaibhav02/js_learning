// PROMISES - sending data after some time as either resolved - success or reject - failure
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
//three states in promises -- pending resolved reject

// let response = fetchData()
// // console.log(response)
// console.log(typeof response)
//     ////here typeof == object == becuase value returned is object - [new Promise() -- instance of Promise]  



//THEN CHAINING
fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase(); //sent to next .then()
    })
    .then((lowercase) => {
        console.log(`${lowercase}`)
    })
    .catch((error) => {
        console.log(error);
    })