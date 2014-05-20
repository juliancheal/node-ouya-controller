var OuyaController = require('./lib/ouya-controller')

var ouya = new OuyaController

ouya.on("o:press", function(key) {
  console.log("O press");
})

ouya.on("u:press", function(key) {
  console.log("U press");
})

ouya.on("y:press", function(key) {
  console.log("Y press");
})

ouya.on("a:press", function(key) {
  console.log("A press");
})

ouya.on("l_bumper:press", function(key) {
  console.log("L_BUMPER press");
})

ouya.on("r_bumper:press", function(key) {
  console.log("R_BUMPER press");
})

ouya.on("o:release", function(key) {
  console.log("O release");
})

ouya.on("u:release", function(key) {
  console.log("U release");
})

ouya.on("y:release", function(key) {
  console.log("Y release");
})

ouya.on("a:release", function(key) {
  console.log("A release");
})

ouya.on("l_bumper:release", function(key) {
  console.log("L_BUMPER release");
})

ouya.on("r_bumper:release", function(key) {
  console.log("R_BUMPER release");
})

