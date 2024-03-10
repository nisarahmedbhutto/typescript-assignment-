// no users

let userName: string[] = [];
if (userName.length === 0) {
    console.log('we need to find some users!');
}
else {
    userName.forEach(userName => {
        if (userName == "admin") {
            console.log("hello admin, would you like to see a status report ?")
        }
        else {
            console.log(`hello ${userName} thank you for logging in again.`)
        }
    });
}