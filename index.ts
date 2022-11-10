console.log("hello world");

//explicit types
let firstnumber:number=50;


//Tuple
type stringAndNumber=[string,number];
let x:stringAndNumber=["hello",10];

//enums

enum continents {
    North_america,
    South_america,
    Africa,
    Europe,
    Antartica,
    Australia
} ;

var region= continents.Africa; //2

//interfaces
interface User{
    name:string;
    id:number;
};

const user:User={
    name:'aditya',
    id:0,
}

//composing types ->union