(function(window) {
    var document = window.document;
    var fbRoot = document.createElement('div');
    document.body.appendChild(fbRoot);
  
    var fbCustomerChat = document.createElement('div'); 
    fbCustomerChat.setAttribute("id", "fb-customer-chat");
    fbCustomerChat.setAttribute("class", "fb-customerchat");
    fbCustomerChat.setAttribute("page_id", "22902200256207");
    fbCustomerChat.setAttribute("attribution", "gtm_setup_tool");   
    document.body.appendChild(fbCustomerChat);

    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v11.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
})(window);
