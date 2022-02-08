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

var data = [
  {
    id: 'kilauea1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Kilauea_Fissure_8_cone_erupting_on_6-28-2018.jpg',
    palette: [
      '#715880',
      '#FFAB46',
      '#003961',
      '#B4555B',
      '#F14E2D'
    ]
  },
  //{
  //  id: 'kilauea2',
  //  image: 'https://www.travelweekly.com/uploadedImages/Art/2021/1011/T1011KILAUEA_C_HR.jpg?n=9562&width=1540&height=866&mode=crop&Anchor=MiddleCenter',
  //  palette: [
  //    '#483F78',
  //    '#F9EBBB',
  //    '#DB4B3A',
  //    '#8CAFD5',
  //    '#FDE0DF'
  //  ]
//  },
//  {
//    id: 'kilauea3',
//    image: 'https://pbs.twimg.com/media/Euii2H3UUAQ6APt?format=jpg&name=large',
//    palette: [
  //    '#FDAE65',
  //    '#2C3056',
  //    '#B0BDD3',
  //    '#BA3119',
  //    '#1C2628'
//    ]
//  }
]

data.forEach(function(record) {
  $('#container').append(`
    <div id = "${record.id}" class='carousel'>
      <div id = "photo">
      <img class= "volcanoes" src="${record.image}">
      </div>
      <div id = "colors">
        <div class = "swatch" id="swatch1">${record.palette[0]}
        </div>
        <div class = "swatch" id="swatch2">${record.palette[1]}
        </div>
        <div class = "swatch" id="swatch3">${record.palette[2]}
        </div>
        <div class = "swatch" id="swatch4">${record.palette[3]}
        </div>
        <div class = "swatch" id="swatch5">${record.palette[4]}
        </div>
      </div>
  </div>
  `)

})


//  $("swatch1").css("background-color",palette[0]);
//  $("swatch2").css("background-color",palette[1]);
//  $("swatch3").css("background-color",palette[2]);
//  $("swatch4").css("background-color",palette[3]);
//  $("swatch5").css("background-color",palette[4]);

//})
