// Variables
const form = document.querySelector(".contentList")
const html = new HTMLUI()


// Events
document.addEventListener('DOMContentLoaded', afterLoad)
document.addEventListener('submit', submitForm)


// Function
function afterLoad() {
    // get the current year and fix it
    html.displayYears()
}


// submit form
function submitForm(e) {
    e.preventDefault()

    const make = document.querySelector('#boxOptions').value
    const year = document.querySelector('#year').value
    const level = document.querySelector('input[name="level"]:checked')

    if (make === "" || year === "" || level === "") {
        displayMsg('مدل خودرو را انتخاب کنید')
    } else {
        console.log('ثبت شد✅')

        // console.log(insuranceCase(make, years, level))

        // STEP1: get info
        let insuranceCase = {
            make: make,
            year: year,
            level: level
        }


        // STEP3: show result message box
        const insurance = new InsuranceProccess(make, year, level)
        html.showResult(insurance.calculatePrice(insuranceCase), insuranceCase)

    }

}

// Price calculation function

function calculaterPrice(info) {
    // variables
    let price = config.price;

    // + Calculate the price based on the Make chosen by user
    price = calMake(info.make, price);

    // + Calculate the price based on the Year chosen by user
    const year = fixNumbers(info.year);

    // + Calculate year diffrence
    const diffrence = yearDiffrence(year);

    // 3% cheaper for each year
    price = price - ((diffrence * 3) / 100) * price;

    // + Calculate the price based on the level chosen by user
    price = calLevel(info.level, price);
}

// year diffrence

function yearDiffrence(year) {
    const max = currentYearr();
    const diffrence = max - year;
    return diffrence;
}


// get the price based on the chosen make 

function calMake(chosenMake, price) {
    // variables
    const make = chosenMake;
    const basePrice = config.basePrice;
    const make1 = config.make1;
    const make2 = config.make2;
    const make3 = config.make3;

    switch (make) {
        case "1":
            return (price = basePrice * make1);
        case "2":
            return (price = basePrice * make2);
        case "3":
            return (price = basePrice * make3);
    }
}


// calculate the price based on the chosen level.........

function calLevel(chosenLevel, price) {
    const basic = config.basic;
    const complete = config.complete;
    if (chosenLevel == "basic") {
        return (price = price * basic);
    } else {
        return (price = price * complete);
    }
}

// User Interface (UI) Functions

// Display message box

function displayMsg(msg) {
    // create message box
    const messageBox = document.createElement("div");
    messageBox.classList = "error";
    messageBox.innerText = msg;

    // show message
    form.insertBefore(messageBox, document.querySelector(".CarModel"));

    // remove message box
    setTimeout(() => {
        document.querySelector(".error").remove();
    }, 5000);
}

// get the current year

function currentYearr() {
    let curentYear = new Date().toLocaleDateString("fa-IR");

    // Slice date
    curentYear = curentYear.slice(0, 4);

    // get max year
    let maxYear = fixNumbers(curentYear);
    // previous years
    preYears(maxYear);
    return maxYear;
}

// convert strings to eng

function fixNumbers(str) {
    // Convert to number
    let persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
    ],
        arabicNumbers = [
            /٠/g,
            /١/g,
            /٢/g,
            /٣/g,
            /٤/g,
            /٥/g,
            /٦/g,
            /٧/g,
            /٨/g,
            /٩/g,
        ];
    if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }

    return parseInt(str);
}

// previous years
// show previous years based on the current year

function preYears(maxYear) {
    // get min year
    let minYear = maxYear - 20;

    // create first option tag for title
    optionMaker("", `انتخاب`);

    // create a for loop for making all the option tags
    for (let i = maxYear; i >= minYear; i--) {
        optionMaker(i, `سال ${i}`);
    }
}

// make option tags based on the given value & text

function optionMaker(optValue, optText) {
    // access to the select tag
    const yearSelectTag = document.querySelector("#year");

    // create option tag
    const optionTag = document.createElement("option");
    optionTag.value = optValue;
    optionTag.innerText = optText;

    // append option to the selectYear
    yearSelectTag.appendChild(optionTag);
}