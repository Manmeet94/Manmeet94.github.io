
const checkOutBtn = document.getElementById("checkOutBtn");
checkOutBtn.addEventListener("click", function(){
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = "none";
    const thankYouSection = document.getElementById("thankYouSection");
    thankYouSection.style.display = "block";
})



const plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener("click", function(){
      const inputAmount = parseFloat(document.getElementById("input1").value);
      const inputAmountNumber = inputAmount + 1;
      document.getElementById("input1").value = inputAmountNumber;
      const unitPrice = parseFloat(document.getElementById("unitPrice1").innerText) + 1129;

      document.getElementById("unitPrice1").innerText = unitPrice;

      const subTotal = document.getElementById("subTotal").innerText;
      const subTotalNumber = parseFloat(subTotal);
      const subTotalValue = subTotalNumber + 1129;
      document.getElementById("subTotal").innerText = subTotalValue;


      const taxAmount = parseFloat(document.getElementById("taxAmount").innerText);
    
      const updatedTax = subTotalValue*0.15;
      document.getElementById("taxAmount").innerText = updatedTax;


      document.getElementById("netTotal").innerText = subTotalValue+updatedTax;


    });


const minusBtn1 = document.getElementById("minusBtn1");
        minusBtn1.addEventListener("click", function(){
              const inputAmount = parseFloat(document.getElementById("input1").value);
              if ( inputAmount == 0) {}
              else{
              const inputAmountNumber = inputAmount - 1;
              document.getElementById("input1").value = inputAmountNumber;
              const unitPrice = parseFloat(document.getElementById("unitPrice1").innerText) - 1129;
              document.getElementById("unitPrice1").innerText = unitPrice;

              const subTotal = document.getElementById("subTotal").innerText;
              const subTotalNumber = parseFloat(subTotal);
              const subTotalValue = subTotalNumber - 1129;
              document.getElementById("subTotal").innerText = subTotalValue;

              const taxAmount = parseFloat(document.getElementById("taxAmount").innerText);
              
              const updatedTax = subTotalValue*0.15;
              document.getElementById("taxAmount").innerText = updatedTax;
        
              document.getElementById("netTotal").innerText = subTotalValue+updatedTax;

              }
            });


const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function(){
      const inputAmount = parseFloat(document.getElementById("input2").value);
      const inputAmountNumber = inputAmount + 1;
      document.getElementById("input2").value = inputAmountNumber;
      const unitPrice = parseFloat(document.getElementById("unitPrice2").innerText) + 1189;
      document.getElementById("unitPrice2").innerText = unitPrice;

      const subTotal = document.getElementById("subTotal").innerText;
      const subTotalNumber = parseFloat(subTotal);
      const subTotalValue = subTotalNumber + 1189;
      document.getElementById("subTotal").innerText = subTotalValue;

      const taxAmount = parseFloat(document.getElementById("taxAmount").innerText);
      const updatedTax = subTotalValue*0.15;
      document.getElementById("taxAmount").innerText = updatedTax;

      document.getElementById("netTotal").innerText = subTotalValue+updatedTax;

    });

const minusBtn2 = document.getElementById("minusBtn2");
        minusBtn2.addEventListener("click", function(){
              const inputAmount = parseFloat(document.getElementById("input2").value);
              if (inputAmount == 0 ) {}
              else {
              const inputAmountNumber = inputAmount - 1;
              document.getElementById("input2").value = inputAmountNumber;
              const unitPrice = parseFloat(document.getElementById("unitPrice2").innerText) - 1189;
              document.getElementById("unitPrice2").innerText = unitPrice;

              const subTotal = document.getElementById("subTotal").innerText;
              const subTotalNumber = parseFloat(subTotal);
              const subTotalValue = subTotalNumber - 1189;
              document.getElementById("subTotal").innerText = subTotalValue;

              const taxAmount = parseFloat(document.getElementById("taxAmount").innerText);
              const updatedTax = subTotalValue*0.15;
              document.getElementById("taxAmount").innerText = updatedTax;

              document.getElementById("netTotal").innerText = subTotalValue+updatedTax;

              }
            });
