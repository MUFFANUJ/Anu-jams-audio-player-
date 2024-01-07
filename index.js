console.log('Welcome To Spotify');
// initializing the variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgessBar'); 
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "HUSN", filePath:"songs/1.mp3",coverPath:"cover/2.jpeg"},
  {songName: "IRRADEY", filePath:"songs/2",coverPath:"cover/3.jpeg"},
  {songName: "MANCHALA", filePath:"songs/3",coverPath:"cover/4.jpeg"},
  {songName: "PHIR-LE-AAYA-DIL", filePath:"songs/4",coverPath:"cover/5.jpg"},
  {songName: "TIMRO", filePath:"songs/5",coverPath:"cover/6.jpeg"},
  {songName: "TU-HAR-LAMHA", filePath:"songs/6",coverPath:"cover/7.jpeg"},
  {songName: "Heeriye", filePath:"songs/7",coverPath:"cover/10.jpeg"},
  {songName: "Kahani Suno 2.0", filePath:"songs/8",coverPath:"cover/11.jpeg"},
  {songName: "Chidiya - Vilen", filePath:"songs/9",coverPath:"cover/8.jpeg"},
  {songName: "Samjho Na", filePath:"songs/10",coverPath:"cover/9.jpeg"},
];

songItem.forEach((element,i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
  // element.getElementsByClassName('timestamp')[0].innerText = so
})

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});


audioElement.addEventListener('timeupdate', ()=>{ 
  // Update Seekbar
  progress = (audioElement.currentTime/audioElement.duration)* 100; 
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplay = ()=> {
  Array.from(document.getElementsByClassName('songItemPLay')).forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPLay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllplay();
    masterSongName.innerText = songs[songIndex].songName;
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if (songIndex >= 9){
    songIndex = 0;
  } else {
    songIndex +=1;
  }
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', ()=>{
  if (songIndex<=0){
    songIndex = 9;
  } else {
    songIndex -=1;
  }
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
})