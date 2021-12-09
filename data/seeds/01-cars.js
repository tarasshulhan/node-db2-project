// const cars =[
//   {
//     vin: "WBSBL96040JC98246",
//     make: "BMW",
//     model: "M3 CSL",
//     mileage: 39114,
//     title: "clean",
//     transmission: "shiftable automatic", 
//   },
//   {
//     vin: "WP0AF2A94GS195336",
//     make: "Porsche",
//     model: "911R",
//     mileage: 872,
//     title: "clean",
//     transmission: "manual", 
//   },
//   {
//     vin: "ZFFKW64A490166629",
//     make: "Ferrari",
//     model: "F430 Scuderia",
//     mileage: 20956,
//     transmission: "shiftable automatic", 
//   },
// ]

const cars = [
  {
    vin: '11111111111111111',
    make: 'toyota',
    model: 'prius',
    mileage: 250000,
    title: 'salvage',
    transmission: 'CVT',
  },
  {
    vin: '22222222222222222',
    make: 'ford',
    model: 'mustang',
    mileage: 120000,
    title: 'clean',
    transmission: 'manual',
  },
  {
    vin: '33333333333333333',
    make: 'honda',
    model: 'accord',
    mileage: 220000,
    title: 'clean',
    transmission: 'automatic',
  },
]
exports.seed = async function(knex) {
   await knex('cars').truncate()
   await knex('cars').insert(cars)
}