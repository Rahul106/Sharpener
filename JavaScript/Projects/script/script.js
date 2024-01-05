const submitbutton = document.getElementById('SUBMITFORM');
submitbutton.addEventListener("click", function(event){
    event.preventDefault();

    let expensenumber = document.getElementById('number').value;
    let expensename = document.getElementById('name').value;
    let expenseamount = document.getElementById('amount').value;
    let expenseBRC = document.getElementById('BRC').value;

    let Object = {
        expensenumber, expensename, expenseamount, expenseBRC
    };
    console.log(Object);
    ULLIADD(Object);
    document.getElementById('number').value = '';
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('BRC').value = '';
});
function ULLIADD(Obj){
    let UL = document.getElementById('UNLS');
    let LI = document.createElement('li');
    LI.classList.add('LI');
    let PLI = document.createElement('p');
    PLI.classList.add('PLI');
    PLI.innerHTML = `${Obj.expensenumber} ${Obj.expensename} ${Obj.expenseamount} ${Obj.expenseBRC}`;

    let Editb = document.createElement('button');
    Editb.textContent = "ModifyExpense";
    Editb.classList.add('edit');
    Editb.addEventListener('click', function(){
        let key = Obj.expensenumber;
        let storedvalue = localStorage.getItem(key);
        let parsedvalue = JSON.parse(storedvalue);
        console.log(parsedvalue);
        document.getElementById('number').value = parsedvalue.expensenumber;
        document.getElementById('name').value = parsedvalue.expensename;
        document.getElementById('amount').value = parsedvalue.expenseamount;
        document.getElementById('BRC').value = parsedvalue.expenseBRC;
        localStorage.removeItem(key);
        UL.removeChild(LI);
    })
    let Deleteb = document.createElement('button');
    Deleteb.addEventListener('click', function(event){
        let listitem = event.target.parentElement;
        let data = listitem.querySelector('.PLI').textContent.split(' ')[3];
        let key = Obj.expensenumber;
        localStorage.removeItem(key);
        UL.removeChild(listitem);
    })
    Deleteb.textContent = "DeleteExpense";
    Deleteb.classList.add('delete');

    LI.appendChild(PLI);
    LI.appendChild(Editb);
    LI.appendChild(Deleteb);
    UL.appendChild(LI);

    let jsonstring = JSON.stringify(Obj);
    localStorage.setItem(Obj.expensenumber, `${jsonstring}`);
}
document.addEventListener('DOMContentLoaded', function(){
    let UL = document.getElementById('UNLS');

    for(let key in localStorage){
        if (localStorage.hasOwnProperty(key)){
            let storedData = localStorage.getItem(key);
            let dataObject = JSON.parse(storedData);

            let UL = document.getElementById('UNLS');
            let LI = document.createElement('li');
            LI.classList.add('LI');
            let PLI = document.createElement('p');
            PLI.classList.add('PLI');
            PLI.innerHTML = `${dataObject.expensenumber} ${dataObject.expensename} ${dataObject.expenseamount} ${dataObject.expenseBRC}`;
        
            let Editb = document.createElement('button');
            Editb.textContent = "ModifyExpense";
            Editb.classList.add('edit');
            Editb.addEventListener('click', function(){
                let key = dataObject.expensenumber;
                let storedvalue = localStorage.getItem(key);
                let parsedvalue = JSON.parse(storedvalue);
                console.log(parsedvalue);
                document.getElementById('number').value = parsedvalue.expensenumber;
                document.getElementById('name').value = parsedvalue.expensename;
                document.getElementById('amount').value = parsedvalue.expenseamount;
                document.getElementById('BRC').value = parsedvalue.expenseBRC;
                localStorage.removeItem(key);
                UL.removeChild(LI);
            })
            let Deleteb = document.createElement('button');
            Deleteb.addEventListener('click', function(event){
                let listitem = event.target.parentElement;
                let data = listitem.querySelector('.PLI').textContent.split(' ')[3];
                let key = dataObject.expensenumber;
                localStorage.removeItem(key);
                UL.removeChild(listitem);
            })
            Deleteb.textContent = "DeleteExpense";
            Deleteb.classList.add('delete');
        
            LI.appendChild(PLI);
            LI.appendChild(Editb);
            LI.appendChild(Deleteb);
            UL.appendChild(LI);        
        }
    }
});