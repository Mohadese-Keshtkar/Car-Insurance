// select car year
let year = document.querySelector('#years')

// Add the last twenty years
function addNewYears() {
    let nowyear = 1402
    for (let i = 0; i <= 20; i++) {
        nowyear -= 1
        year.insertAdjacentHTML("beforeend", `
        <option>${nowyear}</option>
        
        `)
    }
}
addNewYears() //call function