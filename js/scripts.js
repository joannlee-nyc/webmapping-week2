var data = [
  {
    id: 'kilauea1',
    order: '1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Kilauea_Fissure_8_cone_erupting_on_6-28-2018.jpg',
    palette: [
      '#715880',
      '#FFAB46',
      '#003961',
      '#B4555B',
      '#F14E2D'
    ]
  },
  {
    id: 'kilauea2',
    order: '2',
    image: 'https://www.travelweekly.com/uploadedImages/Art/2021/1011/T1011KILAUEA_C_HR.jpg?n=9562&width=1540&height=866&mode=crop&Anchor=MiddleCenter',
    palette: [
      '#483F78',
      '#F9EBBB',
      '#DB4B3A',
      '#8CAFD5',
      '#FDE0DF'
    ]
  },
  {
    id: 'kilauea3',
    order: '3',
    image: 'https://pbs.twimg.com/media/Euii2H3UUAQ6APt?format=jpg&name=large',
    palette: [
      '#FDAE65',
      '#2C3056',
      '#B0BDD3',
      '#BA3119',
      '#1C2628'
    ]
  }
]





data.forEach(function(record) {
  $('#container').append(`
    <div id = "${record.id}" >
      <div id = "photo">
      <img class= "volcanoes" src="${record.image}">
      </div>
      <div id = "colors" class="${record.order}">
        <div style='background-color: ${record.palette[0]}' class = "swatch" id="swatch1">${record.palette[0]}
        </div>
        <div style='background-color: ${record.palette[1]}' class = "swatch" id="swatch2">${record.palette[1]}
        </div>
        <div style='background-color: ${record.palette[2]}' class = "swatch" id="swatch3">${record.palette[2]}
        </div>
        <div style='background-color: ${record.palette[3]}' class = "swatch" id="swatch4">${record.palette[3]}
        </div>
        <div style='background-color: ${record.palette[4]}' class = "swatch" id="swatch5">${record.palette[4]}
        </div>
      </div>
  </div>
  `)

})


//these is a listener that responds to clicks on the photo

//data.forEach(function() {
//  $("#photo").click(function(){
//    $("#colors").toggle();
//  });
//});

var visible = false

$('#kilauea1').on('click', function () {
	if (visible === false) {
  	$('.1').fadeIn()
    visible = true
  } else {
  	$('.1').fadeOut()
    visible = false
  }

})

var visible = false

$('#kilauea2').on('click', function () {
	if (visible === false) {
  	$('.2').fadeIn()
    visible = true
  } else {
  	$('.2').fadeOut()
    visible = false
  }

})

var visible = false

$('#kilauea3').on('click', function () {
	if (visible === false) {
  	$('.3').fadeIn()
    visible = true
  } else {
  	$('.3').fadeOut()
    visible = false
  }

})
