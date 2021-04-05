$(() => {

    // Make entire body drag-scrollable
    $('.drag').dragscroll();

    // Toggle button
    $('#toggle').on('click',(e) => {
        if ( $(e.currentTarget).text() == 'Show All' ) {
            $(e.currentTarget).text('Hide All');
            $('.tree ul').show();
        } else {
            $(e.currentTarget).text('Show All');
            $('.tree ul ul').hide();
        }
        
    });

    // Each parent pair that is clicked
    $('a.parents').on('click',(e)=>{

        if ( !$(e.currentTarget).parent().children('ul').length ) { // Return if no family under this person
            return false;
        }

        nextFamily = $(e.currentTarget).parent().children('ul');

        if ( $(nextFamily).is(':visible') ) {
            $(nextFamily).hide();

            var offset = $(e.currentTarget).offset();
            $('html, body').animate({
                scrollTop: offset.top-200
            });
        } else {
            $(nextFamily).show();
            // Increase viewport height
            var bodyHeight = $('html').height();
            $('html').height(bodyHeight+1000);

            // Scroll opened into view
            var offset = $(e.currentTarget).offset();
            $('html, body').animate({
                scrollTop: offset.top-200
            });
            
        }
    });
});