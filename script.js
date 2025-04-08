let hero = document.querySelector(".hero");
let h1 = document.querySelectorAll("h1");
let crsr = document.querySelector(".mouse");
let elem = document.querySelectorAll(".content");
let blank = document.querySelector(".blank-div");
let btn = document.querySelector(".btn");
let dis = document.querySelector(".discount h4");

// disscount array
let arr = [{ discount: "20%" }, { discount: "10%" }, { discount: "15%" }];

// hero section
hero.addEventListener("mousemove", function (dets) {
  let mouseX = dets.clientX;
  let mouseY = dets.clientY;

  crsr.style.left = mouseX - crsr.offsetWidth / 2 + "px";
  crsr.style.top = mouseY - crsr.offsetHeight / 2 + "px";
});
hero.addEventListener("mouseleave", function () {
  crsr.style.opacity = 0;
});
hero.addEventListener("mouseenter", function () {
  crsr.style.display = "block";
  crsr.style.opacity = 1;
});
h1[1].addEventListener("mouseenter", function () {
  crsr.style.width = "30px";
  crsr.style.height = "30px";
});
h1[1].addEventListener("mouseleave", function () {
  crsr.style.width = "20px";
  crsr.style.height = "20px";
});


// content 

elem.forEach(function (val) {
  val.addEventListener("mousemove", function (dets) {
    let imgX = dets.clientX;
    let imgY = dets.clientY;
    val.childNodes[1].style.left =
      imgX - val.childNodes[1].offsetWidth / 2 + "px";
    val.childNodes[1].style.top =
      imgY - val.childNodes[1].offsetHeight / 2 + "px";
  });

  val.addEventListener("mouseleave", function () {
    val.childNodes[1].style.opacity = 0;
  });

  val.addEventListener("mouseenter", function () {
    val.childNodes[1].style.opacity = 1;
  });
});

btn.addEventListener("click", function () {
    // creating new element
  if (!blank.querySelector("h1")) {
    let newElem = document.createElement("h1");
    let num = Math.floor(Math.random() * arr.length);
    let dis = arr[num];

    newElem.innerHTML = dis.discount;
    newElem.setAttribute("class", "dis");

    blank.appendChild(newElem);
  } else {
    dis.innerHTML = "You Already Avail Discount";
    dis.style.color = "red";
  }
});

