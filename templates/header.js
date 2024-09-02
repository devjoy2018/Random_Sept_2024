const headerElement = document.createElement("template");

headerElement.innerHTML = `
<div class="header">
  <div class="logo">Random September</div>
  <div class="menu">
    <a href="#">About Me</a>
    <a href="#">Contact Me</a>
    <a href="#">Blog Page</a>
  </div>
</div>
`;

document.body.appendChild(headerElement.content);
