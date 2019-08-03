const ourCommand = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
        
    
    commandPhoto.forEach(elem => {
        let ourPhotos; 	
        elem.addEventListener('mouseenter', (event) => {
            ourPhotos = event.target.src;  
            event.target.src = event.target.dataset.img;
        }); 


        elem.addEventListener('mouseleave', (event) => {
            event.target.src = ourPhotos;
        }); 		
     });
};

export default ourCommand;