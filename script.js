let container = document.getElementById('container');
let left = document.getElementById('left');
let right = document.getElementById('right');

container.addEventListener('dragstart',(e)=>{
      console.log(e.target);
      let selected = e.target;
      right.addEventListener('dragover',(e)=>{
           e.preventDefault();

      });
      right.addEventListener('drop',(e)=>{
           right.appendChild(selected);
           selected = null;
           
      })

      left.addEventListener('dragover',(e)=>{
           e.preventDefault();

      });
      left.addEventListener('drop',(e)=>{
           left.appendChild(selected);
             selected = null;
           
      })
})