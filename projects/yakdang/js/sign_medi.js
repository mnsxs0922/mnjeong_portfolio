$(function(){
  const iconOpen = $('.icon_open');
  const iconClose = $('.icon_close');
  const logoImg = $('.logo_img');
  const fullBg = $('.full_bg');
  const closeText = $('.close_text');
  const subMenu = $('.main_gnb .sub');
  /* 메뉴 열기 */
  iconOpen.click(function(){
    fullBg.stop().animate({
      height: 300
    }, 300);
    subMenu.stop().fadeIn(400);
    iconOpen.hide();
    iconClose.css('display', 'inline-block');
    logoImg.hide();
    closeText.css('display', 'inline-block');
  });
  /* X 버튼 */
  iconClose.click(function(){
    fullBg.stop().animate({
      height: 0
    }, 300);
    subMenu.stop().fadeOut(200, function(){
      subMenu.removeAttr('style');
    });
    iconClose.hide();
    iconOpen.css('display', 'inline-block');
    closeText.hide();
    logoImg.show();
  });
  /* 닫기 버튼 */
  closeText.click(function(){
    fullBg.stop().animate({
      height: 0
    }, 300);
    subMenu.stop().fadeOut(200, function(){
      subMenu.removeAttr('style');
    });
    iconClose.hide();
    iconOpen.css('display', 'inline-block');
    closeText.hide();
    logoImg.show();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let agreeAll = document.querySelector('.agree_all');
  let agreeItem = document.querySelectorAll('.agree_item');
  let agreeRequired = document.querySelectorAll('.agree_required');
  let nextBtn = document.querySelector('.join_terms_next');
  // 모두 동의
  agreeAll.addEventListener('click', () => {
    if(agreeAll.checked === true) {
      agreeItem.forEach((item) => {
        item.checked = true;
      });
    } else {
      agreeItem.forEach((item) => {
        item.checked = false;
      });
    }
  });
  // 다음 버튼
  nextBtn.addEventListener('click', () => {
    let requiredCheck = true;
    agreeRequired.forEach((item) => {
      if(item.checked === false) {
        requiredCheck = false;
      }
    });
    if(requiredCheck === true) {
      location.href = './sign1.html';
    } else {
      alert('필수 이용약관에 모두 동의해 주세요.');
    }
  });
});

