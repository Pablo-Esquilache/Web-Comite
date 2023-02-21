const url = location.href;
const links = document.querySelectorAll(".menuIndex li a");
const cant_links = links.length;

for (let i = 0; i < cant_links; i++) {
  if (links[i].href === url) {
    links[i].className = "active";
  }
}
