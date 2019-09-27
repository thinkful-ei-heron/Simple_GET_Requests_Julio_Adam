function getDogImage(link) {
    fetch(link)
        .then(response => response.json())
        .then(responseJson => 
            generateHtml(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}
function createInputLink() {
    $('.dog-box').submit('.submit_button', event => {
        event.preventDefault();
        let inputValue = $('.dog_breed').val();
        let link = `https://dog.ceo/api/breed/${inputValue}/images/random`;
        getDogImage(link);
    })
}
function generateHtml(responseJson) {
    if(responseJson.status !== 'error') {
        let link = `<img src='${responseJson.message}' alt='results-image'>`;
        $('.results').html(link);
    } else {
        let messege = `<h3>${responseJson.message}</h3>`
        $('.results').html(messege);
    }
}
$(createInputLink);