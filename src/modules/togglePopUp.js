const togglePopUp = () =>{
    let popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),		
        popupContent = document.querySelector('.popup-content'),
        count = 0,
        moveAnimation; 
    

    const popupAnimate = () => {
        moveAnimation = requestAnimationFrame(popupAnimate);
        
            if(count < 50) {
                   count += 1;
                   popupContent.style = `transform: translateX(-${count}px)`;
            } else {
                    cancelAnimationFrame(moveAnimation);
            }
    };


    const setAnimation = () => {

        if(screen.width > 760) {
            popup.style = `display: block`;
            popupAnimate();
        } else {
            popup.style = `display: block`;
        }
    };
    

    popupBtn.forEach((item) => {
        item.addEventListener('click', () => {
            setAnimation();
        });
    });


    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')){
            popup.style = `display: none`;
            count = 0;
        } else {
            target = target.closest('.popup-content');
                
            if(!target){
                popup.style = `display: none`;
            }
        }					
    });
};

export default togglePopUp;