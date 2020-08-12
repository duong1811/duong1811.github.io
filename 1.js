 $(function(){
    // function createSquare(){
    //     const color = [
    //         '#2196f3',
    //         '#e91e63',
    //         '#ffeb3b',
    //         '#74ff1d',
    //     ]
    //     const section = document.querySelector('body');
    //     const square = document.createElement('span');
    //     var size = Math.random()*50;
    //     var height = $(window).height();
    //     var width = $(window).width();
    //     var auto1 = Math.random()*height;
    //     var auto2 = Math.random()*width;

    //     square.style.width = 20 + size + 'px';
    //     square.style.height = 20 + size + 'px';

    //     square.style.top = auto1 - size -20 +'px';
    //     square.style.left = auto2 - size -20 +'px';
        
    //     const bg = color[Math.floor(Math.random()*color.length)];
    //     square.style.background = bg;

    //     section.appendChild(square);

    //     setTimeout(() =>{
    //         square.remove()
    //     }, 5000)
    //  }
    //   setInterval(createSquare, 150)
    //   // end background
    //  function clock(){
    //     var hours = document.getElementById('Hours')
    //     var minutes = document.getElementById('Minutes');
    //     var seconds = document.getElementById('Seconds');
    //     var day = document.getElementById('day');
    //     var month = document.getElementById('month');
    //     var year = document.getElementById('year');

    //     var h = new Date().getHours();
    //     var m = new Date().getMinutes();
    //     var s = new Date().getSeconds();
    //     var d = new Date().getDate();
    //     var mo = new Date().getMonth()+1;
    //     var y = new Date().getFullYear();

    //     hours.innerHTML = h;
    //     minutes.innerHTML = m;
    //     seconds.innerHTML = s;
    //     day.innerHTML = d;
    //     month.innerHTML = mo;
    //     year.innerHTML = y;  
    // }
    //     setInterval(clock, 1000);
    // end time
    // function anh(){
    //     var h = new Date().getHours();
    //     var m = new Date().getMinutes();
    //     var e = document.getElementById('hien');
    //     var f = document.getElementById('row');
    //      if(h>=0 && m>=13){
    //          e.style.display = "block";
    //          f.style.display = "none";
    //             const img = [
    //                 'anh1.jpg',
    //                 'anh2.jpg',
    //                 'anh3.jpg',
    //                 'anh4.jpg',
    //             ]
    //             var url = 'image/' + img[Math.floor(Math.random()*img.length)];
    //             document.getElementById('image').src = url;
    //             var x = document.getElementById('image');
    //             x.style.lineHeight = innerHeight;
    //         document.getElementById('mp4').src = "image/Sugar.mp3";
    //             var y = document.getElementById('audio');
    //             y.play();
    //     }else{
    //         e.style.display = "none";
    //         f.style.display = "block";
    //     }
    // }
    //     setInterval(anh, 3000);
    // if (h>=0 && m>=13) {
    //     document.getElementById('mp4').src = "image/Sugar.mp3";
    //             var y = document.getElementById('audio');
    //             y.play();
    // } else {
    //     document.getElementById('mp4').src = "image/Sugar.mp3";
    //             var y = document.getElementById('audio');
    //             y.pause();
    // }
        
})  

