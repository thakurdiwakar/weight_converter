document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046
  document.getElementById("ozOutput").innerHTML = lbs * 16
  document.getElementById("stOutput").innerHTML = lbs*0.071429
});


document.getElementById("newOutput").style.visibility = "hidden";
document.getElementById("lbInput").addEventListener("input", function(d) {
  document.getElementById("newOutput").style.visibility = "visible";
  let lb = d.target.value;
  document.getElementById("poundsOutput").innerHTML = lb*0.0022046
  document.getElementById("ouncesOutput").innerHTML = lb*0.035274
  document.getElementById("kggOutput").innerHTML = lb/1000
  document.getElementById("stsOutput").innerHTML = lb*0.00015747


});

document.getElementById("Output2").style.visibility = "hidden";
document.getElementById("lb2Input").addEventListener("input", function(new2) {
  document.getElementById("Output2").style.visibility = "visible";
  let lb2 = new2.target.value;
  document.getElementById("pounds2Output").innerHTML = lb2*0.0625
  document.getElementById("grames2Output").innerHTML =lb2/0.035274
  document.getElementById("kgg2Output").innerHTML = lb2/35.274
  document.getElementById("sts2Output").innerHTML = lb2*0.0044643
  


});


document.getElementById("Output3").style.visibility = "hidden";
document.getElementById("lb3Input").addEventListener("input", function(new3) {
  document.getElementById("Output3").style.visibility = "visible";
  let lb3 = new3.target.value;
  document.getElementById("pounds3Output").innerHTML =lb3*14
  document.getElementById("grames3Output").innerHTML =lb3/0.00015747
  document.getElementById("kgg3Output").innerHTML = lb3/0.15747
  document.getElementById("sts3Output").innerHTML = lb3*224
  


});


