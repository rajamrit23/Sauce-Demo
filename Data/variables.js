module.exports={
LoginPage:{
    'loginLogo':'//*[@class="login_logo"]',
    'username':'#user-name',
    'password':'//*[@data-test="password"]',
    'loginButton':'//input[@id="login-button"]',
    'loginDetails':'.login_credentials_wrap-inner',
    'loginError':'//*[@data-test="error"]',
    'menu':'.bm-burger-button',
    'logout':'#logout_sidebar_link',
},
  'menu': {
    'burgerButton': "//*[@class='bm-burger-button']",
    'closeButton': "//*[@class='bm-cross-button']",
    'allItems': "//*[@id='inventory_sidebar_link']",
    'about': "//*[@id='about_sidebar_link']",
    'logout': "//*[@id='logout_sidebar_link']",
    'resetAppState': "//*[@id='reset_sidebar_link']"
  },

  'header': {
    'appLogo': "//*[@class='app_logo']",
    'shoppingCart': "//*[@id='shopping_cart_container']//a",
    'cartIcon': "//*[@id='shopping_cart_container']"
  },
  item:{
    'invertoryItem':'.inventory_item',
    'image':'.inventory_item_img',
    'name':'.inventory_item_name',
    'desc':'.inventory_item_desc',
    'price':'inventory_item_price',
    'button':'.btn_inventory',

  },

  'inventory': {
    'productsLabel': "//*[@class='product_label']",
    'sortDropdown': "//*[@class='product_sort_container']",
    'sortAZ': "//*[@class='product_sort_container']/option[@value='az']",
    'sortZA': "//*[@class='product_sort_container']/option[@value='za']",
    'sortLowHigh': "//*[@class='product_sort_container']/option[@value='lohi']",
    'sortHighLow': "//*[@class='product_sort_container']/option[@value='hilo']",

    'backpack': {
      'imageLink': "//*[@id='item_4_img_link']",
      'titleLink': "//*[@id='item_4_title_link']",
      'description': "//*[@id='item_4_title_link']/following-sibling::*[@class='inventory_item_desc']",
      'price': "//*[@id='item_4_title_link']/ancestor::*[@class='inventory_item']//*[@class='inventory_item_price']",
      'addButton': "(//*[@class='inventory_item_label'])[1]"
    },

    'bikeLight': {
      'imageLink': "//*[@id='item_0_img_link']",
      'titleLink': "//*[@id='item_0_title_link']",
      'description': "//*[@id='item_0_title_link']/following-sibling::*[@class='inventory_item_desc']",
      'price': "//*[@id='item_0_title_link']/ancestor::*[@class='inventory_item']//*[@class='inventory_item_price']",
      'addButton': "(//*[@class='inventory_item_label'])[2]"
    },

    'boltShirt': {
      'imageLink': "//*[@id='item_1_img_link']",
      'titleLink': "//*[@id='item_1_title_link']",
      'description': "//*[@id='item_1_title_link']/following-sibling::*[@class='inventory_item_desc']",
      'price': "//*[@id='item_1_title_link']/ancestor::*[@class='inventory_item']//*[@class='inventory_item_price']",
      'addButton':"(//*[@class='inventory_item_label'])[3]"
    },

    'fleeceJacket': {
      'imageLink': "//*[@id='item_5_img_link']",
      'titleLink': "//*[@id='item_5_title_link']",
      'description': "//*[@id='item_5_title_link']/following-sibling::*[@class='inventory_item_desc']",
      'price': "//*[@id='item_5_title_link']/ancestor::*[@class='inventory_item']//*[@class='inventory_item_price']",
      'addButton': "(//*[@class='inventory_item_label'])[4]"
    },

    'onesie': {
      'imageLink': "//*[@id='item_2_img_link']",
      'titleLink': "//*[@id='item_2_title_link']",
      'description': "//*[@id='item_2_title_link']/following-sibling::*[@class='inventory_item_desc']",
      'price': "//*[@id='item_2_title_link']/ancestor::*[@class='inventory_item']//*[@class='inventory_item_price']",
      'addButton': "(//*[@class='inventory_item_label'])[5]"
    },

    'testRedShirt': {
      'imageLink': "//*[@id='item_3_img_link']",
      'titleLink': "//*[@id='item_3_title_link']",
      'description': "//*[@id='item_3_title_link']/following-sibling::*[@class='inventory_item_desc']",
      'price': "//*[@id='item_3_title_link']/ancestor::*[@class='inventory_item']//*[@class='inventory_item_price']",
      'addButton': "(//*[@class='inventory_item_label'])[6]"
    }
  },

  'footer': {
    'twitter': "//*[@class='social_twitter']",
    'facebook': "//*[@class='social_facebook']",
    'linkedin': "//*[@class='social_linkedin']",
    'footerText': "//*[@class='footer_copy']",
    'footerImage': "//*[@class='footer_robot']"
  }
}
