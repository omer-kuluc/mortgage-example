inputAmount.addEventListener('change',handleAmount);
inputTerm.addEventListener('change',handleTerm);
inputRate.addEventListener('change',handleRate);

btnCalc.addEventListener('click',handleCalc);

document.querySelector('.calc-area').classList.add('d-none');


function handleAmount() {
  if(inputAmount.value.trim()!=='') {
    inputAmount.innerHTML += inputAmount.value;
  }

}

function handleTerm() {
  if(inputTerm.value.trim()!=='') {
      inputTerm.innerHTML += inputTerm.value;
  }

}

function handleRate() {
  if(inputRate.value.trim() !=='') {
    inputRate.innerHTML += inputRate.value;
  }
}

document.querySelector('.amount-section').classList.add('bg-blue');
document.querySelector('.term-section').classList.add('bg-blue');
document.querySelector('.rate-section ').classList.add('bg-blue');

















let totalInterest = 0;
let totalRepay = 0;
let monthlyPay = 0;

function handleCalc() {



  document.querySelector('.calc-area').classList.remove('d-block');
  document.querySelector('.footer').classList.add('d-block');


  if (inputAmount.value === "" || inputTerm.value === "" || inputRate.value === "") {
    alert('Boş değer girmeyiniz!!!');

    document.querySelector('.calc-area').classList.remove('d-block');

    document.querySelector('.amount-icon').classList.remove('bg-blue');

    document.querySelector('.term-icon').classList.remove('bg-blue');

    document.querySelector('.rate-icon').classList.remove('bg-blue');

    if(inputAmount.value === "") {
      document.querySelector('.amount-section').classList.remove('bg-blue');
      document.querySelector('.amount-section').classList.add('bg-red');
    }

    if(inputTerm.value === "") {
      document.querySelector('.term-section').classList.remove('bg-blue');
      document.querySelector('.term-section').classList.add('bg-red');
    }  

    if(inputRate.value === "") {
      document.querySelector('.rate-section').classList.remove('bg-blue');
      document.querySelector('.rate-section').classList.add('bg-red');
    }

    document.querySelector('.footer').classList.remove('d-none');
    document.querySelector('.footer').classList.add('d-block');

    document.querySelector('.calc-area').classList.add('d-none');



  } else {
    document.querySelector('.amount-section').classList.add('bg-blue');
    document.querySelector('.term-section').classList.add('bg-blue');
    document.querySelector('.rate-section').classList.add('bg-blue');


    totalInterest = Number((Number(inputAmount.value)) * (Number(inputTerm.value)) * ((Number(inputRate.value)) / 100))
    totalRepay = (Number(inputAmount.value)) + totalInterest;
    monthlyPay = totalRepay / ((Number(inputTerm.value)) * 12)
    monthlyText.innerText = monthlyPay.toFixed(2);
    totalTxt.innerText = totalRepay.toFixed(2);

    document.querySelector('.footer').classList.add('d-none');
    document.querySelector('.calc-area').classList.remove('d-none');

  }



    // document.querySelector('.amount-section').classList.remove('bg-red');
    // document.querySelector('.term-section').classList.remove('bg-red');
    // document.querySelector('.rate-section').classList.remove('bg-red');

}

