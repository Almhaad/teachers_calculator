

//*****   MEMORIZING   *****/ // 


let cal_memo = document.getElementById('cal-memo').addEventListener('click', memo_calculat);


function memo_calculat() {

    // OPENING AND ATTENTION TIMES
    let open_memo_time = Number(document.getElementById('open-memo').value) ;
    let open_memo_num = open_memo_time * 2;

    let atten_memo_time = Number(document.getElementById('atten-memo').value);
    let atten_memo_num = atten_memo_time * 0.125;

    // LESSONS AND GRADES TIMES
    let lessons_memo_time = Number(document.getElementById('lessons-memo').value) ;
    let lessons_memo_grades = lessons_memo_time * 20 ;

    // ABSENTS AND GRADES TIMES
    let absent_memo_time = Number(document.getElementById('absent-memo').value) ;
    let absent_memo_grades = absent_memo_time * 20 ;

    if(absent_memo_time > lessons_memo_time){
        alert('لا يجب أن يكون عدد الغياب أكثر من عدد المحاضرات');
        return ;
    }else if (absent_memo_time == lessons_memo_time){
        alert('عدد الغياب مساوي لعدد المحاضرات فالطالبة تعد غائبة جميع الأسبوع');
        return ;
    }

    let sum_result = open_memo_num + atten_memo_num ;
    let minus_result = lessons_memo_grades - sum_result ;
    let absent_result = minus_result - absent_memo_grades ;
    let full_result = absent_result / lessons_memo_time ;

    document.getElementById('result-memo').innerHTML = full_result.toFixed(2)  ;
    document.getElementById('result-almost-memo').innerHTML = full_result.toFixed(1)  ;
}


//*****   READING   *****/ // 

let cal_read = document.getElementById('cal-read').addEventListener('click', read_calculat);

function read_calculat() {
    
    // OPENING AND ATTENTION TIMES
    let open_read_time = Number(document.getElementById('open-read').value) ;
    let open_read_num = open_read_time * 3;

    let atten_read_time = Number(document.getElementById('atten-read').value);
    let atten_read_num = atten_read_time * 1;

    
    // LESSONS AND GRADES TIMES
    let lessons_read_time = Number(document.getElementById('lessons-read').value) ;
    let lessons_read_grades = lessons_read_time * 20 ;

    // ABSENTS AND GRADES TIMES
    let absent_read_time = Number(document.getElementById('absent-read').value) ;
    let absent_read_grades = absent_read_time * 20 ;

    if(absent_read_time > lessons_read_time){
        alert('لا يجب أن يكون عدد الغياب أكثر من عدد المحاضرات');
        return ;
    }else if (absent_read_time == lessons_read_time){
        alert('عدد الغياب مساوي لعدد المحاضرات فالطالبة تعد غائبة جميع الأسبوع');
        return ;
    }

    let sum_result = open_read_num + atten_read_num ;
    let minus_result = lessons_read_grades - sum_result ;
    let absent_result = minus_result - absent_read_grades ;
    let full_result = absent_result / lessons_read_time ;

    document.getElementById('result-read').innerHTML = full_result.toFixed(2)  ;
    document.getElementById('result-almost-read').innerHTML = full_result.toFixed(1)  ;

}


//*****   coping result   *****/ // 

function copyToClipboard(var1){
    let val = document.getElementById(var1).innerHTML;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert(`تم النسخ للقيمة : ${val}`);

  }  

