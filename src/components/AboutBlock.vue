<template>
  <div class="about-block">
    <div class="about-part">
      <div class="part-text">
        <h2>Переводить - просто</h2>
        <p>
          ONLYCAT - это простой CAT-инструмент для преводчика-одиночки. <br>CAT tool (Computer-assisted translation tool) – это комплексное решение для переводчиков и компаний, которые занимаются профессиональными переводами. Пероочередная задача CAT инструмента – сократить время на перевод документа за счет машинного перевода, и предоставить удобный редактор.
        </p>
        <p>
          Разработчик данного сервиса занимается переводами в качестве хобби. Этим обусловлен минималистичный набор функций. Можно загрузить текст, автоматический перевести, отредактировать и выгрузить результат.
        </p>
      </div>
      <div class="part-illustration">
        <img class="about-block__illustration" src="@/assets/typewriters.png" alt="">
      </div>
    </div>
    <div class="about-part">
      <div class="part-illustration">
        <img class="about-block__illustration" src="@/assets/typewriters.png" alt="">
      </div>
      <div class="part-text">
        <h2>Концентрация на тексте</h2>
        <p>
          Основное предназначение сервиса ONLYCAT - дать простой редактор перевода. Редактировать объемный текст лучше в едином пространстве, без разбиения на отдельные фразы. При этом сохранилась посдсветка соответствующих предложений в исходнике. Так удобнее оценивать соседние части текста и вычитывать весь текст тут же.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  .about-block {
    width: 980px;
  }
  .about-block__illustration {
    float: right;
    margin: 24px;
  }
  .about-part {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 32px 0;
  }
</style>
