function expandPost() {
  if (document.getElementById("post-text").classList.contains("limited")) {
    document.getElementById("readMoreText").innerHTML = "Read less";
  } else {
    document.getElementById("readMoreText").innerHTML = "Read more";
  }
  document.getElementById("post-text").classList.toggle("limited");
}

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("response");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("copyButtonText").innerHTML = "Copied!";
}

feather.replace();
