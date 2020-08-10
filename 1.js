 $(function(){
    function createSquare(){
        const color = [
            '#2196f3',
            '#e91e63',
            '#ffeb3b',
            '74ff1d',
        ]
        const section = document.querySelector('section');
        const square = document.createElement('span');
        var size = Math.random()*50;
        var height = innerHeight;
        var width = innerWidth;
        var auto1 = Math.random()*height;
        var auto2 = Math.random()*width;

        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';

        square.style.top = auto1 + 'px';
        square.style.left = auto2 + 'px';
        
        const bg = color[Math.floor(Math.random()*color.length)];
        square.style.background = bg;

        section.appendChild(square);

        setTimeout(() =>{
            square.remove()
        }, 6000)
     }
     setInterval(createSquare, 150)
})  
 