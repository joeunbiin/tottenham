// searchbox
$('#header .open').on('click', function (e) {
    e.preventDefault()
    $('.search_open').addClass('on')
})
$('#header .close').on('click', function(e){
    e.preventDefault()
    $('.search_open').removeClass('on')
})





// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize = 1024;

function scrollOX(status) {
    $('html').css({
        overflowY: status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd > 0) {
    deviceSize = deviceSize - swd
}

function init() {
    var ww = $(window).width()
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        $('.search #sbox').removeClass('on')
        // $('.depth1 > li').removeClass('on')
        $('.depth1 > li').find('.depth2').css({
            display: 'none'
        })
        $('#nav').css({
            opacity: '1',
            right: 0
        })
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .close').removeClass('on')
        $('#header #nav').css({
            right: '-197px',
            opacity: 0
        })
        $('#header .open').addClass('on')
        $('.search #sbox').removeClass('on')
    }
}

init()

$(window).on('resize', function () {
    init()
})

// 여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램


// Header구역
$('.depth1 > li').hover(
    function () {
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().slideDown(300) // 더 부드럽게 뜸
        }
    },
    function () {
        if ($('html').hasClass('pc')) {
            $(this).find('.depth2').stop().slideUp(300) // 더 부드럽게 사라짐
        }
    }
)
$('.depth1 > li').on('click', function (e) {
    if ($('html').hasClass('mobile')) {
        e.preventDefault()
        $(this).find('.depth2').stop().slideToggle(300) // 열려있으면 닫고, 닫혀있으면 열고
        $(this).siblings().find('.depth2').stop().slideUp(300)
    }
})

$('.depth2 > li').on('click', function (e) {
    e.stopPropagation()
})





$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$(".slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    speed: 200, // 바뀌는시간(생략가능)
    slidesToShow: 5, // 보여질슬라이드수 
    slidesToScroll: 1, // 이동슬라이드수
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: false,
    
})

//맨위로 버튼 클릭시 부드럽게 스크롤시키기
$('.gotop').on('click', function(e){
    e.preventDefault()
    $('html').animate({scrollTop: 0}, 500)
})

// ranking 페이지
var num;
$('.season > li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    num = $(this).index()
    $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
})

// shop 페이지
var num;
$('.best_tab > li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    num = $(this).index()
    $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
})

// result 페이지
$('.mcontent > div .btn').on('click', function () {
    $(this).parent().next().toggleClass('on')
})

var num;
$('.result_tab > li').on('click', function () {
    $(this).addClass('active')
        .siblings().removeClass('active')
    num = $(this).index()
    $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
})

// fans 페이지
$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 2000, // 간격시간
    dots: false,
    speed: 500, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수
    slidesToScroll: 1, // 이동슬라이드수
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    centerMode: true, //미니 슬라이드 모드
    centerPadding: "230px", //좌우측 끝에 보여질 이미지 넓이값
})
