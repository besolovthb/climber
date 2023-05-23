const win = document.querySelector('#win');
const klimmer = document.querySelector('#climber');



klimmer.style.right = "0px";
klimmer.style.top = "660px";

const positionArray = [['0px','660px'], ['-150px', '580px'], ['-250px', '420px'], ['-450px', '200px'], ['-600px', '120px'], ['-750px', '320px'], ['-950px', '0px']];

addEventListener('keyup', (e) => {
    if (e.key == "d" ) {
    let right = klimmer.style.right;
    const index = positionArray.indexOf(positionArray.find((element) => element[0] == right));
    if (index === 5) {
      win.style.visibility = "visible";
      klimmer.style.right = positionArray[index + 1][0];
      klimmer.style.top = positionArray[index + 1][1];
    } else {
      klimmer.style.right = positionArray[index + 1][0];
      klimmer.style.top = positionArray[index + 1][1];
    } 
  }
})



addEventListener('keyup', (e) => {
  if (e.key == "a" ) {
    let right = klimmer.style.right;
    const index = positionArray.indexOf(positionArray.find((element) => element[0] == right));
    if (index === 6) {
      win.style.visibility = "hidden";
      klimmer.style.right = positionArray[index - 1][0];
      klimmer.style.top = positionArray[index - 1][1];
    } else {
      klimmer.style.right = positionArray[index - 1][0];
      klimmer.style.top = positionArray[index - 1][1];
    }
  }
})

