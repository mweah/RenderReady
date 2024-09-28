document.addEventListener("DOMContentLoaded", function() {
    const purchaseButtons = document.querySelectorAll('.purchase-btn');
  

    //biar muncul custom message
    purchaseButtons.forEach(button => {
      button.addEventListener('click', () => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'Added to cart!';
        messageDiv.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: orange;
          color: white;
          padding: 15px 25px;
          border-radius: 5px;
          font-weight: bold;
          z-index: 10000;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        `;
  
        const overlayDiv = document.createElement('div');
        overlayDiv.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); 
          z-index: 9999; 
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        `;
  
        //appendChild overlayDiv messageDiv ke body biar message muncul
        document.body.appendChild(overlayDiv);
        document.body.appendChild(messageDiv);
  
        overlayDiv.style.opacity = 1;
        messageDiv.style.opacity = 1;
  
        setTimeout(() => {
          overlayDiv.style.opacity = 0;
          messageDiv.style.opacity = 0;
          setTimeout(() => {
            document.body.removeChild(overlayDiv);
            document.body.removeChild(messageDiv);
          }, 300); 
        }, 1500); 
      });
    });
  });