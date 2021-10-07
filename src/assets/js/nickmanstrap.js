$(document).ready(function () {
    // Input indeterminado
    $("#indeterminate").prop("indeterminate", true);
    $("#indeterminateM").prop("indeterminate", true);

    // Animación de FOrm Material
    $(".form-material :input").each(function () {
        const nodo = $(this).parent().children('.form-label');
        if ($.trim($(this).val()).length > 0) {
            nodo.addClass('label-active');
        }

        $(this).on('focus', function () {
            nodo.addClass('label-active');
        });

        $(this).on('blur', function () {
            if ($.trim($(this).val()).length > 0) {
                nodo.addClass('label-active');
            } else {
                nodo.removeClass('label-active');
            }
        });

    });

    // Valor de Input Range - Form Material
    range($("#range1M"), $("#range1MLabel"));
    range($("#range2M"), $("#range2MLabel"));
    range($("#range3M"), $("#range3MLabel"));
    range($("#range4M"), $("#range4MLabel"));
    
    $("#range1M").on('input', function () {
        range($(this), $("#range1MLabel"));
    });
    $("#range2M").on('input', function () {
        range($(this), $("#range2MLabel"));
    });
    $("#range3M").on('input', function () {
        range($(this), $("#range3MLabel"));
    });
    $("#range4M").on('input', function () {
        range($(this), $("#range4MLabel"));
    });

    function range(selectorRange, selector) {
        selector.text(selectorRange.val());
    }
})