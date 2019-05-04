

$(() => {
  // ////////////////////////////--BURGER-MENU--////////////////////////////////////

  $('.menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.menu').slideToggle(400);
  });

  // ////////////////////////--TABS--////////////////////////////////

  $('.tabs a').click(function () {
    $(this)
      .parents('.tab-wrap')
      .find('.tab-cont')
      .addClass('hide');
    $(this)
      .parent()
      .siblings()
      .removeClass('active');
    const id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this)
      .parent()
      .addClass('active');
    return false;
  });

  // /////////////////////////////--SLIDER--/////////////////////////

  $('.banner-slider').slick({
    dots: true,
    appendArrows: '.banner-slider__buttons',
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          prevArrow:
            '<button type="button" class="slick-prev"></button>',
          nextArrow:
            '<button type="button" class="slick-next"></button>',
        },
      },
    ],
  });

  $('.testimonial-slider').slick({
    dots: true,
    arrows: false,
  });

  $('.portfolio-slider').slick({
    dots: true,
    appendArrows: '.portfolio-slider__buttons',
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $navTabsSlider = $('.nav-tab-list');
  settings = {
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    infinite: false,
  };

  $navTabsSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this)
      .parents('.tab-wrap')
      .find('.tab-cont')
      .addClass('hide');
    $(this)
      .find('.slick-current')
      .siblings()
      .removeClass('active');
    const id = $(this).find('.slick-current a').attr('href');
    $(id).removeClass('hide');
    $(this)
      .find('.slick-current')
      .addClass('active');
    return false;
  });

  $(window).on('resize load', () => {
    if ($(window).width() > 767) {
      if ($navTabsSlider.hasClass('slick-initialized')) {
        $navTabsSlider.slick('unslick');
      }
      return;
    }

    if (!$navTabsSlider.hasClass('slick-initialized')) {
      return $navTabsSlider.slick(settings);
    }
  });
});

// //////////////////////////////////////--MAP--//////////////////////////////////////////////

function initMap() {
  const coordinates = { lat: -37.806006, lng: 144.961291 }, // map center
    markerImg = './src/img/marker.png', 

    // Map settings
    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 16, 
      disableDefaultUI: true, 
      scrollwheel: false, 
      styles: [
        // JSON map styles
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#523735',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#c9b2a6',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#dcd2be',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ae9e90',
            },
          ],
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#93817c',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#a5b076',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#447530',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f1e6',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#fdfcf8',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f8c967',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#e9bc62',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e98d58',
            },
          ],
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#db8555',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#806b63',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8f7d77',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#ebe3cd',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dfd2ae',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#b9d3c2',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#92998d',
            },
          ],
        },
      ],
    });

  // Marker
  marker = new google.maps.Marker({
    position: coordinates, 
    map, // id map
    animation: google.maps.Animation.BOUNCE,
    icon: markerImg,
  });
}

// Map launch
google.maps.event.addDomListener(window, 'load', initMap);
