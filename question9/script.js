const URL = 'https://jsonplaceholder.typicode.com/todos';
const Previous_btn_Elem = document.querySelector("#Previous_btn");
const Get_data_Elem = document.querySelector("#Get_data");
const Next_data_Elem = document.querySelector("#Next_data");
const data_list_Elem = document.querySelector("#data_list");
const data_status_Elem = document.querySelector("#data_status");
const loader_Elem = document.querySelector(".loader-container");
let jsonData;
let dataIndex = 1

const renderData = (item) => {
    data_list_Elem.innerHTML = ""; 
    // console.log(data)
    // data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `ID: ${item.id}  Title: ${item.title}
    <input type="checkbox" checked>
    `;

    //     // listItem.textContent= item.id;
    //     // listItem.textContent = item.title;
    //     data_list_Elem.appendChild(listItem);
    // });
    data_list_Elem.appendChild(listItem);
};

const fetchData = async () => {
    try {
        data_status_Elem.textContent = "Fetching data...";
        // loader_Elem.style.display = "block";

        const response = await fetch(`${URL}/${dataIndex}`);
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        jsonData = await response.json();
        console.log(jsonData)
        // loader_Elem.style.display = "none";
        data_status_Elem.textContent = "Data Fetched Successfully";
        data_status_Elem.style.color = "green";
        Next_data_Elem.style.display = "initial"
        renderData(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
        data_status_Elem.textContent = "Error fetching data";
        data_status_Elem.style.color = "red";
        // loader_Elem.style.display = "none"; 1 
    }
};

Get_data_Elem.addEventListener("click", () => {
    dataIndex = 1;
    fetchData();
});
Previous_btn_Elem.addEventListener("click", () => {
   if( dataIndex === 0){
     data_list_Elem.textContent="NO previous data avaiable"
   }
   else{
      dataIndex-= 1;
      fetchData();
   }
  
     
})
Next_data_Elem.addEventListener("click", () => {
    Previous_btn_Elem.style.display="initial"
    dataIndex += 1;
    fetchData()
})
