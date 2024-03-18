//global vars
const AM = "AM";
const PM = "PM";

const showTime = () => {
  //getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  //setting time for 12h format am pm
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = PM;
  } else if (hour == 0) {
    hour = 12;
    am_pm = AM;
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

  document.getElementById("clock").innerHTML = currentTime;
};

//calling show time function at every second
setInterval(showTime, 1000);
