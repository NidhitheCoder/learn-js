const changeTab = elemnt => {
  let items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    let underline = items[i].children[0];
    if (items[i] === elemnt) {
      items[i].classList.add("hoverItem");
      underline.classList.add("underline");
    } else {
      items[i].classList.remove("hoverItem");
      underline.classList.remove("underline");
    }
  }
};
