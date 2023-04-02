// function pomodoro(duration, display) {

//     var timer = duration, minutes, seconds

//     setInterval(() => {
//             minutes = parseInt(timer / 60, 10)
//             seconds = parseInt(timer % 60, 10)

//             minutes = minutes < 10 ? '0' + minutes : minutes
//             seconds = seconds < 10 ? '0' + seconds : seconds

//             display.textContent = minutes + ':' + seconds

//             --timer
//             if(timer < 0) {
//                 timer = duration
//             }

//             if(minutes == 0 && seconds == 0) {
//                 document.location.reload()
//             }
//     },1000)
// }

function pomodoro(duration, display) {
  var time = duration,
    minutes,
    seconds;
  var pomo = setInterval(() => {
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = 
    `<div style="border: 1px solid white;">${minutes}</div> 
     <div style="border: 1px solid white;">${seconds}</div>
     `

     
    --time;

    if (time < 0) {
      alert('Seu tempo acabou')

      clearInterval(pomo);
      unvanish()


    }
  }, 1000);
}

function vanish() {
    let vanish_div = document.getElementById('vanished_area')
    vanish_div.style.display = 'none'
}

function unvanish() {
    let vanish_div = document.getElementById('vanished_area')
    vanish_div.style.display = 'contents'
}

function pomostart() {
  var duration_user = document.getElementById("time").value;
  var duration = 60 * duration_user;
  var display = document.getElementById("clock");

  pomodoro(duration, display);
  vanish()
}
