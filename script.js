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
            'images/florina1.jpg', 'images/florina2.jpg', 'images/florina3.jpg'  // أضف صورك هنا
        ];
    } else if (brand === 'mmmm') {
        title = 'mmmm';
        description = 'علامة تجارية متخصصة في بيع برجر اللحم والدجاج.';
        images = [
            'images/mmmm1.jpg', 'images/mmmm2.jpg', 'images/mmmm3.jpg'  // أضف صورك هنا
        ];
    } else if (brand === 'richy') {
        title = 'ريتشي';
        description = 'علامة تجارية لبيع الأقمشة وتفصيل الثياب العربية.';
        images = [
            'images/richy1.jpg', 'images/richy2.jpg', 'images/richy3.jpg'  // أضف صورك هنا
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
