document.addEventListener('DOMContentLoaded', ()=>{
    function doFormat(value, pattern, mask) {
        // удаляем все нечисловые значения из значения
        const strippedValue = value.replace(/[^0-9]/g, "");
    
        // преобразуем строку-значение в массив символов
        const chars = strippedValue.split('');
    
    
        let count = 0;
        let formatted = '';
    
        // форматируем строку
        for (let i = 0; i < pattern.length; i++) {
            const char = pattern[i];
            if (chars[count]) {
                if (/\*/.test(char)) {
                    formatted += chars[count];
                    count++;
                } else {
                    formatted += char;
                }
            }
            else if (mask) {
                const splittedMask = mask.split('');
    
                if (splittedMask[i]) {
                    formatted += splittedMask[i];
                }
            }
        }
    
    
        return formatted;
    }
    
    
    // проходимся по каждому элементу назначая на них обработчики
    // нажатия клавиш
    document.querySelectorAll('[data-mask]').forEach(function (e) {
    
    
        function format(elem) {
            const val = doFormat(elem.value, elem.getAttribute('data-format'));
            elem.value = doFormat(elem.value, elem.getAttribute('data-format'), elem.getAttribute('data-mask'));
    
            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', val.length);
                range.select();
            } else if (elem.selectionStart) {
                // elem.focus();
                elem.setSelectionRange(val.length, val.length);
            }
        }
    
        e.addEventListener('keyup', function () {
            format(e);
        });
    
        e.addEventListener('keydown', function () {
            format(e);
        });
    
        format(e)
    });
})