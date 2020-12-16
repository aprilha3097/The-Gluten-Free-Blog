$(function () {
    //Repeat and clone onclick of add ingredient or add directions button
    $(".repeat").on('click', function(e) {
        e.preventDefault();
        var $self = $(this);
        $self.before($self.prev('table').clone().find("input:text").val("").end());
   }); 
   //side navigation bar when on mobile display
    $('.sidenav').sidenav({edge: "right"});
});
