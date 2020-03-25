'use strict'
let in1 = document.getElementById('in1'),
    in2 = document.getElementById('in2'),
   
    btn_in1_up = document.getElementById('btn-in1-up'), //кнопка 1 клапана вверх
    btn_in1_down = document.getElementById('btn-in1-down'), //кнопка 2 клапана вниз
    btn_in2_up = document.getElementById('btn-in2-up'), //кнопка 2 клапана вверх
    btn_in2_down = document.getElementById('btn-in2-down'), //кнопка 2 клапана вниз
    result = document.getElementById('result'),
    inputs = [],
    gain_result;

btn_in1_up.addEventListener('click', () => {
    if(in1.value == 100){
        in1.value = 100;
    }
    else{
        in1.value++;
    }
});
btn_in1_down.addEventListener('click', () => {
    if(in1.value == 0){
        in1.value = 0;
    }
    else{
        in1.value--;
    }
});
btn_in2_up.addEventListener('click', () => {
    if(in2.value == 100){
        in2.value = 100;
    }
    else{
        in2.value++;
    }
});
btn_in2_down.addEventListener('click', () => {
    if(in2.value == 0){
        in2.value = 0;
        
    }
    else{
        in2.value--;
    }
});

class Gain {
    constructor(in_x, k) {
        this.in_x = in_x;
        this.k = k;
    }
    calc(){
        return this.k * this.in_x;
    }
}
    inputs.push(new Gain(in1.value, 10));
    inputs.push(new Gain(in2.value, 15));


setInterval(() => {
    inputs[0].in_x = in1.value;
    inputs[1].in_x = in2.value;
    gain_result = inputs[0].calc() + inputs[1].calc();
}, 1000);

    

// class BaseBlock{
//     constructor(in_x_1, in_x_2, yi_1){
//       this.in_x_1 = in_x_1;
//       this.in_x_2 = in_x_2;
//       this.yi_1 = yi_1;
//    }
// }

class APLBlock{
    constructor(T, dt, gain_result, yi_1) {
        this.T = T;
        this.dt = dt;
        this.gain_result = gain_result;
        this.yi_1 = yi_1;
    }
    transfer(){
        return (this.gain_result + this.T * this.yi_1) / (this.T + this.dt);
    }
}













