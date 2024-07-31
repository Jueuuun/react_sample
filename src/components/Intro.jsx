import React from 'react'

// 이미지 링크 걸어야함
import about from "../assets/img/about.png";

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className='intro_title'>
          HAN JU EUN 
        </h1>
        <div className="intro_lines" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>

        <div className="intro_text">
          <div className="text">
            <div>MOON</div>
            <div>NIGHT</div>
            <div>STAR</div>
          </div>
          <div className="img">
            <img src={about} alt="이미지 연결" />
          </div>
        </div>

        <div className="intro_lines bottom" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Intro
