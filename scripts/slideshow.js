/*
	CreateSlideshow() is a constructor function.
	We define other methods in protype property of this function.
*/
function CreateSlideshow(id, data) {
    this.data = data;
    this.id = id;
    this.selectedObj = data.images[0];
}
CreateSlideshow.prototype = {
    constructor: CreateSlideshow,
    /*
		createShow() is used to generate html content of the slideshow.
		We bind prevNextClicked() method to onclick event of these buttons.
    */
    createShow: function() {
        var data = this.data,
            id = this.id,
            selectedObj = this.selectedObj,
            html = [];
        html.push(
            '<div class="show_element show_header">' + data.title + '</div>',
            '<img class="show_element show_image" src="' + selectedObj.path + '">',
            '<div class="show_element show_caption">' + selectedObj.caption + '</div>',
            '<div class="show_element show_button">',
            '<div class="button prev_button">Prev</div>',
            '<div class="button next_button">Next</div>',
            '</div>'
        );
        html = html.join('');
        document.getElementById(id).innerHTML = html;
        document.querySelector('#' + id + ' .prev_button').onclick = this.prevNextClicked.bind(this, 'prev');
        document.querySelector('#' + id + ' .next_button').onclick = this.prevNextClicked.bind(this, 'next');
    },
    /*
		prevNextClicked() is called on click of prev, next button.
		In this function we check the action and set selectedObj property accordingly.
    */
    prevNextClicked: function(action) {
        var imageArray = this.data.images,
            selectedObj = this.selectedObj,
            selectedIndex = imageArray.indexOf(selectedObj);
        if(action === 'next') {
        	if (selectedIndex !== imageArray.length - 1) {
	            this.selectedObj = imageArray[selectedIndex + 1];
	            this.changeImage();
	        }
        } else {
        	if (selectedIndex) {
	            this.selectedObj = imageArray[selectedIndex - 1];
	            this.changeImage();
	        }
        }
    },
    /*
		changeimage() changes src of image and html content of caption.
    */
    changeImage: function() {
        var selectedObj = this.selectedObj,
            id = this.id;
        document.querySelector('#' + id + ' .show_image').setAttribute('src', selectedObj.path);
        document.querySelector('#' + id + ' .show_caption').innerHTML = selectedObj.caption;
    }
}
/*
	In initSlideshow() we create an object and call createShow() method of the object.
*/
function initSlideshow(id, data) {
    var slideshowObject = new CreateSlideshow(id, data);
    slideshowObject.createShow();
}
