<script>
                $(document).ready(function () {
                $('#dept_name ').on('change', function () {
                let id = $(this).val();
                $('#division_id').empty();
                $('#division_id').append(`<option value="0" disabled selected>Processing...</option>`);
                $.ajax({
                type: 'GET',
                url: 'getEmployee/' + id,
                success: function (response) {
                var response = JSON.parse(response);
                console.log(response);   
                $('#division_id').empty();
                $('#division_id').append(`<option value="0" disabled selected>Select division_id </option>`);
                response.forEach(element => {
                    $('#division_id').append(`<option value="${element['id']}">${element['name']}</option>`);
                    });
                }
            });
        });
    });
</script>