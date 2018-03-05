var products = []

$(document).ready(function() {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    method: 'GET'
  }).done( function(products) {
    var productArea = $('#products')
    productArea.empty()
    products.forEach( function(product) {
      var div =
      '<div id=' +
      product.id +
      ' class="four wide column ui card"><p>' +
      product.name +
      '</p><p>' +
      product.description +
      '</p><div class="extra content"><div class="ui three buttons"><div class="ui basic blue button" onClick="sayHello(' +
      product.id +
      ')">Show</div><div class="ui basic green button">Edit</div><div class="ui basic red button">Delete</div></div></div></div>';
      productArea.append(div);
    })
  })
})

function sayHello(id) {
  $.ajax({
    url: `http://json-server.devpointlabs.com/api/v1/products/${id}`,
    method: 'GET'
  }).done( function(product) {
    var productArea = $('#products')
    productArea.empty();
    var div =
    '<div id=' +
    product.id +
    ' class="four wide column ui card"><p>' +
    product.name +
    '</p><p>' +
    product.description +
    '</p>';
    productArea.append(div);
  })
}
