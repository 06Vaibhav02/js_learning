function fetchUserData() {
    //object created from Promise() constructor
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false
            if (success) {
                resolve({ name: "Vaibhav", age: 26 });  //sent to try
            } else {
                reject(`There was some error fetching data!`);      //sent to catch
            }
        }, 6000);
    })
}

// similar to .then().catch()
// async await goes toegther always
async function getUserData() {
    try {
        console.log(`Fetching data please wait...`)
        let userData = await fetchUserData()     //getting data from fetchUserData() after 6s
        //here function will wait to perform some backen operations, async behavior  
        console.log(`User data fetched successfully`)
        // console.log(`Your data is = ${userData}`) // Output was [object Object]
        console.log("Your data is = ", userData)
    } catch (error) {
        console.log(error)
    }
}
getUserData()

//await holds the thread(compiler) completely from further exection hence in try the next two console logs didnt get executed
//unlike as learnt in explore1.js

