
console.log('hello')

//*****   MEMORIZING   *****/ // 


let cal_memo = document.getElementById('cal-memo').addEventListener('click', memo_calculat);

function memo_calculat() {
    let open_memo_time = Number(document.getElementById('open-memo').value) ;
    let open_memo_num = open_memo_time * 2;

    let atten_memo_time = Number(document.getElementById('atten-memo').value);
    let atten_memo_num = atten_memo_time * 0.25;

    let result =  20 - (open_memo_num + atten_memo_num)  ;

    document.getElementById('result-memo').innerHTML = result ;
}




//*****   READING   *****/ // 


let cal_read = document.getElementById('cal-read').addEventListener('click', read_calculat);

function read_calculat() {
    let open_read_time = Number(document.getElementById('open-read').value) ;
    let open_read_num = open_read_time * 3;

    let atten_read_time = Number(document.getElementById('atten-read').value);
    let atten_read_num = atten_read_time * 1;

    let result =  20 - (open_read_num + atten_read_num)  ;

    document.getElementById('result-read').innerHTML = result ;
}
