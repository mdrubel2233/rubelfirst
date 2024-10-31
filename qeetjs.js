//<![CDATA[
document.addEventListener("DOMContentLoaded", function() {
  var blockquotes = document.querySelectorAll("blockquote");
  blockquotes.forEach(function(blockquote) {
    var shareButtonsContainer = document.createElement("div");
    shareButtonsContainer.classList.add("at_share-buttons");
    var quote = blockquote.textContent.trim();
    var facebookShareButton = document.createElement("a");
    facebookShareButton.classList.add("facebook-share-button");
    facebookShareButton.innerHTML = '<i class="at-facebook"></i>';
    var whatsappShareButton = document.createElement("a");
    whatsappShareButton.classList.add("whatsapp-share-button");
    whatsappShareButton.innerHTML = '<i class="at-whatsapp"></i>';
    var twitterShareButton = document.createElement("a");
    twitterShareButton.classList.add("twitter-share-button");
    twitterShareButton.innerHTML = '<i class="at-twitter"></i>';
    var copyButton = document.createElement("a");
    copyButton.classList.add("copy-button");
    copyButton.textContent = "Copy";

    shareButtonsContainer.prepend(document.createTextNode("SHARE:"));
    shareButtonsContainer.append(facebookShareButton, whatsappShareButton, twitterShareButton, copyButton);
    blockquote.appendChild(shareButtonsContainer);

    facebookShareButton.addEventListener("click", function() {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&quote=" + encodeURIComponent(encodeURIComponent(quote)) + "&hashtag=%23quotes", "facebook-share-dialog", "width=626,height=436");
      return false;
    });
    whatsappShareButton.addEventListener("click", function() {
      window.open("https://wa.me/?text=" + encodeURIComponent(quote), "_blank");
      return false;
    });
    twitterShareButton.addEventListener("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote) + "&hashtags=quotes", "twitter-share-dialog", "width=626,height=436");
      return false;
    });
    copyButton.addEventListener("click", function() {
      var copyTextarea = document.createElement("textarea");
      document.body.appendChild(copyTextarea);
      copyTextarea.value = quote;
      copyTextarea.select();
      document.execCommand("copy");
      copyTextarea.remove();
      this.textContent = "Copied";
      this.style.backgroundColor = "green";
      setTimeout((function() {
        this.textContent = "Copy";
        this.style.backgroundColor = "";
      }).bind(this), 1000);
    });
  });
});
//]]>
