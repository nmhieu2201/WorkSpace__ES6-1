//Bài 1:
const colorList = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "orange",
  "purple",
];
let renderButton = (arrColor) => {
  let output = "";
  for (let i = 0; i < arrColor.length; i++) {
    let color = arrColor[i];
    output += `
            <button 
                class="btn mx-2 p-2" 
                style="background-color: ${color};
                color: #fff;
                border:5px solid #ccc;
                cursor:pointer;"
                onclick="changColor('${color}');"
                >               
            </button>
        `;
  }
  // console.log(output);
  document.getElementById("colors").innerHTML = output;
};
renderButton(colorList);
window.changColor = (color) => {
  document.querySelector("#home").style.color = color;
};
//Bài 2:
document.querySelector("#kLA").onclick = (e) => {
  e.preventDefault();
  let arrInputA = document.querySelectorAll("#form-khoilop1 input");
  let kLA = [];
  let output = [];
  let avg = 0;
  for (let input of arrInputA) {
    let { id, value } = input;
    kLA[id] = value;
    output.push(value);
  }
  for (let index in output) {
    avg += Math.floor(output[index]) / output.length;
  }
  document.querySelector("#resultA").innerHTML = avg;
};

document.querySelector("#kLB").onclick = (e) => {
  e.preventDefault();
  let arrInputB = document.querySelectorAll("#form-khoilop2 input");
  let kLB = [];
  let output = [];
  let avg = 0;
  for (let input of arrInputB) {
    let { id, value } = input;
    kLB[id] = value;
    output.push(value);
  }
  for (let index in output) {
    avg += Math.floor(output[index]) / output.length;
  }
  document.querySelector("#resultB").innerHTML = avg;
};
//Bài 3
const handleHover = (e) => {
  const heading = document.getElementById("heading");

  let text = "HoverMe!";
  // console.log([...text]);
  [...text].forEach((c) => {
    const el = document.createElement("span");
    el.innerHTML = c;
    el.addEventListener("mouseenter", () => {
      el.style.display = "inline-block";
      el.style.transition = "all 0.5s";
      el.style.transform = "rotate(10deg) scale(1.4) translateY(-10px)";
      // el.style.transform = "scale(1.4)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.color = "unset";
      el.style.transform = "unset";
    });

    heading.insertAdjacentElement("beforeend", el);
  });
  // console.log(els);
  // let chars = [...hover];
  // console.log(chars);
  // for (let c of chars) {
  // }
  // document.querySelector("#heading").innerText = chars;
};
handleHover();
// ("span {background-color: red;}");
