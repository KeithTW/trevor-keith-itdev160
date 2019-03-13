var user = 'User',
    salutation = 'Welcome ',
    element = document.getElementById('greeting');

element.textContent = salutation + user;

//

var basePrice = 100,
    studentDiscount = .1,
    studentPrice = basePrice - (basePrice * studentDiscount);

var priceElement = document.getElementById('price'),
    studentPriceElement = document.getElementById('student-price');


priceElement.textContent = basePrice;
studentPriceElement.textContent = studentPrice;
