let n = 4;
// upper
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n-1; j > i; j--) {
        row += " ";
    }
    row += "*";
    if(i!=0){
        for (let j = 0; j <2* i-1; j++) {
                    
            row += " ";
        }
        row += "*";

    }
    console.log(row); // Print the row after constructing it
}
