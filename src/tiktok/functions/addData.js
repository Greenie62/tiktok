const { createClient } = require("@astrajs/collections");
const collection = "posts"


// console.log("hello from addData file!")
// exports.handler = async function(event,context,callback){
//     const astraClient = await createClient({
//         astraDatabaseId:'f5d14265-8fcc-4f58-af18-27bccbf48eca',
//         astraDatabaseRegion: 'us-east1',
//         username: 'brat',
//         password:  'booba123',
// });


// const posts = astraClient
//     .namespace('tiktok')
//     .collection(collection)

// }

const CLUSTER_ID = 'f5d14265-8fcc-4f58-af18-27bccbf48eca';
const USERNAME = 'brat';
const DATA_REGION = 'us-east1';
const PASSWORD = 'booba123';



fetch(`https://${CLUSTER_ID}-${DATA_REGION}.apps.astra.datastax.com/api/rest/v1/auth`,{
    method:"POST",
    headers:{
         'Content-Type': 'application/json' 
    },
    body:JSON.stringify({username:USERNAME,password:PASSWORD})

})
.then(res=>res.json())
.then(res=>{
    console.log(res)
    let { token } = res;

    
  fetch(`https://${CLUSTER_ID}-${DATA_REGION}.apps.astra.datastax.com/api/rest/v2/schemas/keyspaces`,{
        headers:{
             accept: 'application/json',
            'x-cassandra-token':token
        }
})
.then(res=>res.json())
.then(res=>{
    console.log(res)
})

})


