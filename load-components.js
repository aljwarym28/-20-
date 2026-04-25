// تحميل الشريط العلوي والفوتر في جميع الصفحات
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الشريط العلوي
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);
        })
        .catch(error => console.error('Error loading header:', error));

    // تحميل الفوتر
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.createElement('div');
            footerContainer.innerHTML = data;
            document.body.appendChild(footerContainer);
        })
        .catch(error => console.error('Error loading footer:', error));
});