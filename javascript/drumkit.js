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
const boxOne = document.getElementsByClassName('light-one')
// const boxOne = document.getElementById('box-one');
// const boxTwo = document.getElementById('box-two');
// const boxThree = document.getElementById('box-three');
// const boxFour = document.getElementById('box-four');
// const boxFive = document.getElementById('box-five');
// const boxSix = document.getElementById('box-six');
// const boxSeven = document.getElementById('box-seven');
// const boxEight = document.getElementById('box-eight');
// const boxNine = document.getElementById('box-nine')

document.addEventListener('keypress', (lightUp) =>{
    
    let x = 0;
    for (i = 1; i <= 6; i++){
        boxOne[x].style.backgroundColor = 'red';
        x++
    } 
    
    // for (i = 1; i <= 6; i++ ){
    //     setTimeout(()=> {boxOne[x].style.backgroundColor = ""}, 400 )
    //     x++
    // }
    

})

document.addEventListener('keypress', (drumstick) =>{
    if (drumstick.keyCode == 97){
        boom.pause();
        boom.currentime = 0;
        boom.play();
    }else if (drumstick.keyCode == 115){
        clap.pause();
        clap.currentime = 0;
        clap.play();
    }else if (drumstick.keyCode == 100){
        hihat.pause();
        hihat.currentime = 0;
        hihat.play()
    }else if (drumstick.keyCode == 102){
        kick.pause();
        kick.currentime = 0;
        kick.play();
    }else if (drumstick.keyCode == 103){
        openhat.pause();
        openhat.currentime = 0;
        openhat.play();
    }else if (drumstick.keyCode == 104){
        ride.pause();
        ride.currentime = 0;
        ride.play();
    }else if (drumstick.keyCode == 106){
        snare.pause();
        snare.currentime = 0;
        snare.play();
    }else if (drumstick.keyCode == 107){
        tink.pause();
        tink.currentime = 0;
        tink.play();
    }else if (drumstick.keyCode == 108){
        tom.pause();
        tom.currentime = 0;
        tom.play();
    }
})
