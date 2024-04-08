



const para = document.getElementById("para")

async function fetchData() {
    try {

        const URL="https://jsonplaceholder.typicode.com/todos";

        const respose = await fetch(URL);
        const data = await respose.json()
        console.log(data);
        para.innerText = "data fetched successful"
    } catch (error) {

        para.innerText = "Failed to fetch data"

    }
}
fetchData()

