// 14 exercise guest list for dinner

let guestList: string[] = ["imran khan", "asif ali zardari", "nawaz shareef"];
let message: string = "janab me aj app ko rat ke khane par ane ki dawat deta hon";

//invitetion for all guest
guestList.forEach(guestList => {
    console.log(guestList + " " + message);
});

// 15 exercise changing guest list
//not coming guest
let absent: string = "imran khan";
console.log(`${absent} is not coming to the dinner`);

// new guest 
guestList[0] = "sir zia khan";

//invitetion for all guest
guestList.forEach(guestList => {
    console.log(guestList + " " + message);
});


