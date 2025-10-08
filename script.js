const mailinput = document.getElementById("email");
const passinput = document.getElementById("password");
const loginBtn = document.getElementById("gobtn");
const users = [{ mail: "velliss200@gmail.com", password: "vizboy2008" }];
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = mailinput.value.trim().toLowerCase();
  const pass = passinput.value.trim();
  const found = users.some((u) => u.mail === email && u.password === pass);

  if (found) {
    window.location.href = "mainpage.html";
  } else {
    alert("error");
  }
});
