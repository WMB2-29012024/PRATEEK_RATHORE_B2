const URL = 'https://jsonplaceholder.typicode.com/todos';
const fetchButtonElem = document.querySelector('#fetch_button');
const pendingElem = document.querySelector('#pending');
const loaderContainerElem = document.querySelector('.loader-container');
const noDataElem = document.querySelector('#no_data');
const titleDataElem = document.querySelector("#titleData");
const dataLengthElem = document.querySelector('#data_length');
let jsonData;

let renderdata = (datalist)=>{

    titleDataElem.innerHTML="";    
   
    dataLengthElem.textContent = `data length: ${jsonData.length}`;
    
    datalist.forEach(data => {
        const clutter = `<li>${data.title}</li>`;
        titleDataElem.innerHTML += clutter;
    });
};

const fetchFunc = async (URL) => {
    try {
        pendingElem.textContent = '';
        noDataElem.style.display = 'none';
        loaderContainerElem.style.display = 'initial';
        const fetchData = await fetch(URL);
        jsonData = await fetchData.json();
        loaderContainerElem.style.display = 'none';
        pendingElem.textContent = 'Data fetched';
        renderdata(jsonData)
    } catch (error) {
        console.error(error);
        loaderContainerElem.style.display = 'none';
        pendingElem.textContent = 'Failed to fetch Data';
    }
};




fetchButtonElem.addEventListener('click', (e) => {
    fetchFunc(URL);
});