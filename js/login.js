let apiUser = "http://localhost:3000/user";
function Login() {
  getUser(hanldelogin);
}
function getUser(callback) {
  fetch(apiUser).then(function (res) {
    return res.json().then(callback);
  });
}
function hanldelogin(Data) {
  let username = document.getElementById("username").value;
  let pw = document.getElementById("pw").value;
  Data.forEach((Data) => {
    if (Data.username == username && Data.pw == pw) {
      alert("đăng nhập thành công");
      window.location.href = "./trang1.html";
    }else {
      alert("Sai Thông tin vui Lòng kiểm Tra lại ");
    }
  }
  });
}

function signup() {
  handlecrateform();
}
function createUser(data) {
  fetch(apiUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(function (res) {
    return res.json();
  });
  if (data) {
    alert("dang ki thanh cong");
  } else {
    alert("Sai Thông tin vui Lòng kiểm Tra lại ");
  }
}
function handlecrateform() {
  let username = document.getElementById("username");
  let pw = document.getElementById("pw");
  let sdt = document.getElementById("sdt");
  let mail = document.getElementById("mail");
  let user = {
    username: username.value,
    pw: pw.value,
    sdt: sdt.value,
    mail: mail.value,
  };
  createUser(user);
}
