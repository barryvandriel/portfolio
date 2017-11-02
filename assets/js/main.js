window.onload = function () {
    
    document.querySelectorAll('.carousel').forEach(function(elem) {
        var flkty = new Flickity(elem, {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            pageDots: false
        });
    });

    AOS.init({
      duration: 500
    });

};

hljs.initHighlightingOnLoad();