const msgCounterNum = document.querySelector("sub");
const markAllRead = document.querySelector("allRead-Header");
const msgContainer = document.querySelectorAll(".msg-container");

// const changeColor = () => {
//   msgContainer.style.color = "red";
// };
msgContainer.forEach((msg) => {
  msg.addEventListener("click", () => msg.classList.toggle("msg-containers"));
});
