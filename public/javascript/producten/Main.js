
$(function () {
    init();

});
function init(){

    initQuery();
    $('.row-category').hide();
    JQinit();
    searchFilter('.filter-category','span');
}
function initQuery(){

  database.query("SELECT * FROM category", categoryResult);
}
function categoryResult(result){

  catergoryShow(result,result.length);
}
function catergoryShow(category,length){

  // making an template for the freewall
  var temp = "<div class='cell filter-category' style='width:{width}%; height: {height}%; '><div class='cell-image {class}' style='background-image: url(/content/images/category/{index}.jpg)'><div class='cell-footer'><span>{text}</span></div></div></div>";
  var  html = ''
  // var amountCategorys = category.length;
  var categorys;
  // looping through all the categorys we have
  for (var i = 0; i < length; ++i) {
    // making a selector for getting the right category element
    var classSelector = 'category-'+categorys+' category ';

    categorys = category[i].Name;


    w = 20 + 50 * Math.random() ;
    h = 30 + 30 * Math.random() ; 

    // setting up the variables of free wall and selectors in the freewall template
    html = temp.replace(/\{height\}/g, h).replace(/\{width\}/g, w).replace("{index}", categorys).replace("{text}",categorys).replace("{class}",classSelector);

    // setting list element
    var categoryElement = $.parseHTML('<a href="#!" class="collection-item '+classSelector+'">'+categorys+'</a>');

    // setting wall element
    var wallElement = $.parseHTML(html);

    //appending list elements to the list
    $('.collection').append(categoryElement);

    //appending wall elements to the gallery 
    $("#gallery").append(wallElement);

     // click per element 
     categoryClick(wallElement,category[i]);
     categoryClick(categoryElement,category[i]);

  }
  freewallOptions();
}
function categoryClick(element,categorys){
  // making the click per category selector
  $(element).click({"category":categorys},function(event){
    
    showHidesCategoryClick();

    var thisCategoryName = event.data.category.Name;
    var thisCategoryId = event.data.category.ID;
    $('.txt-category').text(thisCategoryName);

    searchFilter('.get-product','.product-title');

      database.query("SELECT * FROM product WHERE categoryID = "+thisCategoryId+"", function(result){
        makeEuro(result);
        showStartView(result);
      });
   });
}

function showHidesCategoryClick(){
    // making sure the product container is clear
    $('.show-products').empty();
    $('.show-products').hide();
    $('.show-products-block').empty();
    $('.show-products-block').hide();
    $(".show-category").hide();
    // showing the category container with the text in it and back button
    $('.row-category').show();
    $('.first-row').show();
}


function setAmountProductsPerPage(length){
 $('#amount-filter').empty();
 for(var i = 0; i < length+1; i++){
   switch(i){
      case 8:
          $('#amount-filter').append('<option value=8>8</option>');
          break;
      case 16:
          $('#amount-filter').append('<option value=16>16</option>');
          break;
      case 32:
          $('#amount-filter').append('<option value=32>32</option>');
          break;
      case 64:
          $('#amount-filter').append('<option value=64>64</option>');
          break;
      default:
          $('#amount-filter').append('<option value='+length+'>8</option>');
   }
 }
}
function setAmountPages(length){
 var filter = $('#amount-filter').val();
 var pages = Math.ceil(length/filter);

 $('#amount-pages').empty();

 for(var i = 1; i <= pages; i++){
    $('#amount-pages').append('<option value='+i+'>'+i+'</option>');
  }
}
function searchFilter(filterDisplay, filterTxt){
  $('#search-filter').unbind();
  $('#search-filter').keyup(function(e){
      var keyCode = e.keyCode || e.which;
      if(keyCode === 13){
        e.preventDefault();
      }
      var filter = $(this).val();

      $(filterDisplay).each(function(){
        if($(this).find(filterTxt).text().search(new RegExp(filter, "i")) < 0){
          $(this).fadeOut();
        }
        else{
          $(this).fadeIn();
        }
      });
  });
}
function showStartView(result){
    setAmountProductsPerPage(result.length);

    setAmountPages(result.length);

    if($('.display-sort').hasClass('sort-list')){
        showProductsList(result);
    }
    if($('.display-sort').hasClass('sort-block')){
        showProductsBlock(result);
    }
}
function showProductsList(result){
    var params = [showProductsBlock,'view_stream','sort-list','sort-block',getTemplateList,'.show-products-block','.show-products',result];

    showAmountPerPage(getTemplateList,'.show-products-block','.show-products',result);

    setFilterListeners.apply(this,params);
}
function showProductsBlock(result){
    var params = [showProductsList,'view_module','sort-block','sort-list',getTemplateBlock,'.show-products','.show-products-block',result]

    showAmountPerPage(getTemplateBlock,'.show-products','.show-products-block',result);

    setFilterListeners.apply(this,params);
}
function setFilterListeners(showProducts,txt,rmvCls,addCls,template,hideSelector,showSelector,result){
  unbindEvents();
   $('.display-sort').on('click',function(){
      $('.display-sort').text(txt);
      $('.display-sort').removeClass(rmvCls);
      $('.display-sort').addClass(addCls);
      showStartView(result);
  });
  $('#amount-pages').on('change',function(){
      showAmountPerPage(template,hideSelector,showSelector,result);
  });
   $('#amount-filter').on('change',function(){
      setAmountPages();
      showAmountPerPage(template,hideSelector,showSelector,result);
  });
   $('#sort-by-filter-select').on('change',function(){
      showAmountPerPage(template,hideSelector,showSelector,result);
  });
}
function unbindEvents(){
    $('.display-sort').unbind();
    $('#amount-pages').unbind();
    $('#amount-filter').unbind();
    $('#sort-by-filter-select').unbind();
}
function showAmountPerPage(template,hideSelector,showSelector,result){

    //making sure the content is empty   
    $(showSelector).empty();
    //unbind events before show the products

    //get the value of the amount of products on a page
    var filter = parseInt($('#amount-filter').val());

    //get the value of the page nr
    var page = $('#amount-pages').val();

    var getProducts = result;  

    var firstProductItemPerPage , lastProductItemPerPage;

    // calculating the first product item per page
    firstProductItemPerPage = filter * page ;

    // calculating the last product item per page
    lastProductItemPerPage =  firstProductItemPerPage - filter;

    sortByFilterSelect(getProducts);

    for(var i = 0; i < result.length; i++){
        
            if(i >= lastProductItemPerPage && i < firstProductItemPerPage){

              var element = $.parseHTML(template(result[i]));

              // show and hide the products and setting a click listener on the product item
              $(hideSelector).hide();

              $(hideSelector).empty();

              $(showSelector).show();

              $(showSelector).append(element);

              productClick(element,result[i]);
          }

        // if between the highest an lowest value of showing products per page 
    }

}

function sortByFilterSelect(products){
  var filterSelect = $('#sort-by-filter-select').val();


  products = products.sort(function(a,b){
    a = makeNumber(a.Price);
    b = makeNumber(b.Price);
    switch(filterSelect){
      case "po":
              return a - b;
      case "pa":
              return b - a;
          break;
    }
  });

  
}
function freewallOptions(){
  //freewall js options
  var wall = new Freewall("#gallery");


  wall.reset({
      selector: '.cell',
      animate: true,
      cellW: 200,
      cellH: 200,
      onResize: function () {
          wall.fitWidth();
      }
  });
  // for scroll bar appear;
  $(window).trigger("resize");
}

