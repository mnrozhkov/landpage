/* clicker */
(function() {

    function init(index, domElem) {

        /* ---------- blocks logic here ---------- */

        var $block = $(domElem),

            // getting block specific data
            name = $block.data('name');

        $block.find('.clicker__trigger').click(function() {
            console.log('Hi, %s!', name);
        });

        /* ---------- blocks logic here ---------- */
    }

    $('.clicker').each(init);
})();