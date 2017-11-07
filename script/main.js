 const start = document.querySelector('.start');
 const stop = document.querySelector('.stop');


 class AnimationRect {
     constructor() {
         this.ctx = canvas.getContext('2d');
         this.currentPos = 0;
         this.options = {
             color: ['green', 'red', 'blue', 'black', 'white'],
             sizeRandom: 10,
             size: 20
         };
         this.animate = this.animate.bind(this);
         this.color = this.getRandom(this.options.color);
         this.place = this.getRandomNumber(0, canvas.clientWidth - 20);
     }
     getRandomNumber(min, max) {
         let rand = min + Math.random() * (max + 1 - min);
         rand = Math.floor(rand);
         return rand;
     }
     getRandom(elem) {
         return elem[Math.floor(Math.random() * elem.length)];
     }

     animate() {
         this.ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
         let rect = this.ctx.fillRect(this.place, this.currentPos, 20, 20);
         this.ctx.fillStyle = this.color;
         this.currentPos += 1;
         if (this.currentPos > canvas.clientHeight) {
             this.currentPos = 0;
         }
         requestAnimationFrame(this.animate);
     }

 }

 const generateRects = () => {
     let rect = new AnimationRect();
     rect.animate();
     // animationRect.getRandomNumber(700, 1000)
 }
 start.addEventListener('click', () => {
     setInterval(generateRects, 3000);
 });
 stop.addEventListener('click', () => {

     cancelAnimationFrame(generateRects);
     //  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     //  }, false);
     //  createRect() {
     //          // setTimeout(() => {
     //          this.ctx.clearRect(0, 0, this.ctx.canvas.width, ctx.canvas.height);
     //          window.requestAnimationFrame(anim);
     //         
     //          let 
     //          step(color, place);
     //      }
     // , this.getRandomNumber(700, 1000))
     // }
     // эта функция должна принимать рандомный цвет и отрабатывать с ним, а потом запускаться с другим
     //  step(color, place) {
     //      // ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); убирает квадратик
     //      ctx.fillStyle = color;
     //      let random = Math.random() * options.sizeRandom;
     //      ctx.fillRect(place, currentPos, options.size + random, options.size + random)
     //      currentPos += 1;
     //      if (currentPos >= canvas.clientHeight) {
     //          currentPos = 0;
     //      }
 })