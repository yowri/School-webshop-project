 database.query("SELECT * FROM product", function(result){
    console.log(result);
    var length = 4;
    if(result.length < length){
      length = result.length;
    }
    for(var i =0; i < length; i ++){
      var element = $.parseHTML(getTemplateBlock(result[i]));

      $('.home-products').append(element);
      
      productClick(element,result[i]);
    }
});