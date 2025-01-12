// For multiple promises 

function getPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Post Data Fetched`)
        }, 3000);
    })
}
function getCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Comment Data Fetched`)
        }, 6000);
    })
}

async function getBlogData(){

    try {
        console.log("fetching blogdata....")
        /*Method 1
        const postData = await getPostData()
        const commentData = await getCommentData()
        console.log(postData)
        console.log(commentData)
        console.log("blogdata fetched successfully")
        */
       
       //Method2
       const [postData,commentData] = await Promise.all([getPostData(),getCommentData()])
       console.log(postData)
       console.log(commentData)
       console.log("blogdata fetched successfully")
       


    } catch (error) {
        console.log("Error fetching blogdata!",error)
    }
}
getBlogData()
