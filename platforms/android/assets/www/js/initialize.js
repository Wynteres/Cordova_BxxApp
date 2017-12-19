
function Initializer(){

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://bxxbar.com.br/wp-json/bxxapp/programacao?showposts=6",
		  "method": "GET",
		  "headers": {
		    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
		    "cache-control": "cache",
		    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
		  }
		}

		$.ajax(settings).done(function (response) {
			response.forEach((item) => {
				$("#programacao-slider").append('<div class="slider--programacao-item px-3"><h1 class="text-center">' + item.title + '<small class="d-block">' + item.subtitle + '</small></h1><img src="' + item.thumb + '" class="img-fluid mt-5 d-block mx-auto"></div>');
			})
			addSlick()
		});
}
