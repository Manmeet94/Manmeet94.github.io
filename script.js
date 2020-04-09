
const checkOutBtn = document.getElementById("checkOutBtn");
checkOutBtn.addEventListener("click", function(){
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = "none";
    const thankYouSection = document.getElementById("thankYouSection");
    thankYouSection.style.display = "block";
})



const plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener("click", function(){
      const userAmount = parseFloat(document.getElementById("input1").value);
      const userAmountNumber = userAmount + 1;
      document.getElementById("input1").value = userAmountNumber;
      const unitPrice = parseFloat(document.getElementById("unitPrice1").innerText) + 1129;

      document.getElementById("unitPrice1").innerText = unitPrice;

      const Payable = document.getElementById("Payable").innerText;
      const PayableNumber = parseFloat(Payable);
      const PayableValue = PayableNumber + 1129;
      document.getElementById("Payable").innerText = PayableValue;


      const totalTax = parseFloat(document.getElementById("totalTax").innerText);
    
      const updatedTax = PayableValue*0.15;
      document.getElementById("totalTax").innerText = updatedTax;


      document.getElementById("netTotal").innerText = PayableValue+updatedTax;


    });


const minusBtn1 = document.getElementById("minusBtn1");
        minusBtn1.addEventListener("click", function(){
              const userAmount = parseFloat(document.getElementById("input1").value);
              if ( userAmount == 0) {}
              else{
              const userAmountNumber = userAmount - 1;
              document.getElementById("input1").value = userAmountNumber;
              const unitPrice = parseFloat(document.getElementById("unitPrice1").innerText) - 1129;
              document.getElementById("unitPrice1").innerText = unitPrice;

              const Payable = document.getElementById("Payable").innerText;
              const PayableNumber = parseFloat(Payable);
              const PayableValue = PayableNumber - 1129;
              document.getElementById("Payable").innerText = PayableValue;

              const totalTax = parseFloat(document.getElementById("totalTax").innerText);
              
              const updatedTax = PayableValue*0.15;
              document.getElementById("totalTax").innerText = updatedTax;
        
              document.getElementById("netTotal").innerText = PayableValue+updatedTax;

              }
            });


const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function(){
      const userAmount = parseFloat(document.getElementById("input2").value);
      const userAmountNumber = userAmount + 1;
      document.getElementById("input2").value = userAmountNumber;
      const unitPrice = parseFloat(document.getElementById("unitPrice2").innerText) + 1189;
      document.getElementById("unitPrice2").innerText = unitPrice;

      const Payable = document.getElementById("Payable").innerText;
      const PayableNumber = parseFloat(Payable);
      const PayableValue = PayableNumber + 1189;
      document.getElementById("Payable").innerText = PayableValue;

      const totalTax = parseFloat(document.getElementById("totalTax").innerText);
      const updatedTax = PayableValue*0.15;
      document.getElementById("totalTax").innerText = updatedTax;

      document.getElementById("netTotal").innerText = PayableValue+updatedTax;

    });

const minusBtn2 = document.getElementById("minusBtn2");
        minusBtn2.addEventListener("click", function(){
              const userAmount = parseFloat(document.getElementById("input2").value);
              if (userAmount == 0 ) {}
              else {
              const userAmountNumber = userAmount - 1;
              document.getElementById("input2").value = userAmountNumber;
              const unitPrice = parseFloat(document.getElementById("unitPrice2").innerText) - 1189;
              document.getElementById("unitPrice2").innerText = unitPrice;

              const Payable = document.getElementById("Payable").innerText;
              const PayableNumber = parseFloat(Payable);
              const PayableValue = PayableNumber - 1189;
              document.getElementById("Payable").innerText = PayableValue;

              const totalTax = parseFloat(document.getElementById("totalTax").innerText);
              const updatedTax = PayableValue*0.15;
              document.getElementById("totalTax").innerText = updatedTax;

              document.getElementById("netTotal").innerText = PayableValue+updatedTax;

              }
            });
