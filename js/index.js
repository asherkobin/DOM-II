// 10 Event Listeners

document.querySelector("h1.logo-heading").addEventListener("click", (e) => { 
  e.srcElement.style.color === "blue" ? e.srcElement.style.color = "" : e.srcElement.style.color = "blue";
}); // click

document.querySelectorAll("a.nav-link").forEach(a => {
  a.addEventListener("mouseover", (e) => { e.srcElement.style.textDecoration = "underline"; });
}); // mouseover

document.querySelectorAll("a.nav-link").forEach(a => {
  a.addEventListener("mouseout", (e) => { e.srcElement.style.textDecoration = "none"; });
}); // mouseout

document.querySelector("header.intro > img").addEventListener("dblclick", (e) => { 
  e.srcElement.style.border === "" ? e.srcElement.style.border = "5px solid red" : e.srcElement.style.border = "";
}); // dblclick

document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mousedown", (e) => { e.srcElement.style.fontSize = "2rem"; });
}); // mousedown

document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseup", (e) => { e.srcElement.style.fontSize = "1.6rem"; });
}); // mouseup

document.querySelectorAll("div.img-content > img").forEach(img => {
  img.addEventListener("load", (e) => { 
    console.log("Loaded:" + img.src);
  });
}); // load (only fires once because of caching)

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      document.body.style.backgroundColor = "red";
      break;
    case "2":
      document.body.style.backgroundColor = "blue";
      break;
    case "3":
      document.body.style.backgroundColor = "green";      
      break;
    default:
      document.body.style.backgroundColor = "white";
      break;
  }
}); // keydown

document.body.addEventListener("mousemove", (e) => {
  document.querySelector("a.nav-link:nth-of-type(1)").textContent = `(x=${e.clientX}, y=${e.clientY})`;
}); // mousemove

document.querySelector("header.intro > img").addEventListener("dragstart", (e) => { 
  document.querySelector("h1.logo-heading").textContent = "Don't drag the Bus!"
}); // dragstart

document.querySelector("header.intro > img").addEventListener("dragend", (e) => { 
  document.querySelector("h1.logo-heading").textContent = "Fun Bus"
}); // dragend

// Use stopPropogation

document.querySelector("section.content-pick").addEventListener("click", (e) => { 
  console.log("OUTER");
});

document.querySelectorAll("section.content-pick div").forEach(div => {
  div.addEventListener("click", (e) => {
     console.log("INNER");
     e.stopPropagation();
    });
});

// Use preventDefault

document.querySelectorAll("a.nav-link").forEach(a => {
  a.addEventListener("click", (e) => { e.preventDefault(); console.log("Navigation DISABLED"); });
});