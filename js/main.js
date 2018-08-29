$(document).ready(function(){
  
  inView('.js-looping-video')
    .on('enter', el => {
      el.play();
      console.log("playing video");
    })
    .on('exit', el => {
      el.pause();
      console.log("paused video");
    });

  $(".js-newsletter-btn").click(function(){
    $(".js-modal").css("display", "block");
    $(".js-email-field").focus();
  });

  $(".js-close-modal").click(function(){
    $(".js-modal").hide();
  });
});



// function setupYoutubeApi(){
//   var tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }

// function onPlayerReady(event) {
//   event.target.playVideo();
// }