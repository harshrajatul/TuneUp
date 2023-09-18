let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

let start_time = document.getElementById("start_time");
let end_time = document.getElementById("end_time");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        
    }
}

if(song.play())
{
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function PlaytoPause()
{
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}

song.addEventListener("timeupdate", (event) => {
    const {currentTime, duration} = event.srcElement;
    
    let min_dur = Math.floor(duration/60);
    let sec_dur = Math.floor(duration%60);

    let tot_dur = `${min_dur}:${sec_dur}`;
    if(duration)
    {
        end_time.textContent = tot_dur;
    }
    // 
    // 
    let min_curr_dur = Math.floor(currentTime/60);
    let sec_curr_dur = Math.floor(currentTime%60);

    if(sec_curr_dur < 10)
    {
        sec_curr_dur = `0${sec_curr_dur}`
    }
    let tot_curr_dur = `${min_curr_dur}:${sec_curr_dur}`;
    start_time.textContent = tot_curr_dur;
})