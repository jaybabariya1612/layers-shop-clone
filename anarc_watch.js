

  let anarcwatchimg = document.getElementById("anarc-watch-img");
  let frostwatch = document.getElementById("frost-watch");
  let Darkwatch = document.getElementById("Dark-watch");
  let Earthywatch = document.getElementById("Earthy-watch");
  let bottomimageinfo = document.getElementById("bottom-img-info");
  function changeimgfrostwatch() {
    anarcwatchimg.src = "image-assets-page-3/Anarc-frost-1.webp";
    bottomimageinfo.innerText = "Note: Frost Blaze ships between 1st-7th Jan.";
    frostwatch.style.transform = "scale(1.4)";
    Darkwatch.style.transform = "scale(1)";
    Earthywatch.style.transform = "scale(1)";
  }
  function changeimgdarkwatch() {
    anarcwatchimg.src = "image-assets-page-3/Anarc-black-1.webp";
    bottomimageinfo.innerText = "Note: Dark Brilliance ships between 26th-31st Jan.";
    Darkwatch.style.transform = "scale(1.4)";
    frostwatch.style.transform = "scale(1)";
    Earthywatch.style.transform = "scale(1)";
  }
  function changeimgearthywatch() {
    anarcwatchimg.src = "image-assets-page-3/Anarc-earthy-1 (1).webp";
    bottomimageinfo.innerText = "Note: Frost Blaze ships between 1st-7th Jan.";
    Earthywatch.style.transform = "scale(1.4)";
    Darkwatch.style.transform = "scale(1)";
    frostwatch.style.transform = "scale(1)";
  }
