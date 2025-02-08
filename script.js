function showBrandDetails(brand) {
    let detailsSection = document.getElementById('brand-details');
    detailsSection.innerHTML = ''; // مسح التفاصيل السابقة

    let title = '';
    let description = '';
    let images = [];

    if (brand === 'florina') {
        title = 'فلورينا';
        description = 'علامة تجارية لبيع الأحذية والحقائب الصغيرة.';
        images = [
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/florina-logo.png',
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/florina-logo.png',
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/florina-logo.png',
 
        ];
    } else if (brand === 'mmmm') {
        title = 'mmmm';
        description = 'علامة تجارية متخصصة في بيع برجر اللحم والدجاج.';
        images = [
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/richy-logo.png',
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/richy-logo.png',
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/richy-logo.png',
        ];
    } else if (brand === 'richy') {
        title = 'ريتشي';
        description = 'علامة تجارية لبيع الأقمشة وتفصيل الثياب العربية.';
        images = [
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/mmmm-logo.png',
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/mmmm-logo.png',
            'https://raw.githubusercontent.com/hunterbukhari/repository/branch/images/mmmm-logo.png',
        ];
    }

    // عرض العنوان
    let header = document.createElement('h3');
    header.textContent = title;
    detailsSection.appendChild(header);

    // عرض الوصف
    let para = document.createElement('p');
    para.textContent = description;
    detailsSection.appendChild(para);

    // إضافة الصور
    let imagesSection = document.createElement('div');
    imagesSection.classList.add('brand-images');
    images.forEach(function(imageSrc) {
        let img = document.createElement('img');
        img.src = imageSrc;
        img.alt = title + ' صورة';
        imagesSection.appendChild(img);
    });
    detailsSection.appendChild(imagesSection);
}
