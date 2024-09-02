let middleSection = document.querySelector('.middleSection');

let launchDate = new Date('September 15, 2024 12:00:00').getTime();

let timer = setInterval(tick, 1000);

function tick (){
    let now = new Date().getTime();

    let countDown = launchDate - now;

    // aligorithm to calculate date ----
    let day = Math.floor(countDown / (1000 * 60 * 60 * 24));
    if(day < 10){
        day = '0' + day;
    }

     // aligorithm to calculate hours ----
     let hour = Math.floor ((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
     if(hour < 10){
         hour = '0' +  hour;
     }

          // aligorithm to calculate minutes ----
     let min = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
     if(min < 10){
         min = '0' + min;
     }   

          // aligorithm to calculate seconds ----
     let sec = Math.floor((countDown % (1000 * 60)) / (1000));
     if(sec < 10){
         sec = '0' + sec;
     }

     let time = `<h2>${day} <span>/ ايام</span></h2>
                 <h2>${hour} <span>/ ساعات</span></h2>
                 <h2>${min} <span>/ دقائق</span></h2>
                 <h2>${sec} <span>/ ثواني</span></h2>`
      middleSection.innerHTML = time;           
}