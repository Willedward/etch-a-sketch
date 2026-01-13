/* Making first phase */

const count = prompt('How many rows(1-100): ', '1-100');
console.log(count);


const whole_container = document.querySelector('#whole-container');
for(let i = 0; i < count; i++)
{
    //row container
    const row_container = document.createElement('div');
    row_container.classList.add('row_container');
    whole_container.appendChild(row_container);

    for(let j = 0; j < count; j++)
    {
        //indiv div
        const indiv = document.createElement('div')
        indiv.classList.add('tiles');
        indiv.setAttribute('style', 'border-style:solid;');
        row_container.appendChild(indiv);
    }
}

const tiles = document.querySelectorAll('.tiles');
const sizing = whole_container.clientWidth / count;
console.log(sizing);
console.log(whole_container.clientWidth);
tiles.forEach(tile => 
{
    tile.style.height = `${sizing}px`;
    tile.style.width = `${sizing}px`;
    
}
);

const color = document.querySelector('.color');
const eraser = document.querySelector('.erase');
button = document.querySelector('button');
color.addEventListener('click', (event)=>
{
    tiles.forEach(tile =>
    {
        tile.addEventListener('mouseenter', ()=>
    {
        //tile.classList.add('active');
        const left = Math.ceil(Math.random()*256);
        const mid = Math.ceil(Math.random()*256);
        const right = Math.ceil(Math.random()*256);
        tile.style.backgroundColor = `rgb(${left}, ${mid}, ${right})`;
    });
    }
    )
});

eraser.addEventListener('click', (event)=>
{
    tiles.forEach(tile =>
    {
        tile.addEventListener('mouseenter', ()=>
    {
        //tile.classList.add('active');
        tile.style.backgroundColor = 'white';
    });
    }
    )
});

