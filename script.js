'use strict';

var countries = [
  {name: 'Kanada', area: 9984670, population: 38131104},
  {name: 'JAV', area: 9833520, population: 331449281},
  {name: 'Kinija', area: 9596961, population: 1411778724},
  {name: 'Vokietija', area: 357022, population: 83190556},
  {name: 'Italija', area: 301338, population: 60317116}
];

function data(name, area, population){
  console.log('Šalis: ' + name + ', joje gyvena ' +  (population/1000000).toFixed(2) + ' mln. gyventojų.')
  console.log('Valstybės plotas: ' + (area/1000000).toFixed(3) + ' mln. km², plotas tenkantis vienam gyventojui: ' + ((area/population)*1000000).toFixed(2) + ' m².')
  console.log('==================================')
}
for (var i = 0; i < countries.length; i++) {
  data(countries[i].name, countries[i].area, countries[i].population);
}
