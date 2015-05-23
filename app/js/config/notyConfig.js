var Noty = (function() {
    function display(type, text, time) {
        var n = noty({
            text: text,
            type: type,
            dismissQueue: true,
            layout: 'centerTop',
            theme: 'bootstrapTheme',
            maxVisible: 10,
            timeout: time
        });
    }

    function success(text) {
        display('success', text, 3000);
    }

    function error(text) {
        display('error', text, 3000);
    }

    return {
        success: success,
        error: error
    }
}());