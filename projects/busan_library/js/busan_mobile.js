$(function() {
  /* =========================================
     HEADER / QUICK MENU
  ========================================= */
  const headerBottom = $('.header_bottom');
  const quickMenu = $('.quick');
  function updateHeader() {
    const scrollTop = $(window).scrollTop();

    if(scrollTop >= 800) {
      headerBottom.addClass('header_fixed');

      quickMenu
        .stop(true, true)
        .fadeIn(300)
        .css('display', 'flex');
    } else {
      headerBottom.removeClass('header_fixed');

      quickMenu
        .stop(true, true)
        .fadeOut(300);
    }
  }
  $(window).on('scroll', updateHeader);
  updateHeader();
function updateHeader() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if(scrollTop >= 800) {
        headerBottom.addClass('header_fixed');
    } else {
        headerBottom.removeClass('header_fixed');
    }
    if(windowHeight <= 800) {
        quickMenu.stop(true, true).hide();
        quickMenu.removeClass('open');
    } else if(scrollTop >= 800) {
        quickMenu.stop(true, true).fadeIn(300).css('display', 'flex');
    } else {
        quickMenu.stop(true, true).fadeOut(300);
    }
}
$(window).on('scroll resize', updateHeader);
updateHeader();

  /* =========================================
     FULLPAGE INDICATOR
  ========================================= */
  const fullpageBtn = $('.fullpage_dot');

  const fullpagePage = $(
    '.popular_books, .new_books, .all_notice, .insta_wrap'
  );

  fullpageBtn.on('click', function() {
    const index = $(this).index();
    const targetSection = fullpagePage.eq(index);

    if(!targetSection.length) {
      return;
    }
    const point = targetSection.offset().top;
    $('html, body')
      .stop()
      .animate({
        scrollTop: point
      }, 700);

    fullpageBtn.removeClass('active');
    $(this).addClass('active');
  });
  /* =========================================
     FULLPAGE ACTIVE
     스크롤 위치에 따라 자동 변경
  ========================================= */
  function updateFullpageIndicator() {
    const scrollTop = $(window).scrollTop();

    fullpagePage.each(function(index) {
      const sectionTop = $(this).offset().top - 250;

      if(scrollTop >= sectionTop) {
        fullpageBtn.removeClass('active');

        fullpageBtn
          .eq(index)
          .addClass('active');
      }
    });
  }

  $(window).on('scroll', updateFullpageIndicator);

  updateFullpageIndicator();


  /* =========================================
     QUICK MENU
  ========================================= */
  $('.quick_toggle').on('click', function(event) {
    event.stopPropagation();
    quickMenu.toggleClass('open');
  });
  /* =========================================
     QUICK MENU 외부 클릭 시 닫기
  ========================================= */
  $(document).on('click', function(event) {
    if(!$(event.target).closest('.quick').length) {
      quickMenu.removeClass('open');
    }
  });
  /* =========================================
     TOP BUTTON
  ========================================= */
  $('.btn_top a').on('click', function(event) {
    event.preventDefault();

    $('html, body')
      .stop()
      .animate({
        scrollTop: 0
      }, 1000);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  /* =========================================
     좌석 현황 / 대관 현황
  ========================================= */
  const btnSeat = document.querySelector('.sht_btn1');
  const btnRental = document.querySelector('.sht_btn2');

  const realChart = document.querySelector('.real_time_chart');
  const roomList = document.querySelector('.room_list');
  const rentalSheet = document.querySelector('.rental_sheet');

  if(
    btnSeat &&
    btnRental &&
    realChart &&
    roomList &&
    rentalSheet
  ) {
    btnSeat.addEventListener('click', function() {
      realChart.style.display = '';
      roomList.style.display = '';
      rentalSheet.style.display = 'none';

      btnSeat.classList.add('active');
      btnRental.classList.remove('active');
    });

    btnRental.addEventListener('click', function() {
      realChart.style.display = 'none';
      roomList.style.display = 'none';
      rentalSheet.style.display = 'block';

      btnRental.classList.add('active');
      btnSeat.classList.remove('active');
    });
  }


  /* =========================================
     인기 도서
  ========================================= */
  const categoryMenu = document.querySelectorAll(
    '.popular_books_category_menu'
  );

  const bookRank = document.querySelectorAll(
    '.popular_books_rank'
  );

  const bookImg = document.querySelectorAll(
    '.popular_books_image img'
  );

  const bookTitle = document.querySelectorAll(
    '.popular_books_book_title'
  );

  const bookWriter = document.querySelectorAll(
    '.popular_books_writer'
  );

  const bookTag = document.querySelectorAll(
    '.popular_books_tag'
  );

  const popularDots = document.querySelectorAll(
    '.popular_books_dot'
  );

  const leftBtn = document.querySelector(
    '.popular_book_left'
  );

  const rightBtn = document.querySelector(
    '.popular_book_right'
  );


  /* 전체 */
  const allBooks = [
    {
      rank: '01',
      img: './images/book30.jpg',
      title: '사랑의 4분의 3은 호기심이다',
      writer: '헤르만 헤세',
      tag: '문학'
    },
    {
      rank: '02',
      img: './images/book29.jpg',
      title: '인간 실격',
      writer: '다자이 오사무',
      tag: '문학'
    },
    {
      rank: '03',
      img: './images/book28.jpg',
      title: '삶을 위한 철학 수업',
      writer: '김환주',
      tag: '인문'
    },
    {
      rank: '04',
      img: './images/book26.jpg',
      title: '소울 인 포메이션',
      writer: '마이클 샌델',
      tag: '인문'
    },
    {
      rank: '05',
      img: './images/book25.jpg',
      title: '싯다르타',
      writer: '헤르만 헤세',
      tag: '문학'
    }
  ];


  /* 인문 */
  const humanitiesBooks = [
    {
      rank: '01',
      img: './images/book11.jpg',
      title: '싯다르타',
      writer: '헤르만 헤세',
      tag: '인문'
    },
    {
      rank: '02',
      img: './images/book12.jpg',
      title: '데미안',
      writer: '헤르만 헤세',
      tag: '인문'
    },
    {
      rank: '03',
      img: './images/book13.jpg',
      title: '브람스를 좋아하세요',
      writer: '프랑수아즈 사강',
      tag: '인문'
    },
    {
      rank: '04',
      img: './images/book14.jpg',
      title: '체호프 단편선',
      writer: '안톤 체호프',
      tag: '인문'
    },
    {
      rank: '05',
      img: './images/book15.jpg',
      title: '인간 실격',
      writer: '다자이 오사무',
      tag: '인문'
    }
  ];


  /* 문학 */
  const literatureBooks = [
    {
      rank: '01',
      img: './images/book02.jpg',
      title: '문워크 마이클 잭슨',
      writer: '마이클 잭슨',
      tag: '문학'
    },
    {
      rank: '02',
      img: './images/book29.jpg',
      title: '화성에 도시를 세운다면',
      writer: '잭 와이너스미스(Zach Weinersmith)와 켈리 와이너스미스 부부',
      tag: '문학'
    },
    {
      rank: '03',
      img: './images/book28.jpg',
      title: 'THE GRID the Nature of God',
      writer: '유정한',
      tag: '문학'
    },
    {
      rank: '04',
      img: './images/book27.jpg',
      title: '이기적 유전자',
      writer: '리처드 도킨스',
      tag: '문학'
    },
    {
      rank: '05',
      img: './images/book26.jpg',
      title: 'COSMOS',
      writer: '칼 세이건',
      tag: '문학'
    }
  ];


  /* 사회 */
  const societyBooks = [
    {
      rank: '01',
      img: './images/book26.jpg',
      title: '공정하다는 착각',
      writer: '마이클 샌델',
      tag: '사회'
    },
    {
      rank: '02',
      img: './images/book20.jpg',
      title: '팩트풀니스',
      writer: '한스 로슬링',
      tag: '사회'
    },
    {
      rank: '03',
      img: './images/book25.jpg',
      title: '트렌드 코리아',
      writer: '김난도',
      tag: '사회'
    },
    {
      rank: '04',
      img: './images/book28.jpg',
      title: '도둑맞은 집중력',
      writer: '요한 하리',
      tag: '사회'
    },
    {
      rank: '05',
      img: './images/book21.jpg',
      title: '세계는 왜 싸우는가',
      writer: '김영미',
      tag: '사회'
    }
  ];


  /* 자연과학 */
  const scienceBooks = [
    {
      rank: '01',
      img: './images/book21.jpg',
      title: '코스모스',
      writer: '칼 세이건',
      tag: '자연과학'
    },
    {
      rank: '02',
      img: './images/book28.jpg',
      title: '이기적 유전자',
      writer: '리처드 도킨스',
      tag: '자연과학'
    },
    {
      rank: '03',
      img: './images/book25.jpg',
      title: '시간의 역사',
      writer: '스티븐 호킹',
      tag: '자연과학'
    },
    {
      rank: '04',
      img: './images/book29.jpg',
      title: '물고기는 존재하지 않는다',
      writer: '룰루 밀러',
      tag: '자연과학'
    },
    {
      rank: '05',
      img: './images/book20.jpg',
      title: '떨림과 울림',
      writer: '김상욱',
      tag: '자연과학'
    }
  ];


  /* 생활 / 취미 */
  const hobbyBooks = [
    {
      rank: '01',
      img: './images/book20.jpg',
      title: '면도날',
      writer: '김민철',
      tag: '생활/취미'
    },
    {
      rank: '02',
      img: './images/book25.jpg',
      title: '증권투자론',
      writer: '김혜정',
      tag: '생활/취미'
    },
    {
      rank: '03',
      img: './images/book29.jpg',
      title: '작은 정원의 시작',
      writer: '박정민',
      tag: '생활/취미'
    },
    {
      rank: '04',
      img: './images/book21.jpg',
      title: '취향의 발견',
      writer: '이수진',
      tag: '생활/취미'
    },
    {
      rank: '05',
      img: './images/book26.jpg',
      title: '주말의 요리',
      writer: '정재훈',
      tag: '생활/취미'
    }
  ];


  const bookData = [
    allBooks,
    humanitiesBooks,
    literatureBooks,
    societyBooks,
    scienceBooks,
    hobbyBooks
  ];

  let popularIndex = 0;


  function changeBooks(data) {
    if(!data) {
      return;
    }

    bookRank.forEach(function(rank, index) {
      if(!data[index]) {
        return;
      }

      rank.textContent = data[index].rank;

      if(bookImg[index]) {
        bookImg[index].src = data[index].img;
        bookImg[index].alt = data[index].title;
      }

      if(bookTitle[index]) {
        bookTitle[index].textContent =
          data[index].title;
      }

      if(bookWriter[index]) {
        bookWriter[index].textContent =
          data[index].writer;
      }

      if(bookTag[index]) {
        bookTag[index].textContent =
          data[index].tag;
      }
    });
  }


  function changeCategory(index) {
    if(!bookData[index]) {
      return;
    }

    categoryMenu.forEach(function(menu) {
      menu.classList.remove('active');
    });

    popularDots.forEach(function(dot) {
      dot.classList.remove('active');
    });

    if(categoryMenu[index]) {
      categoryMenu[index].classList.add('active');
    }

    if(popularDots[index]) {
      popularDots[index].classList.add('active');
    }

    changeBooks(bookData[index]);
  }


  categoryMenu.forEach(function(menu, index) {
    menu.addEventListener('click', function() {
      popularIndex = index;
      changeCategory(popularIndex);
    });
  });


  if(rightBtn) {
    rightBtn.addEventListener('click', function() {
      popularIndex++;

      if(popularIndex >= bookData.length) {
        popularIndex = 0;
      }

      changeCategory(popularIndex);
    });
  }


  if(leftBtn) {
    leftBtn.addEventListener('click', function() {
      popularIndex--;

      if(popularIndex < 0) {
        popularIndex = bookData.length - 1;
      }

      changeCategory(popularIndex);
    });
  }


  popularDots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      popularIndex = index;
      changeCategory(popularIndex);
    });
  });


  /* =========================================
     문화행사 포스터
  ========================================= */
  const cultureImg = document.querySelector(
    '.culture_box_content img'
  );

  const cultureLeftBtn = document.querySelector(
    '.culture_box_btn'
  );

  const cultureRightBtn = document.querySelector(
    '.culture_board_btn'
  );

  const culturePage = document.querySelector(
    '.culture_box_page'
  );

  const cultureTotal = document.querySelector(
    '.culture_box_total'
  );

  const cultureImages = [
    './images/notice_poster.jpg',
    './images/notice_poster02.jpg',
    './images/notice_poster03.png',
    './images/notice_poster04.jpg',
    './images/notice_poster05.jpg'
  ];

  let cultureIndex = 0;


  function changeCulture() {
    if(cultureImg) {
      cultureImg.src = cultureImages[cultureIndex];
    }

    if(culturePage) {
      culturePage.textContent =
        String(cultureIndex + 1).padStart(2, '0');
    }
  }


  if(cultureTotal) {
    cultureTotal.textContent =
      String(cultureImages.length).padStart(2, '0');
  }


  if(cultureRightBtn) {
    cultureRightBtn.addEventListener(
      'click',
      function() {
        cultureIndex++;

        if(cultureIndex >= cultureImages.length) {
          cultureIndex = 0;
        }

        changeCulture();
      }
    );
  }


  if(cultureLeftBtn) {
    cultureLeftBtn.addEventListener(
      'click',
      function() {
        cultureIndex--;

        if(cultureIndex < 0) {
          cultureIndex =
            cultureImages.length - 1;
        }

        changeCulture();
      }
    );
  }


  /* =========================================
     NEW BOOKS SLIDE
  ========================================= */
  const newBooksSlide = document.querySelector(
    '.new_books_slide'
  );

  const newBooksItems = document.querySelectorAll(
    '.new_books_slide_item'
  );

  const newBooksPage = document.querySelector(
    '.new_books_page strong'
  );

  const newBooksTotal = document.querySelector(
    '.new_books_page span'
  );

  const newBooksSaveBtns =
    document.querySelectorAll('.new_books_save');


  if(newBooksTotal) {
    newBooksTotal.textContent =
      `/ ${newBooksItems.length}`;
  }


  function getNewBooksSlideWidth() {
    if(
      !newBooksSlide ||
      !newBooksItems.length
    ) {
      return 0;
    }

    return newBooksItems[0].offsetWidth;
  }


  function updateNewBooksPage() {
    if(!newBooksSlide) {
      return;
    }

    const slideWidth = getNewBooksSlideWidth();

    if(slideWidth === 0) {
      return;
    }

    const index = Math.round(
      newBooksSlide.scrollLeft / slideWidth
    );

    if(newBooksPage) {
      newBooksPage.textContent =
        Math.min(
          index + 1,
          newBooksItems.length
        );
    }
  }


  if(newBooksSlide) {
    newBooksSlide.addEventListener(
      'scroll',
      updateNewBooksPage
    );

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;


    newBooksSlide.addEventListener(
      'mousedown',
      function(event) {
        if(window.innerWidth < 1025) {
          return;
        }

        isDragging = true;
        startX = event.pageX;
        startScrollLeft =
          newBooksSlide.scrollLeft;

        newBooksSlide.style.cursor =
          'grabbing';

        newBooksSlide.style.scrollSnapType =
          'none';

        newBooksSlide.style.scrollBehavior =
          'auto';
      }
    );


    newBooksSlide.addEventListener(
      'mousemove',
      function(event) {
        if(!isDragging) {
          return;
        }

        event.preventDefault();

        const moveX =
          event.pageX - startX;

        newBooksSlide.scrollLeft =
          startScrollLeft - moveX;
      }
    );


    function endNewBooksDrag() {
      if(!isDragging) {
        return;
      }

      isDragging = false;

      newBooksSlide.style.cursor =
        'grab';

      const slideWidth =
        getNewBooksSlideWidth();

      if(slideWidth === 0) {
        return;
      }

      let index = Math.round(
        newBooksSlide.scrollLeft /
        slideWidth
      );

      if(index < 0) {
        index = 0;
      }

      if(index >= newBooksItems.length) {
        index = newBooksItems.length - 1;
      }

      newBooksSlide.style.scrollSnapType =
        'x mandatory';

      newBooksSlide.style.scrollBehavior =
        'smooth';

      newBooksSlide.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });

      if(newBooksPage) {
        newBooksPage.textContent =
          index + 1;
      }
    }


    newBooksSlide.addEventListener(
      'mouseup',
      endNewBooksDrag
    );

    newBooksSlide.addEventListener(
      'mouseleave',
      endNewBooksDrag
    );


    const newBooksImages =
      newBooksSlide.querySelectorAll('img');

    newBooksImages.forEach(function(image) {
      image.addEventListener(
        'dragstart',
        function(event) {
          event.preventDefault();
        }
      );
    });

    updateNewBooksPage();
  }


  /* =========================================
     NEW BOOKS 찜하기
  ========================================= */
  newBooksSaveBtns.forEach(function(button) {
    button.addEventListener(
      'click',
      function() {
        button.classList.toggle('active');

        const icon = button.querySelector(
          '.material-symbols-outlined'
        );

        if(!icon) {
          return;
        }

        if(button.classList.contains('active')) {
          icon.textContent = 'bookmark';
        } else {
          icon.textContent =
            'bookmark_border';
        }
      }
    );
  });


  /* =========================================
     휴관일
  ========================================= */
  const noticePrev = document.querySelector(
    '.notice_prev'
  );

  const noticeNext = document.querySelector(
    '.notice_next'
  );

  const noticeMonth = document.querySelector(
    '.notice_month'
  );

  const noticeDays = document.querySelectorAll(
    '.notice_day span'
  );

  const noticeData = [
    {
      month: '2026년 05월 휴관일',
      days: [
        '05.04',
        '05.11',
        '05.18',
        '05.25'
      ]
    },
    {
      month: '2026년 06월 휴관일',
      days: [
        '06.01',
        '06.08',
        '06.15',
        '06.22'
      ]
    },
    {
      month: '2026년 07월 휴관일',
      days: [
        '07.06',
        '07.13',
        '07.20',
        '07.27'
      ]
    }
  ];

  let noticeIndex = 2;


  function noticeChange() {
    if(noticeMonth) {
      noticeMonth.textContent =
        noticeData[noticeIndex].month;
    }

    noticeDays.forEach(function(day, index) {
      if(noticeData[noticeIndex].days[index]) {
        day.textContent =
          noticeData[noticeIndex].days[index];
      }
    });
  }


  if(noticePrev) {
    noticePrev.addEventListener(
      'click',
      function() {
        noticeIndex--;

        if(noticeIndex < 0) {
          noticeIndex =
            noticeData.length - 1;
        }

        noticeChange();
      }
    );
  }


  if(noticeNext) {
    noticeNext.addEventListener(
      'click',
      function() {
        noticeIndex++;

        if(noticeIndex >= noticeData.length) {
          noticeIndex = 0;
        }

        noticeChange();
      }
    );
  }

  noticeChange();
});