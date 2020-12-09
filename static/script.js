$(function () {
    $(".repeat").on('click', function (e) {
        e.preventDefault();// to prevent form submit
        var $self = $(this);
        $self.before($self.prev('table').clone());// use prev() not parent()
    });
});
