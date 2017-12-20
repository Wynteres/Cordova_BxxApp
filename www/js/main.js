/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 

function addSlickProgramacao() { 
	$('.slider--programacao').slick({
		infinite : false,
		dots : false,
		arrows : false,
		autoplay : true,
		autoplaySpeed : 3500,
		slidesToShow : 1,
		slidesToScroll : 1
	});
}
 function addSlickCover() {
	$('.slider--coberturas').slick({
		infinite : false,
		dots : false,
		arrows : false,
		autoplay : true,
		autoplaySpeed : 3500,
		slidesToShow : 1,
		slidesToScroll : 1
	});
 }

 function removeLoader(){
 	$('.ajax-loader').fadeOut('slow').removeClass("loader-active");
 }
$(document).ready(function() {

	$('#menuToggle').on('click tap', function(e) {
		e.preventDefault();

		$('.navbar-menu').toggleClass('active');
		$('#backMask').toggleClass('active');
		// $('html, body').toggleClass('navbar-active');
		$('.btn--lista-trigger').toggleClass('menu-active');
	});

	// Manejando o chamado da lista de nomes
	$('.lista-trigger').on('click tap', function() {
		$('.home--lista-mask').not('.lista-general').toggleClass('active');
		$('html, body').animate({
			scrollTop : $('.lista--home').offset().top
		})
	});

	$('.lista-trigger-general').on('click tap', function() {
		$('.home--lista-mask.lista-general').toggleClass('active');
	});

	// Ativando os itens da lista ao clicar
	$('.home--lista-checkbox').on('click tap', function() {
		$(this).toggleClass('active');

		if ($(this).find('input').attr('checked')) {
			$(this).find('input').removeAttr('checked');
		} else {
			$(this).find('input').attr('checked', '');
		}
	})
});
