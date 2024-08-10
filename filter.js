// Удаление секций внутри элемента с ID 'software'
const softwareContainer = document.querySelector('#software');
if (softwareContainer) {
    const sections = softwareContainer.querySelectorAll('section');
    const sectionIds = [];

    sections.forEach(section => {
        const span = section.querySelector('span.stars');
        if (span) {
            const spanValue = span.textContent.trim().substring(1);
            const numValue = parseInt(spanValue, 10);
            // Проверяем, является ли значение числом и меньше 20000, или если значение NaN
            if (isNaN(numValue) || numValue < 20000) {
                sectionIds.push(section.id);
                section.remove(); // Удаляем родительский контейнер section
            }
        }
    });

    console.log('Удаленные секции с ID:', sectionIds);
}

// Удаление всех элементов <hr> с классом 'docutils'
const docutilsHrElements = document.querySelectorAll('hr.docutils');
docutilsHrElements.forEach(hr => hr.remove());

console.log('Удалены все <hr class="docutils">');
