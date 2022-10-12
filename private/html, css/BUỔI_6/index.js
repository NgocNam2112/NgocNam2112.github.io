document.addEventListener("keydown", (e) => {
  console.log("key", e.key);
  if (e.key === "Alt") {
    e.preventDefault();
    return;
  }
  if (e.key === "F12") {
    e.preventDefault();
    return;
  } else if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
    return;
  }
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
