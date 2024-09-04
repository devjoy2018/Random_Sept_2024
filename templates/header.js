const headerElement = document.createElement("template");

headerElement.innerHTML = `
<div class="header">
  <div class="header-el">
    <div class="logo"><p>Random September</p></div>
    <div class="menu">
      <a href="#">About</a>
      <a class="contact"  href="#">Contact</a>
      <a class="text" href="#">Blog Page</a>
    </div>
  </div>
</div>
`;

document.body.appendChild(headerElement.content);
