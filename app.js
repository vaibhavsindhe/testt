document.addEventListener('DOMContentLoaded', function () {
        let data = [
            {
                img: 'https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000',
                preHeading: "Women's Apparel",
                heading: {
                    one: 'Elevate your wardrobe',
                    two: "with our limited-time",
                    three: "fashion offer!"
                },
                button: "Explore More",
                textAlign: "centerCenter"
            },
            {
                img: 'https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000',
                preHeading: "Trendy Classic",
                heading: {
                    one: 'Discover Signature Look:',
                    two: "Fashion Forward and",
                    three: "Fabulous!"
                },
                button: "Shop Now",
                textAlign: "bottomLeft"
            },
            {
                img: 'https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000',
                preHeading: "Modern Elegance",
                heading: {
                    one: 'Step into the World of',
                    two: "Style with the Latest",
                    three: "Fashion Trends Unveiled!!"
                },
                button: "Explore Now",
                textAlign: "bottomLeft"
            }
            // {
            //     img: 'https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000',
            //     video:"video.mp4",
            //     preHeading: "Modern Elegance",
            //     heading: {
            //         one: 'Step into the World of',
            //         two: "Style with the Latest",
            //         three: "Fashion Trends Unveiled!!"
            //     },
            //     button: "Explore Now",
            //     textAlign: "bottomLeft"
            // }
        ];
        const splideList = document.querySelector('.splide__list');
        data.forEach(item => {
            const slide = document.createElement('li');
            slide.className = `splide__slide `;
            if(item.video){
              slide.innerHTML = `
                <video  autoplay muted loop >
                    <source src="${item.video}" type="video/webm" />
                </video>
              <div class="container ${item.textAlign}">
                  <div class="slide-content">
                    <h3>&#x2022 ${item.preHeading}</h3>
                    <h2>${item.heading.one}<br>${item.heading.two}<br>${item.heading.three}</h2>
                    <button>${item.button}</button>
                  </div>
                </div>
              `;
            }
            else{
                slide.innerHTML = `
                    <img src="${item.img}" alt="Slide Image">
                    <div class="container ${item.textAlign}">
                      <div class="slide-content">
                        <h3>&#x2022  ${item.preHeading}</h3>
                        <h2>${item.heading.one}<br>${item.heading.two}<br>${item.heading.three}</h2>
                        <button>${item.button}</button>
                      </div>
                    </div>
                `;
              }
            splideList.appendChild(slide);
        });
        new Splide('#image-slider', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval:5000,
        }).mount();
    });
  document.addEventListener('DOMContentLoaded', function () {
    const alignmentSelector = document.getElementById('textAlignmentSelector');
    alignmentSelector.addEventListener('change', (event) => {
        const selectedAlignment = event.target.value;
        document.querySelectorAll('.container').forEach((element) => {
            // Remove all alignment classes
            element.classList.remove('topLeft', 'topCenter', 'topRight', 'centerLeft', 'centerCenter', 'centerRight', 'bottomLeft', 'bottomCenter', 'bottomRight');
            // Add the selected alignment class
            element.classList.add(selectedAlignment);
        });
    });
  });