let personagem = `Grognak the Destroyer`;
let xp = 99999;

if (xp <= 1000){
    console.log(`O personagem ${personagem} e FERRO. Melhore.`);
} else if (xp >= 1001 && xp <= 2000){
    console.log(`O personagem ${personagem} e BRONZE.`);
} else if (xp >= 2001 && xp <= 5000){
    console.log(`O personagem ${personagem} e PRATA.`);
} else if (xp >= 5001 && xp <= 7000){
    console.log(`O personagem ${personagem} e OURO.`);
} else if (xp >= 7001 && xp <= 8000){
    console.log(`O personagem ${personagem} e PLATINA.`);
} else if (xp >= 8001 && xp <= 9000){
    console.log(`O personagem ${personagem} e ASCENDENTE.`);
} else if (xp >= 9001 && xp <= 10000){
    console.log(`O personagem ${personagem} e IMORTAL.`);
} else if (xp >= 10001){
    console.log(`O personagem ${personagem} e RADIANTE.`);
};


/* Ou também:

let personagem = `Grognak the Destroyer`;
let xp = 99999;

if (xp <= 1000){
    console.log(`O personagem ` + personagem +  ` e FERRO. Melhore.`);
} else if (xp >= 1001 && xp <= 2000){
    console.log(`O personagem ` + personagem +  ` e BRONZE.`);
} else if (xp >= 2001 && xp <= 5000){
    console.log(`O personagem ` + personagem +  ` e PRATA.`);
} else if (xp >= 5001 && xp <= 7000){
    console.log(`O personagem ` + personagem +  ` e OURO.`);
} else if (xp >= 7001 && xp <= 8000){
    console.log(`O personagem ` + personagem +  ` e PLATINA.`);
} else if (xp >= 8001 && xp <= 9000){
    console.log(`O personagem ` + personagem +  ` e ASCENDENTE.`);
} else if (xp >= 9001 && xp <= 10000){
    console.log(`O personagem ` + personagem +  ` e IMORTAL.`);
} else if (xp >= 10001){
    console.log(`O personagem ` + personagem +  ` e RADIANTE.`);
}

*/