document.addEventListener('DOMContentLoaded', function() {

  /* -------------------- 아이디 -------------------- */
  let userId = document.querySelector('.user_id');
  let idCheckBtn = document.querySelector('.id_check_btn');
  let oldId = 'green';
  idCheckBtn.addEventListener('click', checkId);
  function checkId() {
    if(userId.value.length < 5 || userId.value.length > 20) {
      alert('아이디는 5~20자 이내로 입력해 주세요.');
      userId.value = '';
      userId.focus();
    } else if(userId.value === oldId) {
      alert('이미 사용 중인 아이디입니다.');
      userId.value = '';
      userId.focus();
    } else {
      alert('사용 가능한 아이디입니다.');
    }
  } // checkId()

  /* -------------------- 비밀번호 -------------------- */
  let userPw = document.querySelector('.user_pw');
  let userPwCheck = document.querySelector('.user_pw_check');
  let pwCheckBtn = document.querySelector('.pw_check_btn');
  userPw.addEventListener('change', checkPw);
  pwCheckBtn.addEventListener('click', comparePw);
  function checkPw() {
    if(userPw.value.length < 8 || userPw.value.length > 20) {
      alert('비밀번호는 8~20자 이내로 입력해 주세요.');
      userPw.value = '';
      userPw.focus();
    } else {
      userPwCheck.focus();
    }
  } // checkPw()
  function comparePw() {
    if(userPwCheck.value === '') {
      alert('비밀번호 확인을 입력해 주세요.');
      userPwCheck.focus();
    } else if(userPw.value !== userPwCheck.value) {
      alert('비밀번호가 일치하지 않습니다.');
      userPwCheck.value = '';
      userPwCheck.focus();
    } else {
      alert('비밀번호가 일치합니다.');
    }
  } // comparePw()
  /* -------------------- 이메일 -------------------- */
  let userEmail = document.querySelector('.user_email');
  userEmail.addEventListener('change', checkEmail);
  function checkEmail() {
    let arrUrl = ['.co.kr','.com','.go.kr','.net','.or.kr'];
    let check1 = false;
    let check2 = false;
    if(userEmail.value.indexOf('@') > 0) {
      check1 = true;
    }

    for(let i = 0; i < arrUrl.length; i++) {
      if(userEmail.value.indexOf(arrUrl[i]) > 0) {
        check2 = true;
      }
    }
    if(check1 && check2) {
      alert('사용 가능한 이메일입니다.');
    } else {
      alert('잘못된 이메일 주소입니다.');
      userEmail.value = '';
      userEmail.focus();
    }
  } // checkEmail()
let joinSubmitBtn = document.querySelector('.join_submit_btn');
joinSubmitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let arrUrl = ['.co.kr', '.com', '.go.kr', '.net', '.or.kr'];
  let check1 = false;
  let check2 = false;
  // 이메일 @ 확인
  if(userEmail.value.indexOf('@') > 0) {
    check1 = true;
  }
  // 이메일 주소
  for(let i = 0; i < arrUrl.length; i++) {
    if(userEmail.value.indexOf(arrUrl[i]) > 0) {
      check2 = true;
    }
  }
  // 아이디 확인
  if(userId.value.length < 5 || userId.value.length > 20) {
    alert('아이디를 확인해 주세요.');
    userId.focus();
  // 기존 아이디 확인
  } else if(userId.value === oldId) {
    alert('이미 사용 중인 아이디입니다.');
    userId.focus();
  // 비밀번호 확인
  } else if(userPw.value.length < 8 || userPw.value.length > 20) {
    alert('비밀번호를 확인해 주세요.');
    userPw.focus();
  // 비밀번호 일치 확인
  } else if(userPw.value !== userPwCheck.value) {
    alert('비밀번호가 일치하지 않습니다.');
    userPwCheck.focus();
  // 이메일 확인
  } else if(check1 === false || check2 === false) {
    alert('이메일을 확인해 주세요.');
    userEmail.focus();
  // 전부 통과
  } else {
    alert('회원가입이 완료되었습니다.');
    location.href = './index_jQuery.html';
  }
});
}); // DOMContentLoaded