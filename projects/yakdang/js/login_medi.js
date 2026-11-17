 document.addEventListener("DOMContentLoaded", async function() {

  // JSON 회원 데이터 불러오기
  const response = await fetch('./js/product_user.json');
  const data = await response.json();

  const members = data.members;

  console.log(members);

  // 로그인 요소
  const userId = document.querySelector('.user_id');
  const userPw = document.querySelector('.user_pw');
  const btnLog = document.querySelector('.btn_log');

  // 아이디 형식 검사
  function checkId() {
    if (userId.value.length < 3 || userId.value.length > 10) {
      alert('사용할 수 없는 아이디입니다.');
      userId.value = '';
      userId.focus();
      return false;
    }

    return true;
  }

  // 비밀번호 형식 검사
  function checkPw() {
    if (userPw.value.length < 5) {
      alert('사용할 수 없는 비밀번호입니다.');
      userPw.select();
      return false;
    }

    return true;
  }

  // 로그인
  btnLog.addEventListener('click', () => {

    // 기존 제약조건 먼저 검사
    if (!checkId()) return;
    if (!checkPw()) return;

    // JSON 회원정보에서 아이디 검색
    const member = members.find(
      user => user.user_id === userId.value
    );

    // 아이디 없음
    if (!member) {
      alert('존재하지 않는 아이디입니다.');
      return;
    }
    // 비밀번호 비교
    if (member.user_pw === userPw.value) {
      alert(`${member.user_name}님 방문을 환영합니다.`);
    } else {
      alert('암호가 틀렸습니다.');
    }
  });
});
 
 
 // document.addEventListener("DOMContentLoaded", function() {
  //   function checkId() {
  //     if(userId.value.length < 3 || userId.value.length > 10) {
  //        alert('사용할 수 없는 아이디입니다');
  //        userId.value = '';
  //        userId.focus();
  //     }
  //   }
  //   function checkPw() {
  //     if(userPw1.value.length < 5) {
  //       alert('사용할 수 없는 비밀번호입니다.');
  //       userPw1.select();
  //     }
  //   }
  //   // function comparePw() {
  //   //   if(userPw1.value !== userPw2.value) {
  //   //     alert('암호가 일치하지 않습니다');
  //   //   }
  //   // }
  //   // function moveTel() {
  //   //   if(telSecond.value.length >=4) {
  //   //     telThird.focus();
  //   //   }
  //   // }
  //   let id = 'green1';
  //   let numId = '01034754605'
  //   let password = 'webd';
  //    let userId = document.querySelector('.user_id');
  //   let userPw = document.querySelector('.user_pw');
  //   let btnLog = document.querySelector('.btn_log');
  //   btnLog.addEventListener('click', () => {
  //     if(userId.value === id || userId.value === numId ) {
  //       if(userPw.value === password) {
  //         alert('방문을 환영합니다.')
  //       } else {
  //         alert('암호가 틀렸습니다.');
  //       }
  //     } else {
  //       alert('존재하지 않는 아이디입니다.');
  //     }
  //   })
  //  });
  /*----------------------- 비밀번호 보임 숨김 눈깜박이기 ----------------------*/
$(document).ready(function() {
  $('.password').on('click', function() {
    const passwordInput = $(this).prev('input');
    passwordInput.toggleClass('active');

    if (passwordInput.hasClass('active')) {
      $('.password i')
      .attr('class', 'fa-regular fa-eye-slash');
      passwordInput.attr('type', 'text');
    } else {
      $('.password i')
      .attr('class', 'fa-regular fa-eye');
      passwordInput.attr('type', 'password');
    }
  });
});

