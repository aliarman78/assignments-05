document.getElementById('total-btn').addEventListener('click',function(){

    let income = document.getElementById('income-box').value;
    const incomeInput = parseFloat(income);

    let food = document.getElementById('food-box').value;
    const foodInput = parseFloat(food);

    let rent = document.getElementById('rent-box').value;
    const rentInput = parseFloat(rent);

    let clothes = document.getElementById('clothes-box').value;
    const clothesInput = parseFloat(clothes);

    const totalExpenses = document.getElementById('total-expenses');
    const expensesSum = foodInput + rentInput + clothesInput;
    totalExpenses.innerText = expensesSum;


    if(expensesSum < incomeInput){
      const balance = incomeInput - expensesSum;
      document.getElementById('balance').innerText = balance;
    }
    else{
      alert('Your expenses is greater than your income')
    }
});

document.getElementById('save-btn').addEventListener('click', function(){
  let income = document.getElementById('income-box').value;
  const incomeInput = parseFloat(income);



  let save = document.getElementById('save-box').value;
  const saveInput = parseFloat(save);
  console.log(saveInput);
  const saveAmount = incomeInput * saveInput / 100;


  const saving = document.getElementById('save-amount');
  saving.innerText = saveAmount;

  const balanceText = document.getElementById('balance').innerText;
  const balance = parseFloat(balanceText);
  if (saveAmount < balance){
    const updateBalance = balance - saveAmount;
    document.getElementById('rem-balance').innerText = updateBalance;
  }
  else{
    alert('Your saving is greater than your balance')
  }    
});




