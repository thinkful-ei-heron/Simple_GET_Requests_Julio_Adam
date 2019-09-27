function getDogImage(link) {
    console.log(link);
    fetch(link)
        .then(response => response.json())
        .then(responseJson => 
            generateHtml(responseJson))
        .catch(error => console.error(error));
  
}

function createInputLink() {
    $('.dog-box').submit('.submit_button', event => {
        event.preventDefault();
        let inputValue = $('.amount_dogs').val();
        let link = `https://dog.ceo/api/breeds/image/random/${inputValue}`;
        getDogImage(link);
    })
}

function generateHtml(responseJson) {
    let array = responseJson.message
    let html = '';
    for(let i=0; i < array.length; i++) {
       html += `<img src='${array[i]}' alt='results'>`;
    }
    $('.results').append(html);
}

$(createInputLink);