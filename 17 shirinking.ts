//14 guest list for dinner

let guestList: string[] = ["imran khan", "asif ali zardari", "nawaz shareef"];
let message: string = "respected sir, i invite you to dinner tonight.";

//invitetion for all guest
guestList.forEach(guestList => {
    console.log(guestList + " " + message);
});

// 15 exercise changing guest list
//not coming guest
let absent: string = "imran khan";
console.log(`${absent} is not coming to the dinner.`);

// new guest 
guestList[0] = "sir zia khan";

//invitetion for all guest
guestList.forEach(guestList => {
    console.log(guestList + " " + message);
});

// 16 exercise more guest 
// bigger table 
console.log("i have received a large dinner table. ");

// new guest adding a array
guestList.unshift("kamran khan tessori");
guestList.splice(2, 0, "bilawal bhutto");
guestList.push("shahbaz sharif");

//invitetion for all guest
guestList.forEach(guestList => {
    console.log(guestList + " " + message);
});

// 17 exercise shirinking guest list
console.log(" i apologize, but i can only invite two people to dinner");

// message removing peoples and send message
guestList.pop();
console.log("i'm sorry i can't invite you to dinner");
guestList.pop();
console.log("i'm sorry i can't invite you to dinner");
guestList.pop();
console.log("i'm sorry i can't invite you to dinner");
guestList.pop();
console.log("i'm sorry i can't invite you to dinner");

// last two poeples invitetion message
guestList.forEach(guestList => {
    console.log(guestList + " " +"you are still invited to dinner");
});

// remove last two peoples and empty array
guestList.pop();
guestList.pop();
console.log(guestList);


