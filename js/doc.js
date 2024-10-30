$(document).ready(function () {
    $('table').DataTable({
        "paging": true,
        "searching": true,
        "pageLength": 10,
        "lengthChange": false
    });
});