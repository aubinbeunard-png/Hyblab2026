const initContentSlide = async function () {
    console.log("CONTENT")
}

const createEmptyContent = async function(){
    let response = await fetch('data/contaminationMiniere.json');
    const data = await response.json();
    const nVolet = data.nVolet;
    let nSlides = 0;
    for (let i = 0; i < nVolet; i++) {
        nSlides += data.volet[i].nBullet;
    }

    console.log(nSlides)

    const endSlide = document.querySelector("#credit-slide");
    console.log(document.querySelector('#credit-slide'))
    const sliderWrapper = document.querySelector(".swiper-wrapper");

    console.log(sliderWrapper)
    console.log(endSlide)
    for(let i = 0; i<nSlides; i++){
        let slide = document.createElement("section");
        slide.classList.add("swiper-slide")
        slide.id = "content-slide"

        // Ajout du contenu

        sliderWrapper.insertBefore(slide, endSlide);

        console.log(i)

        
    }

}