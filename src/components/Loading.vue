<script lang="ts" setup>

import Loading from '@/components/animation/LoaderAnimation.vue';

</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-[#0b1620] z-50">
    <!-- Aquí puedes poner tu animación o ícono -->
    <div class="text-white text-4xl font-bold ">
      <Loading />    
    </div>

    <div class="container center">
      <div class="rope center">
        <div class="legs center">
          <div class="boot-l"></div>
          <div class="boot-r"></div>
        </div>
        <div class="costume center">
          <div class="spider">
            <div class="s1 center"></div>
            <div class="s2 center"></div>
            <div class="s3"></div>
            <div class="s4"></div>
          </div>
          <div class="belt center"></div>
          <div class="hand-r"></div>
          <div class="hand-l"></div>
          <div class="neck center"></div>
          <div class="mask center">
            <div class="eye-l"></div>
            <div class="eye-r"></div>
          </div>
          <div class="cover center"></div>
        </div>
      </div>
    </div>

    <div class="macbook">
      <div class="inner">
        <div class="screen">
          <div class="face-one">
            <div class="camera"></div>
            <div class="display">
              <div class="shade"></div>
            </div>
            <span>MacBook Air</span>
          </div>
      <title>Layer 1</title>
      </div>
        <div class="macbody">
          <div class="face-one">
            <div class="touchpad">
            </div>
            <div class="keyboard">
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key space"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
              <div class="key f"></div>
            </div>
          </div>
          <div class="pad one"></div>
          <div class="pad two"></div>
          <div class="pad three"></div>
          <div class="pad four"></div>
        </div>
      </div>
      <div class="shadow"></div>
    </div>


  </div>
</template>

<script setup>
</script>

<style scoped>


/* From Uiverse.io by TechByElijah */ 
.center {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
}

.container {
  height: 31.25em;
  width: 21.87em;
  margin-top: -325px;
}

.rope {
  height: 13.62em;
  width: 0.15em;
  background-color: #ffffff;
  animation: swing 2s infinite;
}

@keyframes swing {
  50% {
    transform: translateY(-4em);
  }
}

.legs {
  height: 1.12em;
  width: 7.5em;
  background-color: transparent;
  box-shadow: 0 0 0 0.12em #140243, 0 0 0 1.06em #1b1676, 0 0 0 1.18em #140243;
  top: 12.5em;
  border-radius: 3.12em;
}

.boot-l,
.boot-r {
  height: 1.25em;
  width: 2.5em;
  background-color: #e32832;
  position: absolute;
  border: 0.12em solid #140243;
  bottom: 1.12em;
}

.boot-l {
  left: 1em;
}

.boot-r {
  transform: rotateY(180deg);
  left: 3.81em;
}

.boot-l:before,
.boot-r:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 1.12em solid #140243;
  border-left: 1.18em solid transparent;
  bottom: 1.31em;
  left: 1.46em;
}

.boot-l:after,
.boot-r:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 1.12em solid #e32832;
  border-left: 1em solid transparent;
  right: 0;
  top: -0.93em;
}

.costume {
  height: 6.25em;
  width: 5.62em;
  background: linear-gradient(
    to right,
    #1b1676 20%,
    #e32832 20%,
    #e32832 80%,
    #1b1676 80%
  );
  border: 0.12em solid #140243;
  top: 14.68em;
}

.spider {
  height: 1.87em;
  width: 0.93em;
  background-color: #140243;
  border-radius: 45%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: calc(50% + 0.93em);
  left: 50%;
}

.s1,
.s3 {
  height: 7.5em;
  width: 2.5em;
  border-radius: 0 0 1.37em 1.37em;
  border-bottom: 0.12em solid #140243;
  position: absolute;
}

.s2,
.s4 {
  height: 7.5em;
  width: 3.12em;
  border-radius: 0 0 1.56em 1.56em;
  border-bottom: 0.12em solid #140243;
  position: absolute;
}

.s1,
.s2,
.s3,
.s4 {
  left: 50%;
}

.s1 {
  bottom: 1.43em;
}

.s2 {
  bottom: 0.93em;
}

.s3,
.s4 {
  transform: translateX(-50%) rotateX(180deg);
}

.s3 {
  top: 1.43em;
}

.s4 {
  top: 0.93em;
}

.belt {
  height: 0.43em;
  width: 5.87em;
  background-color: #e32832;
  border: 0.12em solid #140243;
  top: -0.12em;
}

.hand-r,
.hand-l {
  height: 8.12em;
  background: linear-gradient(
    #e32832 4.6em,
    #140243 4.6em,
    #140243 4.75em,
    #1b1676 4.75em,
    #1b1676 8.12em
  );
  width: 1.12em;
  border: 0.12em solid #140243;
  border-radius: 1.25em;
  position: absolute;
  transform-origin: bottom;
  bottom: -0.12em;
}

.hand-r {
  right: -0.75em;
  transform: rotate(-22deg);
}

.hand-l {
  left: -0.75em;
  transform: rotate(22deg);
}

.neck {
  height: 0.37em;
  width: 1.25em;
  background-color: #e32832;
  bottom: -0.62em;
  border: 0.12em solid #140243;
}

.mask {
  height: 4.65em;
  width: 4.06em;
  background-color: #e32832;
  border-radius: 50% 50% 50% 50% / 54% 54% 46% 46%;
  border: 0.12em solid #140243;
  top: 6.56em;
}

.eye-l,
.eye-r {
  height: 0.68em;
  width: 1.37em;
  background-color: #ffffff;
  border-radius: 1.37em 1.37em 0 0;
  border: 0.12em solid #140243;
  position: absolute;
  top: 2.1em;
}

.eye-l {
  left: 0.3em;
}

.eye-r {
  right: 0.3em;
}

.cover {
  height: 3.12em;
  width: 0.15em;
  background-color: #ffffff;
  bottom: 8.12em;
}

@media screen and (min-width: 600px) {
  .container {
    font-size: 20px;
  }
}

/* From Uiverse.io by Ashon-G */ 
.macbook {
  width: 150px;
  height: 96px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -85px 0 0 -78px;
  perspective: 500px;
}

.shadow {
  position: absolute;
  width: 60px;
  height: 0px;
  left: 40px;
  top: 160px;
  transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
  box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
  animation: shadow infinite 7s ease;
}

.inner {
  z-index: 20;
  position: absolute;
  width: 150px;
  height: 96px;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  animation: rotate infinite 7s ease;
}

.screen {
  width: 150px;
  height: 96px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  background: #ddd;
  transform-style: preserve-3d;
  transform-origin: 50% 93px;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  animation: lid-screen infinite 7s ease;
  background-image: linear-gradient(45deg, rgba(0,0,0,0.34) 0%,rgba(0,0,0,0) 100%);
  background-position: left bottom;
  background-size: 300px 300px;
  box-shadow: inset 0 3px 7px rgba(255,255,255,0.5);
}

.screen .logo {
  position: absolute;
  width: 20px;
  height: 24px;
  left: 50%;
  top: 50%;
  margin: -12px 0 0 -10px;
  transform: rotateY(180deg) translateZ(0.1px);
}

.screen .face-one {
  width: 150px;
  height: 96px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  background: #d3d3d3;
  transform: translateZ(2px);
  background-image: linear-gradient(45deg,rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
}

.screen .face-one .camera {
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background: #000;
  position: absolute;
  left: 50%;
  top: 4px;
  margin-left: -1.5px;
}

.screen .face-one .display {
  width: 130px;
  height: 74px;
  margin: 10px;
  background-color: #000;
  background-size: 100% 100%;
  border-radius: 1px;
  position: relative;
  box-shadow: inset 0 0 2px rgba(0,0,0,1);
}

.screen .face-one .display .shade {
  position: absolute;
  left: 0;
  top: 0;
  width: 130px;
  height: 74px;
  background: linear-gradient(-135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 47%,rgba(255,255,255,0) 48%);
  animation: screen-shade infinite 7s ease;
  background-size: 300px 200px;
  background-position: 0px 0px;
}

.screen .face-one span {
  position: absolute;
  top: 85px;
  left: 57px;
  font-size: 6px;
  color: #666
}

.macbody {
  width: 150px;
  height: 96px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  background: #cbcbcb;
  transform-style: preserve-3d;
  transform-origin: 50% bottom;
  transform: rotateX(-90deg);
  animation: lid-macbody infinite 7s ease;
  background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
}

.macbody .face-one {
  width: 150px;
  height: 96px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  transform-style: preserve-3d;
  background: #dfdfdf;
  animation: lid-keyboard-area infinite 7s ease;
  transform: translateZ(-2px);
  background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
}

.macbody .touchpad {
  width: 40px;
  height: 31px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 4px;
  margin: -44px 0 0 -18px;
  background: #cdcdcd;
  background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  box-shadow: inset 0 0 3px #888;
}

.macbody .keyboard {
  width: 130px;
  height: 45px;
  position: absolute;
  left: 7px;
  top: 41px;
  border-radius: 4px;
  transform-style: preserve-3d;
  background: #cdcdcd;
  background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  box-shadow: inset 0 0 3px #777;
  padding: 0 0 0 2px;
}

.keyboard .key {
  width: 6px;
  height: 6px;
  background: #444;
  float: left;
  margin: 1px;
  transform: translateZ(-2px);
  border-radius: 2px;
  box-shadow: 0 -2px 0 #222;
  animation: keys infinite 7s ease;
}

.key.space {
  width: 45px;
}

.key.f {
  height: 3px;
}

.macbody .pad {
  width: 5px;
  height: 5px;
  background: #333;
  border-radius: 100%;
  position: absolute;
}

.pad.one {
  left: 20px;
  top: 20px;
}

.pad.two {
  right: 20px;
  top: 20px;
}

.pad.three {
  right: 20px;
  bottom: 20px;
}

.pad.four {
  left: 20px;
  bottom: 20px;
}

@keyframes rotate {
  0% {
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  5% {
    transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg);
  }

  20% {
    transform: rotateX(30deg) rotateY(200deg) rotateZ(0deg);
  }

  25% {
    transform: rotateX(-60deg) rotateY(150deg) rotateZ(0deg);
  }

  60% {
    transform: rotateX(-20deg) rotateY(130deg) rotateZ(0deg);
  }

  65% {
    transform: rotateX(-20deg) rotateY(120deg) rotateZ(0deg);
  }

  80% {
    transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg);
  }

  85% {
    transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg);
  }

  87% {
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
  }
}

@keyframes lid-screen {
  0% {
    transform: rotateX(0deg);
    background-position: left bottom;
  }

  5% {
    transform: rotateX(50deg);
    background-position: left bottom;
  }

  20% {
    transform: rotateX(-90deg);
    background-position: -150px top;
  }

  25% {
    transform: rotateX(15deg);
    background-position: left bottom;
  }

  30% {
    transform: rotateX(-5deg);
    background-position: right top;
  }

  38% {
    transform: rotateX(5deg);
    background-position: right top;
  }

  48% {
    transform: rotateX(0deg);
    background-position: right top;
  }

  90% {
    transform: rotateX(0deg);
    background-position: right top;
  }

  100% {
    transform: rotateX(0deg);
    background-position: right center;
  }
}

@keyframes lid-macbody {
  0% {
    transform: rotateX(-90deg);
  }

  50% {
    transform: rotateX(-90deg);
  }

  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes lid-keyboard-area {
  0% {
    background-color: #dfdfdf;
  }

  50% {
    background-color: #bbb;
  }

  100% {
    background-color: #dfdfdf;
  }
}

@keyframes screen-shade {
  0% {
    background-position: -20px 0px;
  }

  5% {
    background-position: -40px 0px;
  }

  20% {
    background-position: 200px 0;
  }

  50% {
    background-position: -200px 0;
  }

  80% {
    background-position: 0px 0px;
  }

  85% {
    background-position: -30px 0;
  }

  90% {
    background-position: -20px 0;
  }

  100% {
    background-position: -20px 0px;
  }
}

@keyframes keys {
  0% {
    box-shadow: 0 -2px 0 #222;
  }

  5% {
    box-shadow: 1 -1px 0 #222;
  }

  20% {
    box-shadow: -1px 1px 0 #222;
  }

  25% {
    box-shadow: -1px 1px 0 #222;
  }

  60% {
    box-shadow: -1px 1px 0 #222;
  }

  80% {
    box-shadow: 0 -2px 0 #222;
  }

  85% {
    box-shadow: 0 -2px 0 #222;
  }

  87% {
    box-shadow: 0 -2px 0 #222;
  }

  100% {
    box-shadow: 0 -2px 0 #222;
  }
}

@keyframes shadow {
  0% {
    transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
    box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
  }

  5% {
    transform: rotateX(80deg) rotateY(10deg) rotateZ(0deg);
    box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
  }

  20% {
    transform: rotateX(30deg) rotateY(-20deg) rotateZ(-20deg);
    box-shadow: 0 0 50px 30px rgba(0,0,0,0.3);
  }

  25% {
    transform: rotateX(80deg) rotateY(-20deg) rotateZ(50deg);
    box-shadow: 0 0 35px 15px rgba(0,0,0,0.1);
  }

  60% {
    transform: rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px);
    box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
  }

  100% {
    box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
  }
}

</style>