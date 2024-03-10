// sandwiches

function sandwiches(...items:string[]) {
    console.log("making the sandwich with the following items:");
    
    for (let item of items) {
        console.log(" " + item);
    }
}

sandwiches("meet sandwich", "wegetable sandwich", "cheese sandwich");
sandwiches("fruit sandwich", "egg sandwich");
sandwiches("hot sandwich");