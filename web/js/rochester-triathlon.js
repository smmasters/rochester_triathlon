(function(){

  // Set the date we're counting down to
  var countDownDate = new Date("Aug 22, 2021 08:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    if (distance > 0) {
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      if (document.getElementById("countdown-container")) {
        document.querySelector('#countdown-days').innerText = days;
        document.querySelector('#countdown-hours').innerText = hours;
        document.querySelector('#countdown-minutes').innerText = minutes;
        document.querySelector('#countdown-seconds').innerText = seconds;
      }
    } else {
      clearInterval(x);
    }
  }, 1000);

  // If iOS or Android then don't fix background on locked images
  function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }
  let isIOS = iOS();

  let ua = navigator.userAgent.toLowerCase();
  let isAndroid = ua.indexOf("android") > -1 && ua.indexOf("mobile") > -1;

console.log("isIOS = " + isIOS);
console.log("isAndroid = " + isAndroid);
  let lockImages = !isAndroid && !isIOS;
  if (lockImages) {
    let fixedImages = document.querySelectorAll('.fixed');
    fixedImages.forEach(
      element => element.classList.add('fix-background')
    );
  }
})(window);
