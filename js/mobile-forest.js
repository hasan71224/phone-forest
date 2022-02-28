const searchPhone = () =>{
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
    //clear field
    searchField.value = " ";

    // call api
    // if(searchText == 0){

    // }
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url)
    .then (response => response.json())
    .then (data => displayPhones(data.data))  
}
//show in display
const displayPhones = data =>{
    const searchResult = document.getElementById("search-result");
    searchResult.textContent=" ";
    data.forEach(phoneData => {
        const div = document.createElement('div');
        div.classList.add('col');
        // create div and new Element...................
        div.innerHTML = `
            <div class="card h-100">
                <img src="${phoneData.image}" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${phoneData.phone_name}</h5>
                  <p class="card-text">${phoneData.brand}</p>
                  <a onclick=loadPhoneDetails(${phoneData.brand})" href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });
};
