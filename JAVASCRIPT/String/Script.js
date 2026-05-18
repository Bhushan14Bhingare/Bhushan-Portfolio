let arr = [7,9,0,-2]
console.log(arr.slice(0,3));
console.log(arr.slice(arr.length-3));


let str = prompt("Enter a string")

if(str.length == 0){
    console.log("String is an empty")
}else{
    console.log("String is not empty");
}

let string = prompt("Enter an any string")
if(string == string[3].toLowerCase()){
    console.log("The character of a string is a lower case");    
}
else{
    console.log("The character of a string is not a lower case"); 
}