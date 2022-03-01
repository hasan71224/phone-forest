document.getElementById('error-massage').style.display = 'none';
const searchPhone = async () =>{
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    //clear field
    searchField.value = " ";

    // call api
    if(searchText == 0){
        console.log("write valueable text");
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch (url)
    .then(res => res.json())
    .then(data => displayPhones(data.data)) 
    }  
}
//show in display
const displayPhones = data =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent=" ";
    data.forEach(phoneData => {
        console.log(phoneData);
        const div = document.createElement('div');
        div.classList.add('col');
        // create div and new Element...................
        div.innerHTML = `
            <div onclick="loadPhoneDetails(${phoneData.slug})" class="card h-100">
                <img src="${phoneData.image}" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">${phoneData.phone_name}</h5>
                  <p class="card-text">${phoneData.brand}</p>
                  <a onclick="loadPhoneDetails('${phoneData.slug}')" href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    })
}
//indivisual phone finding
const loadPhoneDetails = phoneSlug =>{
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
    // console.log(url);
    fetch (url)
    .then (res => res.json())
    .then (data => phoneDetailsDisplay(data.data))
    .catch(error => displayError(error));
}
// error function
const displayError = error =>{
    document.getElementById('error-massage').style.display = 'block';
}

const phoneDetailsDisplay = phoneData =>{
    console.log(phoneData);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = ' ';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${phoneData.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><b>Name:</b> ${phoneData.name}</h5>
            <p class="card-text"><b>ChipSet:</b> ${phoneData.mainFeatures.chipSet}</p>
            <p class="card-text"><b>Storage:</b> ${phoneData.mainFeatures.memory}</p>
            <p class="card-text"><b>Sensors:</b> ${phoneData.mainFeatures.sensors}</p>
            <p class="card-text"><b>Others:</b> ${phoneData.others}</p>
            
        </div>
    `
    phoneDetails.appendChild(div);
}
