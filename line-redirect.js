/* line-redirect.js — 偵測 LINE 內建瀏覽器，強制跳轉外部瀏覽器 */
(function () {
  var ua = navigator.userAgent || '';
  if (!/Line\//i.test(ua)) return; // 不是 LINE 瀏覽器，略過

  var url = location.href;

  // LINE 官方參數：openExternalBrowser=1 會自動在外部瀏覽器開啟
  if (url.indexOf('openExternalBrowser=1') !== -1) return; // 已經處理過

  var sep = url.indexOf('?') !== -1 ? '&' : '?';
  location.replace(url + sep + 'openExternalBrowser=1');
})();
