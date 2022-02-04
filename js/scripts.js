//these is a listener that responds to clicks on the photo

var visible = false

$('#photo').on('click', function () {
	if (visible === false) {
  	$('#colors').fadeIn()
    visible = true
  } else {
  	$('#colors').fadeOut()
    visible = false
  }

})
