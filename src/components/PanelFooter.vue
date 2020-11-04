<template>
  <div class="panel-footer">
    <div class="panel-footer__caption">
      Проект журнала "Понедельник начинается в субботу"
    </div>
    <a href="https://vsubbotu.ru">
      <img style="height: 40px;" src="@/assets/ps-logo-1-c-80.png" alt="">
    </a>
    <div class="footer-links">
      <a href="https://github.com/msveet/onlycat" class="footer-link">GITHUB</a>
    </div>
  </div>
</template>

<style>
  .panel-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 12px;
    color: #334;
  }
  .dark .panel-footer {
    color: #88a;
  }
  .panel-footer__caption {
    margin: 12px 0;
  }
  .footer-links {
    margin: 12px 0;
  }
  .footer-link {
    color: #5116dd;
  }
  .dark .footer-link {
    color: #88e;
  }
</style>
