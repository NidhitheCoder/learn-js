const middleBtn = document.getElementById("btn5");
middleBtn.addEventListener("click", () => {
  let arr = [1, 2, 3, 6, 9, 8, 7, 4];
  let first;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      first = document.getElementById(`btn4`).innerHTML;
    }
    if (i === 0) {
      document.getElementById(`btn1`).innerHTML = first;
    } else {
      document.getElementById(`btn${arr[i]}`).innerHTML =
        document.getElementById(`btn${arr[i - 1]}`).innerHTML;
    }
  }
});
