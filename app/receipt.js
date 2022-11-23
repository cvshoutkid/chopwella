// Random HEX for Transaction ID
function txID(){
    const prefix = '#63';
    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    var hexID = prefix + genRanHex(22);
    document.getElementById('txid').innerHTML = hexID;
}

// Dynamic Date for Transcation Date
function txDate(){
    state = new Date();

    var dt = state.toDateString();
    var tm = state.getHours() +':'+state.getMinutes()+ ':'+state.getSeconds();

    var dateTime = dt+' at '+tm;

    document.getElementById('date').innerHTML = dateTime;
}

// Dynamic Restaurant & Amount to be spent


const btnShowDialog = document.getElementById('btnController');

btnShowDialog.addEventListener("click", function () {
    document.getElementById('btnController').innerHTML = '';
    var x = document.getElementById('cspin');
    x.style.visibility = 'visible';

    setTimeout(function(){
        var appTrans = document.getElementById('scaffold');
        appTrans.style.opacity = 0.60;

        var dg = document.getElementById('dialogContainer');
        dg.style.visibility = 'visible';
    }, 2000);
})

const closeDialog = document.getElementById('diaBtnController');

closeDialog.addEventListener("click", function () {
    var k = document.getElementById('cspin');
    k.style.visibility = 'hidden';

    var alt = document.getElementById('dialogContainer');
    alt.style.visibility = 'hidden';

    document.getElementById('btnController').innerHTML = 'Validate';

    var appContext = document.getElementById('scaffold');
    appContext.style.opacity = 1;
})





txID();
txDate();
