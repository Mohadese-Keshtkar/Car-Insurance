// selected Form
const form = document.querySelector(".contentList")

// this Event for better loadeing js code...
document.addEventListener("DOMContentLoaded", afterLoad)

// submit function for  Car Insurance form  
document.addEventListener("submit", submitForm)


function submitForm(e) {
    e.preventDefault() // Prevent page refresh

    const make = document.querySelector("#boxOptions").value
    const year = document.querySelector("#years").value
    const level = document.querySelector("input[name='insurance']:checked")

    if (make === "" || years === "" || level === "") {
        displayMsg('مدل خودرو را انتخاب کنید')
    } else {
        alert('ثبت شد✅')

        let insuranceCase = {
            make: make,
            year: year,
            level: level

        }
    }
}


// Price calculation function
function calculaterPrice(info) {
    let price = 0, base = 2000000
    const make = info.make

    switch (make) {
        case "1":
            price = base * 1.15
            break
        case "2":
            price = base * 1.30
            break
        case "3":
            price = base * 1.80
            break

    }



    // Calculate Year
    // get the year
    const
        year = info.year,
        // diffrence = getYearDiffrence(year)
        diffrence = function (year) {
            // Convert to number
            let
                persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
                arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
                fixNumbers = function (str) {
                    if (typeof str === 'string') {
                        for (var i = 0; i < 10; i++) {
                            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                        }
                    }
                    return parseInt(str);
                };

            // get max year
            const now = new Date().toLocaleDateString('fa-IR')
            let nowYear = now.slice(0, 4)
            let max = fixNumbers(nowYear)
            year = max - year

            return year
        }

    // 3% cheaper for each year
    price = price - ((diffrence * 3) / 100) * price

}


// funstion display message
function displayMsg(msg) {

    // create new div for error
    const messageBox = document.createElement("div")

    //add classlist to html codes
    messageBox.classList = "error"

    messageBox.innerText = msg

    form.insertBefore(messageBox, document.querySelector(".CarModel"))

    setTimeout(() => {
        document.querySelector(".error").remove()
    }, 5000)


}



function afterLoad() {
    yearsFunction()
}


function yearsFunction() {

    //Convert string to number

    let
        iranainNumber = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],

        arabicNumber = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],

        fixNumbers = function (str) {

            if (typeof str === 'string') {

                for (let i = 0; i < 10; i++) {

                    str = str.replace(iranainNumber[i], i).replace(arabicNumber[i], i);

                }
            }

            return parseInt(str);
        }



    //get new year
    let curentYear = new Date().toLocaleDateString('fa-IR')

    //Slice year Data
    curentYear = curentYear.slice(0, 4)

    //get max year
    let maxYear = fixNumbers(curentYear)
    console.log(maxYear)


    //get min year
    let minYear = maxYear - 20
    console.log(minYear)

    // access to the select tag
    const selectYear = document.querySelector('#years')

    //  Create firs option for makeTag
    const tagOption = document.createElement('option')
    tagOption.innerText = `انتخاب`
    tagOption.value = "";

    //create option for loop
    for (let i = maxYear; i >= minYear; i--) {
        // creat tag 
        const tagOption = document.createElement('option')
        tagOption.value = i;
        tagOption.innerText = `سال ${i}`

        //append option tag
        selectYear.appendChild(tagOption)


        let maxYear = fixNumbers(curentYear)
        // console.log(maxYear);

        // get min year
        let minYear = maxYear - 20

    }
}

yearsFunction()