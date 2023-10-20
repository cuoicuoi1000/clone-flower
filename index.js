if (window.innerWidth <= 768) {
  const containerDiv = document.querySelector("body");
  containerDiv.style.display = "none";

  const mobileMessage = document.createElement("p");
  mobileMessage.textContent = "Hãy truy cập bằng máy tính nhé!";

  containerDiv.insertAdjacentElement("afterend", mobileMessage);
}
