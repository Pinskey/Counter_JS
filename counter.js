/* Si crea il pulsante per aggiungere al contatore*/
const btnAdd = document.createElement('button');
const divPlus = document.createElement('div');
btnAdd.className = 'btn add';
divPlus.className = 'div plus'
divPlus.textContent = '+';
document.body.appendChild(btnAdd);
btnAdd.appendChild(divPlus);

/* Si crea il counter a 0 */
const counter = document.createElement('div');
counter.className = 'counter';
counter.textContent = '0'
document.body.appendChild(counter);

/* Si crea il pulsante per togliere al contatore */
const btnSub = document.createElement('button');
const divMinus = document.createElement('div');
btnSub.className = 'btn sub';
divMinus.className = 'div minus';
divMinus.textContent = '-';
document.body.appendChild(btnSub);
btnSub.appendChild(divMinus);

var numCounter = Number(counter.textContent);

btnAdd.addEventListener('click',()=>{
    numCounter = Number(counter.textContent) + 1;
    counter.textContent = numCounter.toString();
})

btnSub.addEventListener('click', ()=>{
    if(numCounter > 0){
        numCounter = Number(counter.textContent) - 1;
        counter.textContent = numCounter.toString();
    }
})