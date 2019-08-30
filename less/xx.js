// Complete Test Data Object (credit: https://SWAPI.co)
    // Side note: Yes Star Wars 🤓 purists. It's a bit out of date. Talk to SWAPI about it.
    // Focus & follow instructions above. 🤖
 ch=   {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "homeworld": "Tatooine",
      "films": [
        "A New Hope",
        "The Empire Strikes Back",
        "Return of the Jedi",
        "Revenge of the Sith",
        "The Force Awakens"
      ],
      "species": [
        "Human"
      ],
      "vehicles": [
        {
          "name": "Snowspeeder",
          "model": "t-47 airspeeder",
          "manufacturer": "Incom corporation",
          "cost_in_credits": null,
          "length": "4.5",
          "max_atmosphering_speed": "650",
          "crew": 2,
          "passengers": 0,
          "cargo_capacity": "10"
        },
        {
          "name": "Imperial Speeder Bike",
          "model": "74-Z speeder bike",
          "manufacturer": "Aratech Repulsor Company",
          "cost_in_credits": "8000",
          "length": "3",
          "max_atmosphering_speed": "360",
          "crew": 1,
          "passengers": 1,
          "cargo_capacity": "4"
        }
      ],
      "starships": [
        {
          "name": "X-wing",
          "model": "T-65 X-wing",
          "manufacturer": "Incom Corporation",
          "cost_in_credits": 149999,
          "length": "12.5",
          "max_atmosphering_speed": "1050",
          "crew": 1,
          "passengers": 0,
          "cargo_capacity": "110",
          "consumables": "1 week",
          "hyperdrive_rating": "1.0",
          "MGLT": "100",
          "starship_class": "Starfighter"
        },
        {
          "name": "Imperial shuttle",
          "model": "Lambda-class T-4a shuttle",
          "manufacturer": "Sienar Fleet Systems",
          "cost_in_credits": 240000,
          "length": "20",
          "max_atmosphering_speed": "850",
          "crew": 6,
          "passengers": 20,
          "cargo_capacity": "80000",
          "consumables": "2 months",
          "hyperdrive_rating": "1.0",
          "MGLT": "50",
          "starship_class": "Armed government transport"
        }
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
    }
    //console.log(ch.name);
//     let b=[];
//     b=ch.films;
//     console.log(b);
//     `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
    
//     let a=parseInt((ch.vehicles[0].cost_in_credits)+ 33);
//     console.log(a);
//     console.log( parseInt(ch.vehicles[0].cost_in_credits) + ch.vehicles[1].cost_in_credits);
//     // um the number of crew and passenger spots for all starships defined on the
// //  * input character.
// //consol.log(ch.length);
// for(i=0;i<b.length;i++){

// }
// function getCargoCapacityTotal(character) {
//     // TODO: Add your code here.
//     let cargoa=ch.starships;
//     let veccl=ch.vehicles;
//     let totalcapacity=0;
//     for(let i=0;i<cargoa.length;i++){
//      totalcapacity=totalcapacity+ cargoa[i].cargo_capacity+veccl[i].cargo_capacity;
  
//     }
//     return totalcapacity;
//     console.log(cargoa);
//     console.log(parseInt(totalcapacity));
//   }
//   getCargoCapacityTotal(ch);
//   let filmarry=character.films;
//   if(filmNumber===1) {
//    filmarry[0];
//   }
//   else if(filmNumber===2){
//     return filmarry[1];
//   }
//   else if(filmNumber===3){
//     return filmarry[2];
//   }else
//   return(`There are only 3 Star Wars movies. XXX my favorite`);
// function getNthFilm(ch, filmNumber) {
//     // TODO: Add your code here.
//     let filmarry=ch.films;
//     if(filmNumber===1) {
//       return filmarry[0];
//     }
//     else if(filmNumber===2){
//       return filmarry[1];
//     }
//     else if(filmNumber===3){
//       return filmarry[2];
//     }else
//     return(`There are only 3 Star Wars movies. XXX my favorite`);
// }
// console.log(getNthFilm(ch,4));

//   console.log(ch.starships[0].passengers+ch.starships[0].crew + ch.starships[1].passengers+ch.starships[1].crew);   
//   console.log(ch.starships[0].passengers);
//   function getStarshipPassengerAndCrewSumTotal(ch) {
//     // TODO: Add your code here.
    //return character.starships[0].passengers+character.starships[0].crew + character.starships[1].passengers+character.starships[1].crew;
//     let cargoa=ch.starships;
   
//     let totalcapacity=0;
//     for(let i=0;i<cargoa.length;i++){
//      totalcapacity=totalcapacity+ cargoa[i].crew +cargoa[i].passengers;
//     }
//     return totalcapacity;
//   }
//   console.log(getStarshipPassengerAndCrewSumTotal(ch));
//let a=parseInt((ch.vehicles[0].cost_in_credits)+ 33);
// return  (parseInt((character.vehicles[0].cost_in_credits) + character.vehicles[1].cost_in_credits);
//let vv=parseInt(ch.vehicles[0].cost_in_credits);

// let vech1=parseInt(ch.vehicles[0].cost_in_credits);
// let vv=ch.vehicles[1].cost_in_credits;
// return parseInt(ch.vehicles[0].cost_in_credits) + ch.vehicles[1].cost_in_credits;
// console.log(vech1 + vv) ;
// let cargoa=[];
//     let veccl=[];
// function getCargoCapacityTotal(ch) {
//     // TODO: Add your code here.
    
//      cargoa = ch.starships;
//      veccl = ch.vehicles;
//     let totalcapacity = 0;
//     for (let i = 0; i < cargoa.length; i++) {
//       totalcapacity =
//         totalcapacity + parseInt(cargoa[i].cargo_capacity ) + parseInt(veccl[i].cargo_capacity) ;
//     }
//     return totalcapacity;
   
//   }
//   console.log(cargoa);
// //   console.log(getCargoCapacityTotal(ch));
// let cargoa=[];
// cargoa = ch.starships;
//    let veccl=[];
// function getCargoCapacityTotal(ch) {
//     // TODO: Add your code here.
//     for (let i = 0; i < cargoa.length; i++){
//      veccl.push(cargoa[i].max_atmosphering_speed);}
//      return (veccl);  
//      for (let i = 0; i < cargoa.length; i++){
//         if(veccl[i]>veccl[i+1])}
//         return (veccl); 
     //veccl = ch.vehicles;
    //let totalcapacity = 0;
    //  {

    //   if((parseInt(ch.cargoa[i].max_atmosphering_speed)>(parseInt(ch.cargoa[i+1].max_atmosphering_speed)){
    //   veccl=ch.starships[i].name;
    //      return   veccl;}
    // return null;
    // //  }
    // return Math.max(parseInt(cargoa.max_atmosphering_speed));
    // }

  console.log(ch.starships[0].name);
  console.log(ch.films.length);
  console.log(ch.starships[0].name);
  console.log(`${ch.name},${ch.height}cm,${
    ch.mass
  }kg.Featured in ${ch.films.length} films`);
  let costs=0;
  let costss;
  for(let i=0;i<ch.vehicles.length;i++){
    if(ch.vehicles[i].cost_in_credits===null){
        costss=0;}else{
      costs=costs+parseInt(ch.vehicles[i].cost_in_credits);
    }
  }
  
  console.log(costs);

  let cargoa = ch.starships;

  let totalcapacity = 0;
  for (let i = 0; i < cargoa.length; i++) {
    totalcapacity = totalcapacity + cargoa[i].crew + cargoa[i].passengers;
  }
   console.log(totalcapacity);
  
   function getNthFilm(ch, filmNumber) {
    // TODO: Add your code here.
    let filmarry = ch.films;
    if (filmNumber === 1) {
      return filmarry[0];
    } else if (filmNumber === 2) {
      return filmarry[1];
    } else if (filmNumber === 3) {
      return filmarry[2];
    } else return `There are only 3 Star Wars movies. XXX my favorite`;
  }
console.log(getNthFilm(ch,1));  

function getVehiclesCostInCreditsSumTotal(ch) {
    // TODO: Add your code here.
    let costs=0;
    let x=2;
    for(let i=0;i<ch.vehicles.length;i++){
      if(ch.vehicles[i].cost_in_credits===null){
          x=costs;
        }else if(ch.vehicles[i].cost_in_credits!==null)
        {
        costs=costs + parseInt(ch.vehicles[i].cost_in_credits);
      }
    }
  
    
    
    return costs;
  }
  
console.log(getVehiclesCostInCreditsSumTotal(ch) );

  cargoa.reduce()