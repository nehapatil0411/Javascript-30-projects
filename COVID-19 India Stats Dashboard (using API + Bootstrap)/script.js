async function fetchCovidData(){
    try{
        const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        const data = await response.json();
        const regionalData = data.data.regional;

        const tableBody = document.querySelector("#covidTable tbody");

        
    regionalData.forEach((state,index) =>{
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${index + 1}</td>
         <td>${state.loc}</td>
          <td>${state.confirmedCasesIndian}</td>
          <td>${state.confirmedCasesForeign}</td>
           <td>${state.discharged}</td>
            <td>${state.deaths}</td>
            <td>${state.totalConfirmed}</td>
          
       `;
        tableBody.appendChild(row);
    });
}
catch (error){
    console.error("error fetching data: ", error);

}

}
fetchCovidData();
