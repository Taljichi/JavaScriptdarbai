document.addEventListener('DOMContentLoaded', function () {
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const trashButtons = document.querySelectorAll('.trash');
    const minusButtons1 = document.querySelectorAll('.minus1');
    const plusButtons1 = document.querySelectorAll('.plus1');
    const trashButtons1 = document.querySelectorAll('.trash1');
    const minusButtons2 = document.querySelectorAll('.minus2');
    const plusButtons2 = document.querySelectorAll('.plus2');
    const trashButtons2 = document.querySelectorAll('.trash2');
    const SimKainaElement = document.querySelector('.simbkaina');
    const PhoneKainaElement = document.querySelector('.telefonasbkaina');
    const DiskKainaElement = document.querySelector('.diskbkaina');
    const sumaElement = document.getElementById('suma');
    const simQuantityElement = document.querySelector('.simkiekis .skaicius');
    const phoneQuantityElement = document.querySelector('.telefonaskiekis .skaicius1'); 
    const diskQuantityElement = document.querySelector('.diskkiekis .skaicius2');  

    let simQuantity = 1; 
    let simPrice = 2.00; 
    let phoneQuantity = 1;
    let phonePrice = 1200;
    let diskQuantity = 2;
    let diskprice = 35;

    function updateCart() {
        const totalPrice = (simQuantity * simPrice) + (phoneQuantity * phonePrice) + (diskQuantity * diskprice);
        const simTotalPrice = simQuantity * simPrice;
        const phoneTotalPrice = phoneQuantity * phonePrice;
        const diskTotalPrice = diskQuantity * diskprice;

        DiskKainaElement.textContent = diskTotalPrice.toFixed(2) + ' $';
        PhoneKainaElement.textContent = phoneTotalPrice.toFixed(2) + ' $';
        SimKainaElement.textContent = simTotalPrice.toFixed(2) + ' $';
        sumaElement.textContent = totalPrice.toFixed(2) + ' $';
    }

    minusButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (simQuantity > 0) {
                simQuantity--;
                updateCart();
                updateSimQuantity(); 
            }
        });
    });


    plusButtons.forEach(button => {
        button.addEventListener('click', function () {
            simQuantity++;
            updateCart();
            updateSimQuantity(); 
        });
    });

    trashButtons.forEach(button => {
        button.addEventListener('click', function () {
            simQuantity = 0;
            updateCart();
            updateSimQuantity(); 
        });
    });

    function updateSimQuantity() {
        simQuantityElement.textContent = simQuantity; 
    }

    // ===================
    minusButtons1.forEach(button => {
        button.addEventListener('click', function () {
            if (phoneQuantity > 0) {
                phoneQuantity--;
                updateCart();
                updatephoneQuantity(); 
            }
        });
    });


    plusButtons1.forEach(button => {
        button.addEventListener('click', function () {
            phoneQuantity++;
            updateCart();
            updatephoneQuantity(); 
        });
    });

    trashButtons1.forEach(button => {
        button.addEventListener('click', function () {
            phoneQuantity = 0;
            updateCart();
            updatephoneQuantity(); 
        });
    });

    function updatephoneQuantity() {
        phoneQuantityElement.textContent = phoneQuantity; 
    }

    // ======================
    minusButtons2.forEach(button => {
        button.addEventListener('click', function () {
            if (diskQuantity > 0) {
                diskQuantity--;
                updateCart();
                updatediskQuantity(); 
            }
        });
    });


    plusButtons2.forEach(button => {
        button.addEventListener('click', function () {
            diskQuantity++;
            updateCart();
            updatediskQuantity(); 
        });
    });

    trashButtons2.forEach(button => {
        button.addEventListener('click', function () {
            diskQuantity = 0;
            updateCart();
            updatediskQuantity(); 
        });
    });

    function updatediskQuantity() {
        diskQuantityElement.textContent = diskQuantity; 
    }

    updateCart();
    updateSimQuantity(); 
    updatephoneQuantity();
    updatediskQuantity();
});
