// // select car year
// let year = document.querySelector('#years')

// // Add the last twenty years
// function addNewYears() {
//     let nowyear = 1402
//     for (let i = 0; i <= 20; i++) {
//         nowyear -= 1
//         year.insertAdjacentHTML("beforeend", `
//         <option>${nowyear}</option>

//         `)
//     }
// }
// addNewYears() //call function



const form = document.querySelector(".contentList")
document.addEventListener("DOMContentLoaded", afterLoad)
document.addEventListener("submit", submitForm)


function submitForm(e) {
    e.preventDefault() // Prevent page refresh

    const make = document.querySelector("#boxOptions").value
    const years = document.querySelector("#years").value
    const level = document.querySelector("input[name='insurance']:checked")

    if (make === "" || years === "" || level === "") {
        console.log('Error:)')
    } else {
        console.log('AllRight')
    }
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