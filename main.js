const products = [
  {
    name: 'MSI GeForce RTX 4070 VENTUS 3X',
    price: 719.90,
    stars: 4.8,
    reviews: 132,
    seller: 'PcComponentes',
    image: 'https://asset.msi.com/resize/image/global/product/product_168129026654856ce716146a2ed75e27534eed8b42.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
    link: 'https://www.pccomponentes.com/msi-geforce-rtx-4070-ventus-3x-evo-12gb-gddr6x-dlss3'
  },
  {
    name: 'Intel Core i7-14700K',
    price: 429.00,
    stars: 4.7,
    reviews: 89,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1080/10805160/1878-intel-core-i7-14700-21-54ghz-box.jpg',
    link: 'https://www.pccomponentes.com/intel-core-i7-14700k-34-ghz-box'
  },
  {
    name: 'LG 27GR75Q-B 27"',
    price: 249.00,
    stars: 4.6,
    reviews: 72,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/1073/10731891/1470-lg-ultragear-27gr75q-b-27-led-ips-quadhd-165hz-g-sync-compatible-foto.jpg',
    link: 'https://www.pccomponentes.com/lg-27gr75q-b-27-led-ips-2k-165hz-freesync-premium-g-sync-compatible'
  },
  {
    name: 'Samsung 980 Pro SSD 1TB',
    price: 92.99,
    stars: 4.9,
    reviews: 183,
    seller: 'PcComponentes',
    image: 'https://m.media-amazon.com/images/I/812DsfxDSVL.jpg',
    link: 'https://www.pccomponentes.com/samsung-980-pro-1tb-ssd-pcie-40-nvme-m2'
  },
  {
    name: 'Gigabyte B550 AORUS ELITE V2',
    price: 114.99,
    stars: 4.6,
    reviews: 64,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/33/332816/57-gigabyte-b550-aorus-elite-v2-caracteristicas.jpg',
    link: 'https://www.pccomponentes.com/gigabyte-b550-aorus-elite-v2'
  },
  {
    name: 'Corsair Vengeance RGB Pro 32GB',
    price: 92.99,
    stars: 4.8,
    reviews: 99,
    seller: 'PcComponentes',
    image: 'https://img.pccomponentes.com/articles/35/351295/1838-corsair-vengeance-rgb-pro-ddr4-3200-pc4-25600-32gb-2x16gb-cl16.jpg',
    link: 'https://www.pccomponentes.com/corsair-vengeance-rgb-pro-sl-ddr4-3600-32gb-2x16gb-cl18-blanco'
  },
  {
    name: 'Apple AirPods Pro 2ª Gen',
    price: 239.00,
    stars: 4.7,
    reviews: 151,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1077/10777923/2269-airpods-pro-2a-generacion-con-estuche-de-carga-inalambrica-usb-c-blancos-comprar.jpg',
    link: 'https://www.pccomponentes.com/apple-airpods-pro-2-generacion-bluetooth-blanco'
  },
  {
    name: 'Logitech G PRO X Superlight 2',
    price: 129.99,
    stars: 4.8,
    reviews: 95,
    seller: 'PcComponentes',
    image: 'https://m.media-amazon.com/images/I/61y8Of11boL.jpg',
    link: 'https://www.pccomponentes.com/logitech-g-pro-x-superlight-2-wireless-gaming-mouse-negro'
  },
  {
    name: 'MSI Optix G2412 24"',
    price: 139.00,
    stars: 4.5,
    reviews: 53,
    seller: 'PcComponentes',
    image: 'https://asset.msi.com/resize/image/global/product/product_16533746428fdd9ede10dbb55365e4d4267b978414.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
    link: 'https://www.pccomponentes.com/msi-optix-g2412-24-led-ips-fullhd-170hz-freesync'
  },
  {
    name: 'ASUS TUF Gaming VG249Q1A',
    price: 179.99,
    stars: 4.7,
    reviews: 61,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/38/385506/1166-asus-tuf-gaming-vg249q1a-238-led-ips-fullhd-165hz-freesync-premium.jpg',
    link: 'https://www.pccomponentes.com/asus-tuf-gaming-vg249q1a-238-led-ips-fullhd-165hz-freesync-premium'
  }
];

// Función para renderizar estrellas
function renderStars(stars) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span style="color: gold">${i <= Math.round(stars) ? '★' : '☆'}</span>`;
    }
    return html;
}

const lista = document.getElementById('lista-productos');
lista.innerHTML = '';

products.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `
        <article>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.seller}</p>
            <div>
                ${renderStars(product.stars)} <span>(${product.reviews})</span>
            </div>
            <span class="precio">${product.price.toFixed(2)}€</span>
            <a href="${product.link}" target="_blank" rel="noopener">Ver producto</a>
        </article>
    `;
    lista.appendChild(li);
});
