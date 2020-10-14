<template>
  <div class="home">
    <img src="../assets/logo/final-solo.png" class="logo non-selectable" />
    <h1 class="guild">Dreams</h1>
    <h1>Dołącz do gildii i razem z nami wejdź w Shadowlands</h1>
    <h2>
      Gildia dla osób zarówno do progresowania contentu jak i casualowego grania
    </h2>
    <a :target="`_blank`" :href="raiderio"
      ><img
        src="@/assets/home-icons/raiderio.png"
        class="wow-icon non-selectable"
    /></a>
    <a :target="`_blank`" :href="wowprogress"
      ><img
        src="@/assets/home-icons/wowprogress.png"
        class="wow-icon non-selectable"
    /></a>
    <a :target="`_blank`" :href="warcraftlogs"
      ><img
        src="@/assets/home-icons/warcraftlogs.png"
        class="wow-icon non-selectable"
    /></a>

    <div v-for="n in 150" :key="n" class="circle-container">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      raiderio: "https://raider.io/guilds/eu/burning-legion/Dreams",
      wowprogress: "https://www.wowprogress.com/guild/eu/burning-legion/Dreams",
      warcraftlogs: "https://www.warcraftlogs.com/guild/id/564669",
    };
  },
};
</script>

<style scoped lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

h1,
h2 {
  font-weight: 300;
  color: white;
  margin-top: 5px;
  text-shadow: black 1px 0 10px;
}

h1 {
  font-size: 2vw;
}

h2 {
  font-size: 1vw;
}

.guild {
  font-size: 5vw;
}

.home {
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  margin: 0px auto 0px;
  color: white;
  padding-bottom: 20px;
  font-weight: 300;
  padding: 7.5vh 20px 20px 20px;
  overflow: hidden;
  position: relative;
}

.wow-icon {
  margin: 2.5vh 5px 0px 5px;
  width: 40px;
  height: 40px;
  margin-right: 2px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: 0.5s;
  bottom: 5%;
}

.wow-icon:hover {
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.logo {
  height: 400px;
  width: 400px;
  margin: 0 auto;
}

.non-selectable {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media (max-width: 767px) {
  .guild {
    font-size: 15vw;
    margin-bottom: 5vh;
  }

  h1 {
    margin: 0;
    font-size: 7vw;
    margin-bottom: 5vh;
  }

  h2 {
    font-size: 5vw;
  }

  .home {
    margin: auto;
  }

  .logo {
    height: 200px;
    width: 200px;
  }
}

@media (min-height: 1000px) {
  .home {
    padding-top: 10vh;
  }

  .wow-icon {
    margin-top: 5vh;
  }
}

// This whole particle animation was taken from https://codepen.io/hf666/pen/WVrpWe as free to use code. All credits for making it goes to https://codepen.io/hf666
.circle-container {
  $particleNum: 150;
  $particleColor: hsl(180, 100%, 80%);
  position: absolute;
  transform: translateY(10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background-image: radial-gradient(
      hsl(219, 100%, 61%),
      hsl(219, 100%, 68%) 10%,
      hsla(180, 100%, 80%, 0) 56%
    );

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.4, 0.4, 1);
      }

      50% {
        transform: scale3d(2.2, 2.2, 1);
      }

      100% {
        transform: scale3d(0.4, 0.4, 1);
      }
    }
  }

  $particleBaseSize: 8;

  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      $circleSize: random($particleBaseSize);
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: random(10) + 100;
      $framesName: "move-frames-" + $i;
      $moveDuration: 28000 + random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(37000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate3d(
            #{random(100) + vw},
            #{$startPositionY + vh},
            0
          );
        }

        to {
          transform: translate3d(
            #{random(100) + vw},
            #{- $startPositionY - random(30) + vh},
            0
          );
        }
      }

      .circle {
        animation-delay: random(4000) + ms;
      }
    }
  }
}
</style>
