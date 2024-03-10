// 14 exersise guest list for dinner

let guestList: string[] = ["imran khan", "asif ali zardari", "nawaz shareef"];
let message: string = "respected sir, i invite you to dinner tonight.";
 
//invitetion for all guest
guestList.forEach(guestList => {
    console.log(guestList +" "+ message);
});