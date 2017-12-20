
function initializer(){
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
			addSlickProgramacao();
		});


		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://bxxbar.com.br/wp-json/bxxapp/galerias?showposts=3",
		  "method": "GET",
		  "headers": {
		    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
		    "cache-control": "cache",
		    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
		  }
		}

		$.ajax(settings).done(function (response) {
			response.forEach((item) => {
				$("#galeria-slider").append('<div class="slider--coberturas-item px-3"><img src=' + item.thumb + ' class="img-fluid mt-3 d-block mx-auto"><h1 class="d-flex align-items-center justify-content-between mt-3"><span>' + item.title + '</span><div class="square p-3 text-center">16<small class="d-block">set</small></div></h1></div>');
			})
			addSlickCover();
			removeLoader();
		});
}

function initializeCasa(){

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://bxxbar.com.br/wp-json/wp/v2/pages/32",
		  "method": "GET",
		  "headers": {
		    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
		    "cache-control": "cache",
		    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
		  }
		}

		$.ajax(settings).done(function (response) {
			$("#title").append(response.title.rendered);
			$("#content").append(response.content.rendered);
			removeLoader();
		});
}


function initializeProgramacao(){

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://bxxbar.com.br/wp-json/bxxapp/programacao?showposts=-1",
		  "method": "GET",
		  "headers": {
		    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
		    "cache-control": "cache",
		    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
		  }
		}

		$.ajax(settings).done(function (response) {
			response.forEach((item) => {
				$("#Programacao-grid").append('<div class="slider--coberturas-item px-3 programacao-item"><img src=' + item.thumb + ' class="img-fluid mt-3 d-block mx-auto"><h1 class="programacao d-flex align-items-center justify-content-between mt-3"><span>' + item.title + '</span><div class="square p-3 text-center">16<small class="d-block">set</small></div></h1></div>');
			})
			removeLoader();
		});
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


function initializeGaleria(){
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://bxxbar.com.br/wp-json/bxxapp/galeria?id=" + findGetParameter("id"),
	  "method": "GET",
	  "headers": {
	    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
	    "cache-control": "cache",
	    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
	  }
	}

	$.ajax(settings).done(function (response) {
		response.forEach((item) => {
			console.log(item.img)
			$("#Galeria-grid").append('<div class="slider--coberturas-item px-3 programacao-item"><img src=' + item.img + ' class="img-fluid mt-3 d-block mx-auto"><h1 class="programacao d-flex align-items-center justify-content-between mt-3"></h1></div>');
		})
		removeLoader();
	});
}	

function initializeGalerias(){
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://bxxbar.com.br/wp-json/bxxapp/galerias?showposts=5",
		  "method": "GET",
		  "headers": {
		    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
		    "cache-control": "cache",
		    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
		  }
		}

		$.ajax(settings).done(function (response) {
			response.forEach((item) => {
				$("#Galeria-grid").append('<div class="slider--coberturas-item px-3 programacao-item"><a href="galeria.html?id=' + item.id + '"><img src=' + item.thumb + ' class="img-fluid mt-3 d-block mx-auto"><h1 class="programacao d-flex align-items-center justify-content-between mt-3"><span>' + item.title + '</span><div class="square p-3 text-center">'+item.dateAlternativeDay+'<small class="d-block">'+item.dateAlternativeMonth+'</small></div></h1></a></div>');
			})
			removeLoader();
		});
}

function getOffset(){
	offset =  parseInt($("#galeria-loader").val());
	return offset;
}
function LoadGalerias(){
		offset = getOffset();
		console.log(offset);
		$("#galeria-loader").val(offset+5);
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://bxxbar.com.br/wp-json/bxxapp/galerias?showposts=5&offset=" + offset,
		  "method": "GET",
		  "headers": {
		    "authorization": "Basic YWRtaW46RVlGOSNWeDMjTSZpQnA3biQq",
		    "cache-control": "cache",
		    "postman-token": "b84bc478-0b5b-3abd-020a-769aa4fe83ed"
		  }
		}

		$.ajax(settings).done(function (response) {
			response.forEach((item) => {
				$("#Galeria-grid").append('<div class="slider--coberturas-item px-3 programacao-item"><a href=""><img src=' + item.thumb + ' class="img-fluid mt-3 d-block mx-auto"><h1 class="programacao d-flex align-items-center justify-content-between mt-3"><span>' + item.title + '</span><div class="square p-3 text-center">'+item.dateAlternativeDay+'<small class="d-block">'+item.dateAlternativeMonth+'</small></div></h1></a></div>');
			})
			removeLoader();
		});
}