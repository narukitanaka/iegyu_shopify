$(function(){
  //1店舗目
  $('#subImg01 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg01 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg01 img').fadeOut(50, function() {
          $('#mainImg01 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //2店舗目
  $('#subImg02 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg02 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg02 img').fadeOut(50, function() {
          $('#mainImg02 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //3店舗目
  $('#subImg03 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg03 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg03 img').fadeOut(50, function() {
          $('#mainImg03 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //4店舗目
  $('#subImg04 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg04 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg04 img').fadeOut(50, function() {
          $('#mainImg04 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //5店舗目
  $('#subImg05 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg05 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg05 img').fadeOut(50, function() {
          $('#mainImg05 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //6店舗目
  $('#subImg06 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg06 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg06 img').fadeOut(50, function() {
          $('#mainImg06 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //7店舗目
  $('#subImg07 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg07 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg07 img').fadeOut(50, function() {
          $('#mainImg07 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //8店舗目
  $('#subImg08 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg08 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg08 img').fadeOut(50, function() {
          $('#mainImg08 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //9店舗目
  $('#subImg09 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg09 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg09 img').fadeOut(50, function() {
          $('#mainImg09 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
  //10店舗目
  $('#subImg10 img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg10 li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg10 img').fadeOut(50, function() {
          $('#mainImg10 img').attr('src', img).on('load', function() {
              $(this).fadeIn();
          })
    })
  });
});