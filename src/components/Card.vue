<template>
  <div class="d-flex align-center justify-center py-5 px-5">
    <div class="card py-5 px-5">
      <div class="face front absolute">
        <v-img
          v-if="cardData.flag"
          contain
          height="40"
          class="flag"
          :src="require('../assets/' + cardData.card.flag)"
        ></v-img>

        <v-img
          :src="require('../assets/keener.svg')"
          contain
          height="50"
          class="image"
        ></v-img>
        <span class="ml-3 name">
          {{ cardData.fullName || "JOHN DOE" }}
        </span>

        <v-img
          contain
          height="70"
          class="chip"
          :src="require('../assets/chip.svg')"
        ></v-img>
        <v-img
          contain
          height="50"
          class="signal"
          :src="require('../assets/signal.svg')"
        ></v-img>
      </div>
      <div class="back face absolute">
        <span>{{ cardData.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {},
    };
  },
  props: {
    cardData: Object,
  },
  computed: {
    flagHeight() {
      const flagHeight = {
        mastercard: '60',
        amex: '90',
        visa: '40',
        discover: '40',
        hipercard: '50',
        elo: '40',
      }
      return flagHeight[this.cardData.card.name]
    }
  }
};
</script>

<style scoped>
.absolute {
  position: absolute;
}

.card {
  position: relative;
  width: 500px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 500px;
}

.card .face {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    rgb(255 255 255 / 10%) 0%,
    transparent 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 0px 0px rgb(255 255 255 / 20%);
  transform-style: preserve-3d;
  transition: 0.75s ease-in-out;
  backface-visibility: hidden;
  transform: rotateY(0);
}

/* CARD FRONT */

.flag {
  position: absolute;
  top: 10px;
  left: 200px;
}

.image {
  position: absolute;
  top: 210px;
  left: -3%;
}

.name {
  position: absolute;
  top: 225px;
  left: 30%;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.3px;
}

.chip {
  position: absolute;
  top: 76px;
  right: 55%;
}

.signal {
  transform: rotate(90deg);
  position: absolute;
  top: 85px;
  right: 39%;
}

.card .face.back {
	transform: rotateY(180deg);
}

.card:hover .face.front {
	transform: rotateY(180deg);
}

.card:hover .face.back {
	transform: rotateY(360deg);
}
</style>
