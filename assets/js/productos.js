// Productos para filtro selección - MANTIENE LA FUNCIONALIDAD ORIGINAL
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});

// Función para verificar y mostrar/ocultar el botón "Ver más"
function updateLoadMoreButton() {
  var currentFilter = $('#portfolio-flters li.filter-active').data('filter');
  var visibleItems;
  
  if (currentFilter === '*') {
    visibleItems = $('.portfolio-item');
  } else {
    visibleItems = $('.portfolio-item').filter(currentFilter);
  }
  
  var totalItems = visibleItems.length;
  
  // Mostrar botón solo si hay más de 6 productos
  if (totalItems > 6) {
    $('#load-more-container').show();
    
    // Ocultar items después del 6to
    visibleItems.each(function(index) {
      if (index >= 6) {
        $(this).addClass('hidden-item');
      }
    });
    
    // Actualizar texto del botón
    var hiddenCount = visibleItems.filter('.hidden-item').length;
    if (hiddenCount > 0) {
      $('#load-more-btn').text('Ver más (' + hiddenCount + ')');
    } else {
      $('#load-more-btn').text('Ver menos');
    }
  } else {
    $('#load-more-container').hide();
    visibleItems.removeClass('hidden-item');
  }
  
  // Aplicar visibilidad
  portfolioIsotope.isotope();
}

// Filtro de portfolios - MANTIENE LA FUNCIONALIDAD ORIGINAL
$('#portfolio-flters li').on('click', function() {
  $("#portfolio-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');

  var filterValue = $(this).data('filter');
  
  // Resetear items ocultos antes de aplicar nuevo filtro
  $('.portfolio-item').removeClass('hidden-item');
  
  portfolioIsotope.isotope({ 
    filter: function() {
      var $this = $(this);
      var matchesFilter = filterValue === '*' || $this.is(filterValue);
      var isHidden = $this.hasClass('hidden-item');
      return matchesFilter && !isHidden;
    }
  });
  
  // Actualizar botón "Ver más" después del filtro
  setTimeout(updateLoadMoreButton, 100);
});

// Botón "Ver más"
$('#load-more-btn').on('click', function() {
  var currentFilter = $('#portfolio-flters li.filter-active').data('filter');
  var hiddenItems = $('.portfolio-item.hidden-item').filter(currentFilter === '*' ? '*' : currentFilter);
  
  if (hiddenItems.length > 0) {
    // Mostrar más items
    hiddenItems.removeClass('hidden-item');
    $(this).text('Ver menos');
  } else {
    // Ocultar items (volver al estado inicial)
    var visibleItems = currentFilter === '*' ? 
      $('.portfolio-item') : 
      $('.portfolio-item').filter(currentFilter);
    
    visibleItems.each(function(index) {
      if (index >= 6) {
        $(this).addClass('hidden-item');
      }
    });
    
    var hiddenCount = visibleItems.filter('.hidden-item').length;
    $(this).text('Ver más (' + hiddenCount + ')');
  }
  
  // Re-aplicar isotope
  portfolioIsotope.isotope({
    filter: function() {
      var $this = $(this);
      var filterValue = $('#portfolio-flters li.filter-active').data('filter');
      var matchesFilter = filterValue === '*' || $this.is(filterValue);
      var isHidden = $this.hasClass('hidden-item');
      return matchesFilter && !isHidden;
    }
  });
});

// CUSTOM LIGHTBOX FUNCTIONALITY
$(document).ready(function() {
  // Inicializar botón "Ver más" al cargar la página
  setTimeout(updateLoadMoreButton, 500);
  
  // Custom Lightbox
  var lightbox = $('#custom-lightbox');
  var lightboxImg = $('#lightbox-img');
  var lightboxCaption = $('#lightbox-caption');
  var closeBtn = $('.lightbox-close');
  
  // Prevenir que lightbox2 interfiera
  $('.link-preview').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var imgSrc = $(this).attr('href');
    var caption = $(this).data('title');
    
    // Mostrar lightbox personalizado
    lightboxImg.attr('src', imgSrc);
    lightboxCaption.text(caption);
    lightbox.addClass('active');
    
    // Prevenir scroll del body
    $('body').css('overflow', 'hidden');
  });
  
  // Cerrar lightbox al hacer click en X
  closeBtn.on('click', function() {
    closeLightbox();
  });
  
  // Cerrar lightbox al hacer click fuera de la imagen
  lightbox.on('click', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
  
  // Cerrar lightbox con tecla ESC
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.hasClass('active')) {
      closeLightbox();
    }
  });
  
  function closeLightbox() {
    lightbox.removeClass('active');
    $('body').css('overflow', 'auto');
  }
  
  // Ajustar imagen al tamaño de la pantalla
  lightboxImg.on('load', function() {
    var img = $(this);
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var imgWidth = img[0].naturalWidth;
    var imgHeight = img[0].naturalHeight;
    
    // Solo redimensionar si la imagen es más grande que la ventana
    if (imgWidth > windowWidth * 0.9 || imgHeight > windowHeight * 0.9) {
      img.css({
        'max-width': '90%',
        'max-height': '90vh',
        'width': 'auto',
        'height': 'auto'
      });
    } else {
      // Mantener tamaño original si es más pequeña
      img.css({
        'max-width': '90%',
        'max-height': '90vh',
        'width': 'auto',
        'height': 'auto'
      });
    }
  });
});

// Responsive: Desactivar position absolute en móviles
function handleResponsiveLayout() {
  if ($(window).width() <= 575) {
    // En móvil, asegurar que Isotope use el layout correcto
    portfolioIsotope.isotope({
      layoutMode: 'vertical'
    });
  } else {
    // En desktop, usar fitRows
    portfolioIsotope.isotope({
      layoutMode: 'fitRows'
    });
  }
}

// Ejecutar al cargar y al redimensionar
$(window).on('load resize', function() {
  handleResponsiveLayout();
  portfolioIsotope.isotope('layout');
});