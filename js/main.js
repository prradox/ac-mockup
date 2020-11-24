document.addEventListener("DOMContentLoaded", function() {
    let addButtons = document.querySelectorAll('.addRecommendationButton');
    for(let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener("click", function(e) {
            e.preventDefault();
            let root = e.target.parentElement.parentElement.parentElement.parentElement;
            let template = document.querySelector('#recommendationTemplate');
            let newRecommendation = template.cloneNode(true);
            newRecommendation.removeAttribute('id');
            root.appendChild(newRecommendation);
            let closeButton = newRecommendation.querySelector('.closeRecommendationButton');
            closeButton.addEventListener("click", function(e) {
                e.preventDefault();
                let root = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                root.classList.add("d-none");
                root.remove();
            });
            let shrinkButton = newRecommendation.querySelector('.shrinkRecommendationButton');
            shrinkButton.addEventListener("click", function(e) {
                e.preventDefault();
                let root = e.target.parentElement.parentElement.querySelector('.recommendationContent');
                if(root.classList.contains('d-none')) {
                    root.classList.remove('d-none');
                } else {
                    root.classList.add('d-none');
                }
            });
            newRecommendation.classList.remove('d-none');            
        })
    }

    let closeButtons = document.querySelectorAll('.closeRecommendationButton');
    for(let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function(e) {
            e.preventDefault();
            let root = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            root.classList.add("d-none");
            root.remove();
        })
    }

    let shrinkButtons = document.querySelectorAll('.shrinkRecommendationButton');
    for(let i = 0; i < shrinkButtons.length; i++) {
        shrinkButtons[i].addEventListener("click", function(e) {
            e.preventDefault();
            let root = e.target.parentElement.parentElement.querySelector('.recommendationContent');
            if(root.classList.contains('d-none')) {
                root.classList.remove('d-none');
            } else {
                root.classList.add('d-none');
            }
        })
    }
})