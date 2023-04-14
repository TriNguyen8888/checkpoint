const table = document.querySelector(".popup");

const menuFood = JSON.parse(localStorage.getItem("menu")) ?? [
  "rau xào",
  "thịt luộc",
  "gà rán",
];
localStorage.setItem("menu", JSON.stringify(menuFood));

function app() {
  const value = prompt("Nhập 1 trong 4 ký tự sau: “C,R,U,D”");

  if (value) {
    if (value.toUpperCase() === "C") {
      const value2 = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
      C(value2);
    } else if (value.toUpperCase() === "R") {
      R();
    } else if (value.toUpperCase() === "U") {
      U();
    } else if (value.toUpperCase() === "D") {
      D();
    }
  }
}

app();

function C(value) {
  menuFood.push(value);
  localStorage.setItem("menu", JSON.stringify(menuFood));
}

function R() {
  const value = JSON.parse(localStorage.getItem("menu"));
  const liValue = value.map((value) => `<li>${value}</li>`).join("");

  const html = `
          <ul>
             ${liValue}
          </ul>
          `;

  table.innerHTML = html;
}

function U() {
  const valueUpdate = prompt("Mời người dùng nhập vào tên món muốn update");
  const itemIndex = menuFood.findIndex((item) => item.includes(valueUpdate));
  const newValue = prompt("Mời người dùng nhập vào tên món ăn mới");
  menuFood[itemIndex] = newValue;
  localStorage.setItem("menu", JSON.stringify(menuFood));
}

function D() {
  const value = prompt("Mời người dùng nhập vào tên món muốn Delete");
  const itemIndex = menuFood.findIndex((item) => item.includes(value));
  if (itemIndex < 0) return;
  menuFood.splice(itemIndex, 1);
  localStorage.setItem("menu", JSON.stringify(menuFood));
}
