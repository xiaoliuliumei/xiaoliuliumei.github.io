document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
    let targetImage = document.querySelector("#smart-image");
    console.log(targetImage)
      targetImage.addEventListener("click", function() {
          if (targetImage.classList.contains("small")) {
              targetImage.classList.add("small");
    // ...
} else {
    targetImage.classList.remove("small");
    // ...
}
    
});
});
