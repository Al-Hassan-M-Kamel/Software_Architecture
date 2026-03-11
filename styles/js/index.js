let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// tạm dừng trang chiếu khi thanh trượt di chuột

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// bật tính năng trượt khi chuột rời khỏi thanh trượt
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// điều khiển thanh trượt

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})


// tạo ra sản phẩm

let products = [
    {
        name: 'Iphone 14',
        image1: './images/ip14-1.png',
        image2: './images/ip14.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Reflect Flow TWS Headphone',
        image1: './images/jbl-1.webp',
        image2: './images/jbl-2.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Iphone 14 Pro max',
        image1: './images/14-1.png',
        image2: './images/14-p.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'MacBook Air 2023',
        image1: './images/macAir.png',
        image2: './images/goc-1.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Iphone X ',
        image1: './images/x.png',
        image2: './images/canh-x.png',
        old_price: '400',
        curr_price: '300'
    },
    
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


