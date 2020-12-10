function displayModal(elId) {

	//javascript getboundingrect
	var targetModal = document.getElementById(elId);

	var domRect = targetModal.getBoundingClientRect(targetModal);
	//{"x":960,"y":0,"width":450,"height":300,"top":0,"right":1410,"bottom":300,"left":960}

	targetModal.style.opacity = 1;

	//top pos (default)
	targetModal.style.top = (domRect.height*-1) + 'px';
	
	//create an overlay div on the page
	var newOverlay = document.createElement("div");
	newOverlay.setAttribute("id", "overlay");
	document.body.appendChild(newOverlay); 

	document.getElementById(elId).remove();

	newOverlay.appendChild(targetModal);
	targetModal.style.display = 'block';

	setTimeout(() => {

		targetModal.style.top = '20vh';
		//targetModal.style.right = '0px';

		newOverlay.addEventListener("click", (ev) => {

			if (event.target.id == "overlay") {
				closeModal(targetModal);
			}
			
		});

	}, 1)

}

function closeModal(targetModal) {
	var overlay = document.getElementById("overlay");
	targetModal.style.display = 'none';
	overlay.remove();
	//add the modal by onto the page (but hidden)
	document.body.appendChild(targetModal); 
}