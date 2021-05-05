//1
const [fruit,vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza" ];
console.log(fruit,vegetable,food);

//2

const halloweenCostumes = {
 karin:'minnie mouse',
 michael:'king'
}
const {karin:lea, michael} = halloweenCostumes;
console.log(lea, michael);



// const { amit, yarden } = { amit: "policeman", yarden: "princess" };

// console.log(amit, yarden);

//3
 
const music= {
    band:'R.E.M',
    musician: "i don't remamber"
}
const print = ({band, musician}) => {
console.log(band,musician);
}
print(music);