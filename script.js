//presentPet(undefined, `Bojangles`);
//function presentPet(firstName = "mr jinxy") {
// console.log(`my name is ${firstName}`);
//}

momsBeregner(200);

function momsBeregner(beloeb, moms = 25) {
  const total = beloeb * (1 + moms / 100);

  console.log(total);
}
