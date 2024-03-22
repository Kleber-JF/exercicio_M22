AOS.init();
document.addEventListener('DOMContentLoaded',function (){
    const eventDate = new Date("Dec 12, 2024 19:00:00");
    const timeStampEvent = eventDate.getTime();
    
    const countdown = setInterval(function(){
        const now = new Date();
        const timeStampNow = now.getTime();
    
        const timeToEvent = timeStampEvent - timeStampNow;
    
        const daysToEvent = Math.floor(timeToEvent / (1000*60*60*24));
        const hoursToEvent = Math.floor(timeToEvent % (1000*60*60*24)/(1000*60*60));
        const minToEvent = Math.floor(timeToEvent % (1000*60*60)/(1000*60));
        const secToEvent = Math.floor(timeToEvent % (1000*60)/(1000));
    
        document.getElementById('contador').textContent = `${daysToEvent} dias ${hoursToEvent}:${minToEvent}:${secToEvent}`
    
        if (timeToEvent < 0) {
            clearInterval(countdown);
            document.getElementById('contador').textContent = 'Evento expirado'
        }
    }, 1000)

})
