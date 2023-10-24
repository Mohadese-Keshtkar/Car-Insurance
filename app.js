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
        html.displayMsg('مدل خودرو را انتخاب کنید')
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


let config = {
    complete: 1.5,
    basic: 1.3,
}