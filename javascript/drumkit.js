const boom = document.getElementById('boom');
const clap = document.getElementById('clap');
const hihat = document.getElementById('hihat');
const kick = document.getElementById('kick');
const openhat = document.getElementById('openhat');
const ride = document.getElementById('ride');
const snare = document.getElementById('snare');
const tink = document.getElementById('tink');
const tom = document.getElementById('tom');
const audio = document.getElementsByTagName('audio')

// box lights
const lightElements = document.getElementsByClassName('light-one')
const boxOne = document.getElementById('box-one');
const boxTwo = document.getElementById('box-two');
const boxThree = document.getElementById('box-three');
const boxFour = document.getElementById('box-four');
const boxFive = document.getElementById('box-five');
const boxSix = document.getElementById('box-six');
const boxSeven = document.getElementById('box-seven');
const boxEight = document.getElementById('box-eight');
const boxNine = document.getElementById('box-nine')

document.addEventListener('keypress', (event) =>{
    if(event.key == "a"){
       lights(boxOne) 
       boom.pause();
       boom.currentime = 0;
       boom.play();
    }else if(event.key == "s"){
        lights(boxTwo)
        clap.pause();
        clap.currentime = 0;
        clap.play();
    }else if (event.key == "d"){
        lights(boxThree)
        hihat.pause();
        hihat.currentime = 0;
        hihat.play()
    }else if (event.key == "f"){
        lights(boxFour)
        kick.pause();
        kick.currentime = 0;
        kick.play();
    }else if (event.key == "g"){
        lights(boxFive)
        openhat.pause();
        openhat.currentime = 0;
        openhat.play();
    }else if (event.key == "h"){
        lights(boxSix)
        ride.pause();
        ride.currentime = 0;
        ride.play();
    }else if (event.key == "j"){
        lights(boxSeven)
        snare.pause();
        snare.currentime = 0;
        snare.play();
    }else if (event.key == "k"){
        lights(boxEight)
        tink.pause();
        tink.currentime = 0;
        tink.play();
    }else if (event.key == "l"){
        lights(boxNine)
        tom.pause();
        tom.currentime = 0;
        tom.play();
    }
})
const lights = (element) => {
    let sixLights = element.children
    for (i = 0; i <= 5; i++){
        if(sixLights[i].style.backgroundColor == 'red'){
            sixLights[i].style.backgroundColor = 'black';
        }else{
            sixLights[i].style.backgroundColor = 'red';
        }
    } 

    setTimeout(() => {
        for (i = 0; i <= 5; i++){
        sixLights[i].style.backgroundColor = 'black'
        }
    }, 500)
}


// document.addEventListener('keypress', (drumstick) =>{
//     if (drumstick.keyCode == 97){
//         boom.pause();
//         boom.currentime = 0;
//         boom.play();
//         boxOne[0].style.backgroundColor = 'red';
//         setTimeout(() => {boxOne[0].style.backgroundColor = ""  }, 500);
//     }

// })

// document.addEventListener('keypress', (drumstick) =>{

 
//     if (drumstick.keyCode == 97){
        // boom.pause();
        // boom.currentime = 0;
        // boom.play();
//         boxOne.style.backgroundColor = 'red';
//         setTimeout(() => {boxOne.style.backgroundColor = ""  }, 500);
//     }else if (drumstick.keyCode == 115){
//         clap.pause();
//         clap.currentime = 0;
//         clap.play();
    // }else if (drumstick.keyCode == 100){
    //     hihat.pause();
    //     hihat.currentime = 0;
    //     hihat.play()
    // }else if (drumstick.keyCode == 102){
    //     kick.pause();
    //     kick.currentime = 0;
    //     kick.play();
    // }else if (drumstick.keyCode == 103){
    //     openhat.pause();
    //     openhat.currentime = 0;
    //     openhat.play();
    // }else if (drumstick.keyCode == 104){
    //     ride.pause();
    //     ride.currentime = 0;
    //     ride.play();
    // }else if (drumstick.keyCode == 106){
    //     snare.pause();
    //     snare.currentime = 0;
    //     snare.play();
    // }else if (drumstick.keyCode == 107){
    //     tink.pause();
    //     tink.currentime = 0;
    //     tink.play();
    // }else if (drumstick.keyCode == 108){
    //     tom.pause();
    //     tom.currentime = 0;
    //     tom.play();
//     }

// })


// setTimeout(() => {
//     boxOne.style.backgroundColor = ""
// }, 400);


    // for (i =1; i <= 6; i++){  
    //     setTimeout(() => {
    //     boxOne[i - 1].style.backgroundColor = ""
    //     }, 400 *i);
    // }

    //  for (i =1; i <= 6; i++){  
    //     setTimeout(function(){
    //     boxOne[i - 1].style.backgroundColor = ""
    //     }, 400 *i);
    // }