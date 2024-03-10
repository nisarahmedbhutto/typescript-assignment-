// cheking users names

// current users array
let currentUsers: string[] = ["mustafa", "nisar", "ahmed", "zulfiqar", "ali"];

// new users array
let newUsers: string[] = ["meer", "hassan", "zameer", "mustafa", "nisar"];

newUsers.forEach(newUsers => {
    if (currentUsers.includes(`${newUsers}`)) {
        console.log(`the username ${newUsers} is already taken please enter a new username.`)
    } else {
        console.log(`the username ${newUsers} is available.`);
    }
});