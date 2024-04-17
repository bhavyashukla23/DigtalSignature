const { links } = require("express/lib/response");

//top bar
const colour = document.getElementById('colorPicker');
const font = document.getElementById('fontSize');
const background = document.getElementById('backgroundColor');

//canvas
const canvas = document.getElementById('myCanvas');
const textInput = document.getElementById('textInput');
const ctx = canvas.getContext();

//footer bar
const clear = document.getElementById('clearButton');
const saveAndDownload = document.getElementById('saveButton');
const retrieve = document.getElementById('retrieveButton');

//signature styling 
colour.addEventListener('change', (event)=>{
    ctx.fillStyle = event.target.value;
    ctx.strokeStyle = event.target.value;
})

font.addEventListener('change' , (event) =>{
    ctx.lineWidth = event.target.value;
})

background.addEventListener('change' , (event)=>{
    ctx.fillStyle = event.target.value;
    ctx.fillRect(0,0,800,500);
})

//footer button properties
clear.addEventListener('click' , () => {
 ctx.clearRect(0 , 0, canvas.width , canvas.height);
});

saveAndDownload.addEventListener('click' , () =>{
      localStorage.setItem("canvasContents", canvas.toDataUrl);
      let signLink= document.createElement('a');
      signLink.download= 'my-signature.png';
      signLink.href = canvas.toDataUrl;
      signLink.click();
});

retrieve.addEventListener('click', () =>{
    let savedCanvas = localStorage.getItem('canvasContents');
    if(savedCanvas){
        let img= new Image();
        img.src=savedCanvas;
        ctx.drawImage(img, 0 ,0);
    }
});


//canvas related events
canvas.addEventListener()