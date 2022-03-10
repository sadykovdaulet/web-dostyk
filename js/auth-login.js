$(function(){

  $('.auth-login-toggler').on('click', function(e){
    e.preventDefault();
    $('.auth-popup').addClass('is-active');
  })

  $('.auth-popup__close').on('click', function(e){
    $('.auth-popup').removeClass('is-active');
  })
  
  $('#auth-login').on('submit', function(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    if (
      formProps.login === 'daulet' &&
      formProps.password === '123456'
    ) {
      //успех
      setTimeout(() => {
        $('.auth-error-message').removeClass('is-active');
        $('.auth-popup').removeClass('is-active');
        window.location.href = window.location.origin + '/profile.html';
      }, 1500);
      
    } else {
      // ошибка
      $('.auth-error-message').addClass('is-active');
    }
  })
})