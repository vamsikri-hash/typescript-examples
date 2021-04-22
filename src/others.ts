// type

type num = number;


//unions

type numorstring = number | string;

var temp: numorstring;

temp = 123;
temp = "sjdaj";


//interface

interface Person  {
    name: string;
    age: number;
}

var person: Person = {name:"rohit",age:22};


//literal types

type alignment = "Left" | "Right";

var align: alignment;
