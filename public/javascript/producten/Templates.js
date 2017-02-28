function getTemplateList(products){
  return `
              <div class="row row-product get-product">
                <div class="col m3">
                  <img src="`+products.Image+`" alt="" class="product-image">
                </div>
                <div class="col m6">
                  <span class="product-title">`+products.Name+`</span> |
                  <span class="product-merk">`+products.Name+`</span>
                  <p class="product-omschrijving">`+products.Description+` <a>meer</a></p>
                </div>
                <div class="col m3">
                  <p class="product-prijs">`+products.Price+`</p>
                  <a class="waves-effect orange btn checkout-btn"><i class="material-icons right">shopping_cart</i>MAND!</a>
                </div>
            </div>
        `;
}


function getTemplateBlock(products){

  return `<div class="col m4 product-block get-product">
            <div class="show-image-block" style="background-image:url(`+products.Image+`)"></div>
            <p class="product-title">`+products.Name+`</p>
            <p class="product-voorraad">Levertijd: <span>direct leverbaar</span></p>
            <div class="row price-tag">
              <p class="product-prijs">`+products.Price+`</p>
              <a class="waves-effect orange btn checkout-btn"><i class="material-icons right">shopping_cart</i>Klik en bestel</a>
            </div>

          </div> `;
}
function getProductTemplate(products){
  return `
          <div class="row">
            <div class="col m7">
              <img src="`+products.Image+`" alt="" class="product-partial-image">
            </div>
            <div class="col m5">
              <p class="product-partial-title">`+products.Name+`</p>
              <p class="product-partial-levertijd">Levertijd: Direct leverbaar</p>
              <p class="product-partial-prijs">`+products.Price+`</p>
              <a class="waves-effect orange btn checkout-btn"><i class="material-icons right">shopping_cart</i>Klik en bestel</a>
              <p class="product-partial-omschrijving">`+products.Description+`</p>
            </div>
          </div>
        </div>
        `;
}
