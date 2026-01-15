module.exports=[3626,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(97292),e=a.i(38246),f=a.i(15618),g=a.i(87532),h=a.i(70106);let i=(0,h.default)("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);var j=a.i(81560),k=a.i(67900);let l=(0,h.default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),m=(0,h.default)("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),n=(0,h.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),o=[{value:"ALL",label:"All Categories"},{value:"COSMETIC",label:"Cosmetics"},{value:"DENTAL_KIT",label:"Dental Kits"},{value:"SHAVING_KIT",label:"Shaving Kits"},{value:"VANITY_KIT",label:"Vanity Kits"},{value:"SLIPPER",label:"Slippers"},{value:"COASTER",label:"Coasters"},{value:"LAUNDRY_BAG",label:"Laundry Bags"},{value:"GARBAGE_BAG",label:"Garbage Bags"},{value:"SHOWER_CAP",label:"Shower Caps"},{value:"COMB",label:"Combs"},{value:"OTHER",label:"Other"}],p=a=>a?a.startsWith("/")||a.startsWith("http")?a:`/api/media/${a}`:"/assets/images/product/1000x1000.png";function q(){let[a,h]=(0,c.useState)([]),[q,r]=(0,c.useState)(!0),[s,t]=(0,c.useState)(""),[u,v]=(0,c.useState)("ALL"),[w,x]=(0,c.useState)(!1),[y,z]=(0,c.useState)(!1);(0,c.useEffect)(()=>{A()},[s,u]);let A=async()=>{try{r(!0);let a=new URLSearchParams;s&&a.set("search",s),u&&"ALL"!==u&&a.set("category",u);let b=await fetch(`/api/admin/hotel-catalogue?${a}`),c=await b.json();h(c.amenities||[])}catch(a){console.error("Error fetching amenities:",a)}finally{r(!1)}},B=async a=>{if(confirm("Are you sure you want to delete this amenity?"))try{(await fetch(`/api/admin/hotel-catalogue/${a}`,{method:"DELETE"})).ok?A():alert("Failed to delete amenity")}catch(a){console.error("Error deleting amenity:",a),alert("An error occurred")}},C=async()=>{if(confirm("This will add sample hotel amenities. Continue?"))try{z(!0);let a=await fetch("/api/admin/hotel-catalogue/seed",{method:"POST"}),b=await a.json();a.ok?(alert(`Successfully added ${b.count||"sample"} amenities!`),A()):alert(b.message||b.error||"Failed to seed data")}catch(a){console.error("Error seeding data:",a),alert("Failed to seed data")}finally{z(!1)}},D=async()=>{try{x(!0);let a=await fetch("/api/admin/hotel-catalogue?limit=1000"),b=(await a.json()).amenities||[];b.sort((a,b)=>b.priority-a.priority);let c=E(b),d=window.open("","_blank");d&&(d.document.write(c),d.document.close(),d.onload=()=>{d.print()})}catch(a){console.error("Error generating PDF:",a),alert("Failed to generate PDF")}finally{x(!1)}},E=a=>{let b=a.length,c=a.map((a,b)=>`
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${p(a.image)}" alt="${a.name}" onerror="this.src='/assets/images/product/1000x1000.png'" />
                    <div class="product-badge">${String(b+1).padStart(2,"0")}</div>
                </div>
                <div class="product-details">
                    <h3 class="product-title">${a.name}</h3>
                    <div class="product-price-row">
                        <span class="product-price">₹${a.price.toFixed(2)}</span>
                        <span class="product-unit">per unit</span>
                    </div>
                    <div class="product-specs">
                        <div class="spec-item">
                            <span class="spec-label">MOQ</span>
                            <span class="spec-value">${a.minOrderQty} units</span>
                        </div>
                        ${a.sizes?`
                            <div class="spec-item">
                                <span class="spec-label">Sizes</span>
                                <span class="spec-value">${JSON.parse(a.sizes).join(", ")}</span>
                            </div>
                        `:""}
                        ${a.packing?`
                            <div class="spec-item">
                                <span class="spec-label">Packing</span>
                                <span class="spec-value">${a.packing}</span>
                            </div>
                        `:""}
                        ${a.contents?`
                            <div class="spec-item">
                                <span class="spec-label">Contents</span>
                                <span class="spec-value">${JSON.parse(a.contents).join(", ")}</span>
                            </div>
                        `:""}
                        ${a.material?`
                            <div class="spec-item">
                                <span class="spec-label">Material</span>
                                <span class="spec-value">${a.material}</span>
                            </div>
                        `:""}
                        ${a.color?`
                            <div class="spec-item">
                                <span class="spec-label">Colors</span>
                                <span class="spec-value">${a.color}</span>
                            </div>
                        `:""}
                    </div>
                    ${a.description?`<p class="product-desc">${a.description}</p>`:""}
                </div>
            </div>
        `).join("");return`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Anose Beauty - Hotel Amenities Catalogue ${new Date().getFullYear()}</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
                    
                    :root {
                        --primary: #7c3aed;
                        --primary-light: #a855f7;
                        --primary-dark: #5b21b6;
                        --dark: #1a1c23;
                        --dark-light: #2d2f36;
                        --text: #374151;
                        --text-light: #6b7280;
                        --bg-cream: #faf9f7;
                    }
                    
                    @page { size: A4; margin: 0; }
                    
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    
                    body {
                        font-family: 'Inter', sans-serif;
                        color: var(--text);
                        background: #fff;
                        line-height: 1.5;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    
                    .cover-page {
                        width: 100%;
                        height: 100vh;
                        background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 50%, var(--primary-dark) 100%);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        overflow: hidden;
                        page-break-after: always;
                    }
                    
                    .cover-decoration {
                        position: absolute;
                        width: 500px;
                        height: 500px;
                        border: 1px solid rgba(168, 85, 247, 0.2);
                        border-radius: 50%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    
                    .cover-content {
                        position: relative;
                        z-index: 10;
                        text-align: center;
                        padding: 40px;
                    }
                    
                    .cover-logo {
                        width: 120px;
                        height: auto;
                        margin-bottom: 25px;
                        filter: brightness(0) invert(1);
                    }
                    
                    .cover-brand {
                        font-family: 'Playfair Display', serif;
                        font-size: 16px;
                        letter-spacing: 6px;
                        text-transform: uppercase;
                        color: var(--primary-light);
                        margin-bottom: 15px;
                    }
                    
                    .cover-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 60px;
                        font-weight: 400;
                        color: white;
                        line-height: 1.1;
                        margin-bottom: 15px;
                    }
                    
                    .cover-subtitle {
                        font-size: 14px;
                        font-weight: 300;
                        color: rgba(255,255,255,0.7);
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin-bottom: 30px;
                    }
                    
                    .cover-stats {
                        display: flex;
                        justify-content: center;
                        gap: 50px;
                        margin-bottom: 40px;
                    }
                    
                    .cover-stat { text-align: center; }
                    
                    .cover-stat-number {
                        font-family: 'Playfair Display', serif;
                        font-size: 42px;
                        color: var(--primary-light);
                        display: block;
                    }
                    
                    .cover-stat-label {
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        color: rgba(255,255,255,0.5);
                    }
                    
                    .cover-footer {
                        position: absolute;
                        bottom: 30px;
                        left: 0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                        gap: 30px;
                        color: rgba(255,255,255,0.5);
                        font-size: 11px;
                    }
                    
                    .cover-footer span {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                    
                    .products-page {
                        padding: 60px 50px;
                        background: var(--bg-cream);
                        min-height: 100vh;
                    }
                    
                    .products-header {
                        text-align: center;
                        margin-bottom: 40px;
                        padding-bottom: 30px;
                        border-bottom: 2px solid var(--primary);
                    }
                    
                    .products-header h2 {
                        font-family: 'Playfair Display', serif;
                        font-size: 36px;
                        color: var(--dark);
                        margin-bottom: 8px;
                    }
                    
                    .products-header p {
                        font-size: 14px;
                        color: var(--text-light);
                    }
                    
                    .products-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 25px;
                    }
                    
                    .product-card {
                        background: white;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 3px 15px rgba(0,0,0,0.06);
                        page-break-inside: avoid;
                    }
                    
                    .product-image-container {
                        width: 100%;
                        height: 160px;
                        position: relative;
                        background: #f8f8f8;
                    }
                    
                    .product-image-container img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .product-badge {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        width: 30px;
                        height: 30px;
                        background: var(--primary);
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 11px;
                        font-weight: 600;
                    }
                    
                    .product-details { padding: 15px; }
                    
                    .product-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 16px;
                        font-weight: 500;
                        color: var(--dark);
                        margin-bottom: 8px;
                    }
                    
                    .product-price-row {
                        display: flex;
                        align-items: baseline;
                        gap: 6px;
                        margin-bottom: 12px;
                        padding-bottom: 12px;
                        border-bottom: 1px solid #eee;
                    }
                    
                    .product-price {
                        font-size: 20px;
                        font-weight: 700;
                        color: var(--primary);
                    }
                    
                    .product-unit {
                        font-size: 11px;
                        color: var(--text-light);
                    }
                    
                    .product-specs {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 8px;
                        margin-bottom: 10px;
                    }
                    
                    .spec-item {
                        display: flex;
                        flex-direction: column;
                        gap: 1px;
                    }
                    
                    .spec-label {
                        font-size: 9px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        color: var(--text-light);
                    }
                    
                    .spec-value {
                        font-size: 11px;
                        font-weight: 500;
                        color: var(--dark);
                    }
                    
                    .product-desc {
                        font-size: 10px;
                        color: var(--text-light);
                        line-height: 1.5;
                        border-top: 1px solid #eee;
                        padding-top: 10px;
                    }
                    
                    .back-cover {
                        width: 100%;
                        height: 100vh;
                        background: var(--dark);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 50px;
                        page-break-before: always;
                    }
                    
                    .back-brand {
                        font-family: 'Playfair Display', serif;
                        font-size: 12px;
                        letter-spacing: 5px;
                        text-transform: uppercase;
                        color: var(--primary-light);
                        margin-bottom: 25px;
                    }
                    
                    .back-title {
                        font-family: 'Playfair Display', serif;
                        font-size: 40px;
                        font-weight: 400;
                        color: white;
                        margin-bottom: 15px;
                    }
                    
                    .back-subtitle {
                        font-size: 14px;
                        color: rgba(255,255,255,0.6);
                        margin-bottom: 50px;
                        max-width: 450px;
                    }
                    
                    .contact-grid {
                        display: flex;
                        justify-content: center;
                        gap: 50px;
                        margin-bottom: 50px;
                    }
                    
                    .contact-box { text-align: center; }
                    
                    .contact-icon {
                        width: 50px;
                        height: 50px;
                        background: var(--primary);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 15px;
                        font-size: 20px;
                    }
                    
                    .contact-label {
                        font-size: 10px;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: rgba(255,255,255,0.5);
                        margin-bottom: 5px;
                    }
                    
                    .contact-value {
                        font-size: 13px;
                        color: white;
                        font-weight: 500;
                    }
                    
                    .back-cta {
                        display: inline-block;
                        padding: 15px 40px;
                        background: var(--primary);
                        color: white;
                        font-size: 12px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        border-radius: 40px;
                        margin-bottom: 40px;
                    }
                    
                    .back-terms {
                        font-size: 10px;
                        color: rgba(255,255,255,0.4);
                        line-height: 1.8;
                    }
                    
                    .back-copyright {
                        margin-top: 25px;
                        padding-top: 25px;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        font-size: 11px;
                        color: rgba(255,255,255,0.3);
                    }

                    @media print {
                        .cover-page, .products-page, .back-cover {
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="cover-page">
                    <div class="cover-decoration"></div>
                    <div class="cover-content">
                        <img src="/assets/images/anose-logo.png" alt="Anose Beauty" class="cover-logo" onerror="this.style.display='none'" />
                        <div class="cover-brand">Anose Beauty</div>
                        <h1 class="cover-title">Catalogue</h1>
                        <p class="cover-subtitle">Premium Hotel Amenities</p>
                        <div class="cover-stats">
                            <div class="cover-stat">
                                <span class="cover-stat-number">${b}</span>
                                <span class="cover-stat-label">Products</span>
                            </div>
                            <div class="cover-stat">
                                <span class="cover-stat-number">100+</span>
                                <span class="cover-stat-label">Hotels Served</span>
                            </div>
                            <div class="cover-stat">
                                <span class="cover-stat-number">${new Date().getFullYear()}</span>
                                <span class="cover-stat-label">Edition</span>
                            </div>
                        </div>
                    </div>
                    <div class="cover-footer">
                        <span>📧 wecare@anosebeauty.com</span>
                        <span>📞 +91 9110134408</span>
                        <span>🌐 www.anosebeauty.com</span>
                    </div>
                </div>
                
                <div class="products-page">
                    <div class="products-header">
                        <h2>Our Products</h2>
                        <p>Premium quality hotel amenities for exceptional guest experiences</p>
                    </div>
                    <div class="products-grid">
                        ${c}
                    </div>
                </div>
                
                <div class="back-cover">
                    <div class="back-brand">Anose Beauty</div>
                    <h2 class="back-title">Ready to Order?</h2>
                    <p class="back-subtitle">Contact us today for bulk pricing, customization options, and exclusive partnership opportunities.</p>
                    
                    <div class="contact-grid">
                        <div class="contact-box">
                            <div class="contact-icon">📧</div>
                            <div class="contact-label">Email</div>
                            <div class="contact-value">wecare@anosebeauty.com</div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">📞</div>
                            <div class="contact-label">Phone</div>
                            <div class="contact-value">+91 9110134408</div>
                        </div>
                        <div class="contact-box">
                            <div class="contact-icon">🌐</div>
                            <div class="contact-label">Website</div>
                            <div class="contact-value">www.anosebeauty.com</div>
                        </div>
                    </div>
                    
                    <div class="back-cta">Get Quote Now</div>
                    
                    <div class="back-terms">
                        <p>* Prices are subject to change without prior notice</p>
                        <p>* Minimum order quantities apply</p>
                        <p>* Customization available for orders above 500 units</p>
                    </div>
                    
                    <div class="back-copyright">
                        \xa9 ${new Date().getFullYear()} Anose Beauty. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
        `};return(0,b.jsx)(d.default,{children:(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("h1",{className:"text-3xl font-bold text-gray-900 flex items-center gap-3",children:[(0,b.jsx)(k.Building2,{className:"w-8 h-8 text-purple-600"}),"Hotel Catalogue"]}),(0,b.jsx)("p",{className:"mt-2 text-gray-500",children:"Manage hotel amenities and supplies"})]}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsxs)(e.default,{href:"/catalogue",target:"_blank",className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-purple-600 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors",children:[(0,b.jsx)(n,{className:"w-5 h-5"}),"View Catalogue"]}),(0,b.jsxs)("button",{onClick:D,disabled:w||0===a.length,className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors disabled:opacity-50",children:[(0,b.jsx)(l,{className:"w-5 h-5"}),w?"Generating...":"Download PDF"]}),(0,b.jsxs)(e.default,{href:"/admin/hotel-catalogue/add",className:"flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",children:[(0,b.jsx)(f.Plus,{className:"w-5 h-5"}),"Add Amenity"]})]})]}),(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,b.jsxs)("div",{className:"relative flex-1",children:[(0,b.jsx)(g.Search,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),(0,b.jsx)("input",{type:"text",placeholder:"Search amenities by name or description...",value:s,onChange:a=>t(a.target.value),className:"w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all outline-none"})]}),(0,b.jsx)("div",{className:"w-full sm:w-64",children:(0,b.jsx)("select",{value:u,onChange:a=>v(a.target.value),className:"w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm transition-all outline-none cursor-pointer",children:o.map(a=>(0,b.jsx)("option",{value:a.value,children:a.label},a.value))})})]}),(0,b.jsx)("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:q?(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center py-20",children:[(0,b.jsx)("div",{className:"w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"}),(0,b.jsx)("p",{className:"text-gray-500 mt-3",children:"Loading amenities..."})]}):0===a.length?(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center py-20",children:[(0,b.jsx)("div",{className:"w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4",children:(0,b.jsx)(m,{className:"w-10 h-10 text-purple-500"})}),(0,b.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No amenities found"}),(0,b.jsx)("p",{className:"text-gray-500 mb-6",children:"Get started by adding your first amenity or load sample data"}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsx)("button",{onClick:C,disabled:y,className:"px-5 py-2.5 bg-purple-100 text-purple-700 rounded-xl font-medium hover:bg-purple-200 transition-colors disabled:opacity-50",children:y?"Adding...":"Load Sample Data"}),(0,b.jsx)(e.default,{href:"/admin/hotel-catalogue/add",className:"px-5 py-2.5 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors",children:"Add Manually"})]})]}):(0,b.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6",children:a.map(a=>{let c;return(0,b.jsxs)("div",{className:"bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group",children:[(0,b.jsxs)("div",{className:"aspect-square bg-gray-100 relative overflow-hidden",children:[(0,b.jsx)("img",{src:p(a.image),alt:a.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",onError:a=>{a.target.src="/assets/images/product/1000x1000.png"}}),(0,b.jsx)("div",{className:"absolute top-3 left-3",children:(0,b.jsx)("span",{className:`px-3 py-1 text-xs font-semibold rounded-full ${{COSMETIC:"bg-purple-100 text-purple-700",DENTAL_KIT:"bg-blue-100 text-blue-700",SHAVING_KIT:"bg-green-100 text-green-700",VANITY_KIT:"bg-pink-100 text-pink-700",SLIPPER:"bg-orange-100 text-orange-700",COASTER:"bg-yellow-100 text-yellow-700",LAUNDRY_BAG:"bg-teal-100 text-teal-700",GARBAGE_BAG:"bg-gray-100 text-gray-700",SHOWER_CAP:"bg-cyan-100 text-cyan-700",COMB:"bg-indigo-100 text-indigo-700"}[a.category]||"bg-gray-100 text-gray-700"}`,children:(c=a.category,o.find(a=>a.value===c)?.label||c)})}),!a.isActive&&(0,b.jsx)("div",{className:"absolute top-3 right-3",children:(0,b.jsx)("span",{className:"px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700",children:"Inactive"})})]}),(0,b.jsxs)("div",{className:"p-4",children:[(0,b.jsx)("h3",{className:"font-semibold text-gray-900 mb-1 truncate",children:a.name}),(0,b.jsxs)("p",{className:"text-xl font-bold text-purple-600 mb-2",children:["₹",a.price.toFixed(2)]}),(0,b.jsxs)("p",{className:"text-sm text-gray-500 mb-3",children:["Min. Order: ",a.minOrderQty," units"]}),a.sizes&&(0,b.jsxs)("p",{className:"text-xs text-gray-500 mb-1",children:[(0,b.jsx)("span",{className:"font-medium",children:"Sizes:"})," ",JSON.parse(a.sizes).join(", ")]}),a.material&&(0,b.jsxs)("p",{className:"text-xs text-gray-500 mb-1",children:[(0,b.jsx)("span",{className:"font-medium",children:"Material:"})," ",a.material]}),(0,b.jsxs)("div",{className:"flex gap-2 mt-4 pt-4 border-t border-gray-100",children:[(0,b.jsxs)(e.default,{href:`/admin/hotel-catalogue/${a.id}/edit`,className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors",children:[(0,b.jsx)(i,{className:"w-4 h-4"}),"Edit"]}),(0,b.jsx)("button",{onClick:()=>B(a.id),className:"flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors",children:(0,b.jsx)(j.Trash2,{className:"w-4 h-4"})})]})]})]},a.id)})})})]})})}a.s(["default",()=>q],3626)}];

//# sourceMappingURL=src_app_admin_hotel-catalogue_page_tsx_fb4105bc._.js.map