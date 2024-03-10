// hello admin

let userName: string[] = ["admin", "ahmed", "nisar", "khan", "aqib"];
userName.forEach(userName => {
    if (userName == "admin") {
        console.log("hello admin, would you like to see a status report ?")
    }
    else {
        console.log(`hello ${userName} thank you for logging in again.`)
    }
});