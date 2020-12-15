//Stack overflow on how to use the clone jquery method
//remove the previous entered value on stack overflow
$(function () {
    $(".repeat").on('click', function(e) {
        e.preventDefault();// to prevent form submit
        var $self = $(this);
        $self.before($self.prev('table').clone().find("input:text").val("").end());
   }); 
    $('.sidenav').sidenav({edge: "right"});
});
