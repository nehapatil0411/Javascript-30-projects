let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max  = song.duration;
    progress.value  = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("ri-pause-circle-line"))
    {
        song.pause();
        ctrlIcon.classList.remove("ri-pause-circle-line");
        ctrlIcon.classList.add("ri-play-fill");
    }else
    {
        song.play();
        ctrlIcon.classList.add("ri-pause-circle-line");
        ctrlIcon.classList.remove("ri-play-fill");
    }
}

if(song.play())
{
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function()
{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("ri-pause-circle-line");
    ctrlIcon.classList.remove("ri-play-fill");

}
