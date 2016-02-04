var book1 = {
  name : "Redwall",
  category : "Fiction",
  picture_url :  "http://vignette4.wikia.nocookie.net/redwall/images/4/49/RedwallUSCover.jpg/revision/latest?cb=20130119055011",
  price : 19.99,
  selling_points : "Mice fight off evil forces of evil",
  id : "redwall",
  class : "book"
};

var book2 = {
  name : "The Fault in Our Stars",
  category : "fiction",
  picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e0/34/ec/e034ec71163f973a57f51e90be82c60d.jpg",
  price : 15.99,
  selling_points : "It's a John Green book",
  id : "the-fault-in-our-stars",
  class : "book"
};

var album1 = {
  name : "Year of the Gentleman",
  category : "R&B",
  picture_url : "https://upload.wikimedia.org/wikipedia/en/4/4d/Ne-Yo_-_Year_of_The_Gentleman.png",
  price : 7.99,
  selling_points : "Lorem Ipsum",
  id : "year-of-the-gentleman",
  class : "music"
};

var album2 = {
  name : "Purpose",
  category : "Pop",
  picture_url : "http://images.rapgenius.com/726b5f1c482ef2a2ae2320e2e91232d4.1000x1000x1.jpg",
  price : 6.99,
  selling_points : "Lorem Ipsum",
  id : "purpose",
  class : "music"
};

var add_to_page = function(product) {
  $('#content').append("<div id=\"" + product.id + "\" class=\"" + product.class + product\"><div class=\"name\"></div><div class=\"picture\"></div><div class=\"selling-points\"></div><div class=\"category\"></div><div class=\"price\"></div></div>");
  $('#' + product.id + ' .name').text(product.name);
  $('#' + product.id + ' .picture').html("<img src=\"" + product.picture_url + "\" />");
  $('#' + product.id + ' .category').text(product.category);
  $('#' + product.id + ' .price').text(product.price);
  $('#' + product.id + ' .selling-points').text(product.selling_points);
}

add_to_page(book1);
add_to_page(book2);
add_to_page(album1);
add_to_page(album2);
