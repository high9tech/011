function appendConsole(msg) {
  const consoleBox = document.getElementById('consoleBox');
  if (!consoleBox) return;
  const line = document.createElement('div');
  line.className = 'console-line';
  line.innerHTML = `<span class="prefix">[-]</span> ${msg}`;
  consoleBox.appendChild(line);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function startJailbreak() {
  appendConsole("جاري بدء العملية...");
  setTimeout(() => {
    appendConsole("تشغيل ثغرة الـ WebKit...");
  }, 800);
  setTimeout(() => {
    appendConsole("تحميل الـ Kernel Payload...");
  }, 1600);
  setTimeout(() => {
    appendConsole("<span class='status-success'>تم تفعيل Jailbreak بنجاح!</span>");
  }, 2500);
}
