const fruitArr = ["mango", "banana", "watermelon", "apple", 'graps', "sugercane", "pineapple", "iceapple",]
const searchInp = document.getElementById("search_inp")



    searchInp.addEventListener("keyup", (elem) => {
        const search_inp_valu = searchInp.value.toLowerCase();
        const filterFruits = fruitArr.filter((elem) => elem.toLowerCase().startsWith(search_inp_valu));
        renderFruits(filterFruits)
        
    })



let renderFruits = (arr) => {
    let Result = document.querySelector("#result");
    Result.innerHTML = '';
    arr.forEach(element => {
        
        const clutter = `<li>${element}</li>`
        Result.innerHTML += clutter
    });
}
renderFruits(fruitArr)