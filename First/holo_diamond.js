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

// lower

for (let i = 0; i < n-1; i++) {
    let row = "";
    for (let j = 0; j < i+1; j++) {
       row+=" "; 
    }
    row+="*"; 
    if (i!=n-2) {
        for (let j = 2*n-i-5; j > i; j--) {
            row+=" "
        }
        row+="*"
    }
    console.log(row);
    
}
