/**
 * меняет положение стрелки в зависимости от времени
 * @returns {void}
 */
function anime_hour(){
    const date=new Date()

    const second =document.getElementById("second")
    const minutes =document.getElementById("minutes")
    const hour =document.getElementById("hour")

    const secondRotate=(date.getSeconds()/60)*360
    const minutesRotate=(date.getMinutes()/60)*360+secondRotate/60
    const hourRotate=(date.getHours()/12)*360+minutesRotate/12

    hour.style.transform=`translate(-50%,-50%) rotate(${hourRotate}deg)`
    minutes.style.transform=`translate(-50%,-50%) rotate(${minutesRotate}deg)`
    second.style.transform=`translate(-50%,-50%) rotate(${secondRotate}deg)`
    requestAnimationFrame(anime_hour)
} 

requestAnimationFrame(anime_hour)