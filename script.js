$(function() {
    // スムーススクロール
    $('a[href^="#"]').click(function() {
      const speed = 500;
      const href = $(this).attr("href");
      const target = $(href === "#" || href === "" ? 'html' : href);
      const position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  
    // 簡単なフォームバリデーション
    $("#contact-form").submit(function(e) {
      const name = $("input[name='name']").val().trim();
      const email = $("input[name='email']").val().trim();
      const message = $("textarea[name='message']").val().trim();
  
      if (name === "" || email === "" || message === "") {
        alert("すべての項目を入力してください。");
        e.preventDefault();
      } else {
        alert("送信しました！（ダミー）");
        e.preventDefault(); // 実際に送信しないように制御（後でPHPに繋ぐならここ修正）
      }
    });
  });
  