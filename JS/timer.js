//! countdown timer

// hr , min ,  sec

// 1 : 12 : 09  ---> setInterval

let h = 1;
let m = 2;
let s = 3;

const sec = 60;
const min = 60;
const hr = 24;

const id = setInterval(() => {
    console.log(h + " : " + m + " : " + s);
    if (s === 0 && m != 0) {
        s = sec;
        if(m != 0) {
        m--;
        }
    }
    if (m === 0 && h != 0) {
        m = min;
        if(h != 0) {
        h--;
        }
    }
    if (h === 0 && m === 0 && s === 0) {
        clearInterval(id);
    }
    s--;

    
},1000);