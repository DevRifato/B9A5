/*===============================================================================================================
                                    functionalty of function
===============================================================================================================*/
// getting all id and value :
function settingIdByElementValue(idOfElement, valu) {
  document.getElementById(idOfElement).innerText = valu;
}

// makeing diffrent funtion in single function :
function totalPrice(id, valu) {
  const totalPrice = document.getElementById(id).innerText;
  const totalPriceConverted = parseInt(totalPrice);
  const sum = totalPriceConverted + parseInt(valu);
  settingIdByElementValue(id, sum);
}

/*===============================================================================================================
                                    getInputValueById()
===============================================================================================================*/
function getInputValueById(idOfElement) {
  const input = document.getElementById(idOfElement);
  const inputValue = input.value;
  return inputValue;
}
/*===============================================================================================================
                                selecting seat and adding title
===============================================================================================================*/
const selectedAllButton = document.querySelectorAll("#single-seat");
let countingTo1 = 0;
let countingTo2 = 40;
// ----------- cheaking loop
for (const seatAdding of selectedAllButton) {
  seatAdding.addEventListener("click", function (r) {
    if (countingTo1 <= 3) {
      countingTo1 = countingTo1 + 1;
      countingTo2 = countingTo2 - 1;
      totalPrice(
        "total-price",
        document.getElementById("singleTicketPrice").innerText
      );
      const selectedGone = r.target.innerText;
      const price = document.getElementById("singleTicketPrice").innerText;
      const selectedContainer = document.getElementById("selected-container");
      const div = document.createElement("div");
      const title1 = document.createElement("h4");
      title1.innerText = selectedGone;
      const title2 = document.createElement("h4");
      title2.innerText = "Economy";
      const title3 = document.createElement("h4");
      title3.innerText = price;
      //   title - 1
      div.appendChild(title1);
      //   title - 2
      div.appendChild(title2);
      //   title - 3
      div.appendChild(title3);
      div.className = "flex justify-between w-full text-left mb-4";
      selectedContainer.appendChild(div);
      r.target.classList.add("text-white");
      r.target.classList.add("bg-[#1DD100]");
      r.target.classList.add("pointer-events-none");
    } else {
      alert("You can't select more then 4 Sets"); // aleart when limit get crosed
    }

    settingIdByElementValue("countingSeat", countingTo1);
    settingIdByElementValue("leftSeat", countingTo2);
    sumOfAllTickets();

    // getting innet Text :
    const seatOfBus = parseInt(
      document.getElementById("countingSeat").innerText
    );
    if (seatOfBus > 3) {
      document.getElementById("applyed").removeAttribute("disabled");
    } else {
      document.getElementById("applyed").setAttribute("disabled", true);
    }

    document
      .getElementById("number-phone")
      .addEventListener("keyup", function (event) {
        const text = event.target.value.toString().length;
        const button = document.getElementById("modal-btn");
        if (text > 0 && seatOfBus > 0) {
          button.removeAttribute("disabled");
        } else {
          button.setAttribute("disabled", true);
        }
      });
  });
}

/*===============================================================================================================
                                    sumOfAllTickets()
===============================================================================================================*/
function sumOfAllTickets() {
  const totalPrice = document.getElementById("total-price").innerText;
  const totalPriceConverted = parseInt(totalPrice);
  settingIdByElementValue("total-price-of-ticket", totalPriceConverted);
}

const button = document.getElementById("applyed");
button.addEventListener("click", function () {
  const coponInput = getInputValueById("copupon");

  //   cheaking coupon valid or not
  if (coponInput === "NEW15") {
    const grandTotal = document.getElementById("total-price").innerText;
    const totalPriceConverted = parseInt(grandTotal);
    const discount = totalPriceConverted * 0.15;
    const sumOfAllTickets = totalPriceConverted - discount;
    document.getElementById("discount").innerText = discount;
    settingIdByElementValue("total-price-of-ticket", sumOfAllTickets);
    document.getElementById("hidden").className = "hidden";
    document.getElementById("hiddenDiscount").classList.remove("hidden");
  } else if (coponInput === "Couple 20") {
    const grandTotal = document.getElementById("total-price").innerText;
    const totalPriceConverted = parseInt(grandTotal);
    const discount = totalPriceConverted * 0.2;
    const sumOfAllTickets = totalPriceConverted - discount;
    document.getElementById("discount").innerText = discount;
    settingIdByElementValue("total-price-of-ticket", sumOfAllTickets);
    document.getElementById("hidden").className = "hidden";
    document.getElementById("hiddenDiscount").classList.remove("hidden");
  } else {
    alert("Please Add Valid Coupon"); // aleart for coupon
  }
});
// --------------------------------------------------------------------------------------------------
