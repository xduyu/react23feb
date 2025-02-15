import React from 'react';
import './css/hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Поздравляем всех защитников Отечества!</h2>
        <p>Пусть сила, мужество и удача всегда будут на вашей стороне.</p>
        <button className='btn23'><a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BD%D1%8C_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D0%B8%D0%BA%D0%B0_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0">Узнать больше</a></button>
      </div>
      <div className="hero-image">
        <img src="https://cdn.discordapp.com/attachments/1234396897398099992/1340271344339652628/pngwing.com_1.png?ex=67b1c075&is=67b06ef5&hm=c4c2df3bf72fc5e8772ab0969bab5582f8d435e10be449a481ad609d5654ea96&" alt="Сол1дат" />
      </div>
    </section>
  );
}

export default Hero;