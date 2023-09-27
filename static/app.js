function displayChat(chat) {
  const ul = document.querySelector("#chat-ul");
  const li = document.createElement("li");
  li.innerHTML = `유저: ${chat.content}`;

  ul.append(li);
}

async function readChat() {
  const res = await fetch("/chatters");
  const josnRes = await res.json();

  const ul = document.querySelector("#chat-ul");
  ul.innerHTML = "";
  josnRes.forEach(displayChat);
}

async function createChat(value) {
  const res = await fetch("/chatters", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime(),
      content: value,
    }),
  });
  readChat();
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  createChat(input.value);

  input.value = "";
}

const form = document.querySelector("#chat-form");
form.addEventListener("submit", handleSubmit);

readChat();
