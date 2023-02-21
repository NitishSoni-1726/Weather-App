let currentTime = new Date().getHours();
if (currentTime >= 20) {
  document.body.style.backgroundImage = "url(Asset/20-1.jpg)";
} else if (currentTime >= 1 && currentTime < 4) {
  document.body.style.backgroundImage = "url(Asset/1-4.jpg)";
} else if (currentTime >= 4 && currentTime < 6) {
  document.body.style.backgroundImage = "url(Asset/4-6.jpg)";
} else if (currentTime >= 6 && currentTime < 9) {
  document.body.style.backgroundImage = "url(Asset/6-9.jpg)";
} else if (currentTime >= 9 && currentTime < 13) {
  document.body.style.backgroundImage = "url(Asset/9-13.jpg)";
} else if (currentTime >= 13 && currentTime < 16) {
  document.body.style.backgroundImage = "url(Asset/13-16.jpg)";
} else if (currentTime >= 16 && currentTime < 17) {
  document.body.style.backgroundImage = "url(Asset/16-17.jpg)";
} else if (currentTime >= 17 && currentTime < 20) {
  document.body.style.backgroundImage = "url(Asset/17-20.jpg)";
} else {
  document.body.style.backgroundImage = none;
}
