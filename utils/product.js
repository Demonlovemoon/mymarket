const app = getApp()

function getProducts(resolve){
  app.request({
      url:"https://rapi.bayekeji.com/products",
      success: resolve,
      fail: function(){}
    })
}

function getProduct(id,resolve) {
  app.request({
    url: "https://rapi.bayekeji.com/products/${id}",
    success: resolve,
    fail: function(){},
    })
}