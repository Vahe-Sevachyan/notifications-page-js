let msgCounterNum = document.getElementById("msgCounter");
const markAllRead = document.querySelector(".allRead-Header");
const msgContainer = document.querySelectorAll(".msg-container");

//this function changes the color of unread messages
msgContainer.forEach((msg) => {
  msg.addEventListener("click", () => msg.classList.toggle("msg-containers"));
});

//this function decreases the msg count
msgContainer.forEach((msg) => {
  msg.addEventListener("click", () => {
    if (msg.classList.contains("msg-containers")) {
      msgCounterNum.innerText = parseInt(msgCounterNum.innerText) - 1;
    } else if (!msg.classList.contains("msg-containers")) {
      msgCounterNum.innerText = parseInt(msgCounterNum.innerText) + 1;
    }
  });
});

msgContainer.forEach((msg) => {
  markAllRead.addEventListener("click", () => {
    if (!msg.classList.contains("msg-containers")) {
      msg.classList.toggle("msg-containers");
    }
    msgCounterNum.innerText = 0;
  });
});
