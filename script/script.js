/**
 * 
 */
const selKind = document.querySelector("#kinderen")
const geschenkenlijst = document.querySelector("#geschenkenlijst")
const addGeschenk = document.querySelector("#addGeschenk")
const geschenken1 = document.querySelector("#geschenken1")
const geschenken2 = document.querySelector("#geschenken2")


// 1. SPELERS LADEN IN DROPDOWN
function loadKinderen() {
    fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(res => res.json())
    .then(kinderen => {
      selKind.innerHTML = '<option value="">-- Kies een kind --</option>';

      kinderen.forEach(kind => {
        const opt = document.createElement("option");
        opt.value = kind.id; 
        opt.textContent = `${kind.voornaam} ${kind.achternaam}`;
        selKind.appendChild(opt);
        
        selKind.addEventListener("onclick",()=>{
            const newLi = document.createElement("li")
            newP = kind.id
            opt.innerHTML = `${kind.geschenk.naam}`
            geschenkenlijst.appendChild(newLi)
            
        })
      });
    });
}

// init: kinderlijstje vullen
loadKinderen();

function loadgeschenken1() {
  fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(res => res.json())
    .then(geschenken => {
      geschenken1.innerHTML = '<option value="">-- Kies een geschenk --</option>';

      geschenken.forEach(geschenk => {
        const opt = document.createElement("option");
        opt.value = geschenk.id; 
        opt.textContent = `${geschenk.naam}`;
        geschenken1.appendChild(opt);
      });
    });
}

// init: kinderlijstje vullen
loadgeschenken1();

function loadgeschenken2() {
  fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(res => res.json())
    .then(geschenken => {
      geschenken2.innerHTML = '<option value="">-- Kies een geschenk --</option>';

      geschenken.forEach(geschenk => {
        const opt = document.createElement("option");
        opt.value = geschenk.id; 
        opt.textContent = `${geschenk.naam}`;
        geschenken2.appendChild(opt);
      });
    });
}

// init: kinderlijstje vullen
loadgeschenken2();

const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        
    }),
  };

fetch("https://o-apiandclient-render.onrender.com/kinderen", options) 
  .then((info) => info.json())
  .then((data) => {
    console.log(data)});






