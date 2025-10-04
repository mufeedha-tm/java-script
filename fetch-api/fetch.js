//api-application programming interface

async function getUsers() {
    try{
    
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();

        console.log("First 5 users");
        users.slice(0,5).forEach(usr => {
            console.log(`# $ {usr.id}: ${usr.username}`);
            
        })
            
        

        
        
        

    }catch (error) {
        console.error("Error fetching users:",error);
        
    }
}
getUsers();