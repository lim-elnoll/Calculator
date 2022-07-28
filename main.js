function add(...x){
  let s = 0;
  for (let i=0;i<x.length;i++){
    s += x[i];
  }
  return s;
}

function subtract(x,y){
  return x - y;
}

function multiply(x, y){
  return x * y;
}

function divide(x,y){
  if (y!==0){
    return x/y;
  }
}

function operate(o, a, b){
  switch(o){
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case 'x':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return `No idea!`;
  }
}
let myOperation = [];
let frstOprnd = [];
let scndOprnd = [];
let y = 0;
let myScreen = document.querySelector('.screen');
myScreen.style.cssText = 'font-size: 25px';
let myP = document.createElement('p');
let myParaResult = document.createElement('p');
myScreen.appendChild(myP);


document.addEventListener('click', function(e){
  if (e.target.tagName === 'BUTTON'){
    let numbers = /[0-9]/;
    if (numbers.test(e.target.textContent)){
      myOperation.push(e.target.textContent);
      myP.append(e.target.textContent);
    }
    if (e.target.textContent){
      switch(e.target.textContent){
        case '+':
          if (!myOperation.includes('+',myOperation.length-1)){
            if (myOperation.includes('+')||myOperation.includes('-')||myOperation.includes('x')||myOperation.includes('/')){
              alert('Sorry! Maximum Operands Allowed: 2');
            } else {
              myOperation.push('+');
              myP.append('+');
            }
          }
          break;
        case '-':
          if (!myOperation.includes('-',myOperation.length-1)){
            if (myOperation.includes('+')||myOperation.includes('-')||myOperation.includes('x')||myOperation.includes('/')){
              alert('Sorry! Maximum Operands Allowed: 2');
            } else {
              myOperation.push('-');
              myP.append('-');
            }
          }
          break;
        case 'x':
          if (!myOperation.includes('x',myOperation.length-1)){
            if (myOperation.includes('+')||myOperation.includes('-')||myOperation.includes('x')||myOperation.includes('/')){
              alert('Sorry! Maximum Operands Allowed: 2');
            } else {
              myOperation.push('x');
              myP.append('x');
            }
          }
          break;
        case '/':
          if (!myOperation.includes('/',myOperation.length-1)){
            if (myOperation.includes('+')||myOperation.includes('-')||myOperation.includes('x')||myOperation.includes('/')){
              alert('Sorry! Maximum Operands Allowed: 2');
            } else {
              myOperation.push('/');
              myP.append('/');
            }
          }
          break;
      }
    }
    if (e.target.textContent==='='){
      let strMyOperation = myOperation.join('');
      let operator = strMyOperation.indexOf('+');
      if (operator!==-1){
        let a = parseInt(strMyOperation.slice(0,operator));
        let b = parseInt(strMyOperation.slice(operator+1));
        let result = operate('+', a, b);
        myScreen.removeChild(myP);
        myScreen.appendChild(myParaResult);
        myParaResult.append(result);
      } else {
        operator = strMyOperation.indexOf('-');
        if (operator!==-1){
          a = parseInt(strMyOperation.slice(0,operator));
          b = parseInt(strMyOperation.slice(operator+1));
          let result = operate('-', a, b);
          myScreen.removeChild(myP);
          myScreen.appendChild(myParaResult);
          myParaResult.append(result);
        } else {
          operator = strMyOperation.indexOf('x');
          if (operator!==-1){
            a = parseInt(strMyOperation.slice(0,operator));
            b = parseInt(strMyOperation.slice(operator+1));
            let result = operate('x', a, b);
            myScreen.removeChild(myP);
            myScreen.appendChild(myParaResult);
            myParaResult.append(result);
          } else {
            operator = strMyOperation.indexOf('/');
            a = parseInt(strMyOperation.slice(0,operator));
            b = parseInt(strMyOperation.slice(operator+1));
            if (b===0){
              myScreen.removeChild(myP);
              myScreen.appendChild(myParaResult);
              myParaResult.append('Cannot Divide By Zero!');
            } else {
              let result = operate('/', a, b);
              myScreen.removeChild(myP);
              myScreen.appendChild(myParaResult);
              myParaResult.append(result);
            }
          }
        }
      }
    }
  }
});

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', function(){
  myScreen.removeChild(myParaResult);
});

// First of all, you've to let screen appending until the = is clicked
