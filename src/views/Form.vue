<template>
  <div class="container">
    <v-card width="800" color="red">
      <div>
        <h1 class="text-center">Cardeener</h1>
      </div>
      <Card class="px-5 my-5" :cardData="cardData" />
      <v-form class="px-5">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="cardData.fullName"
              label="Full Name"
              placeholder="Full Name"
              class="primary-input"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="cardData.number"
              label="Card Number"
              placeholder="Card Number"
              v-mask="'#### #### #### ####'"
              class="primary-input"
              outlined
              @change="verifyCard(cardData.number)"
              @keypress.enter="verifyCard(cardData.number)"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="cardData.valid"
              label="Valid Thru"
              placeholder="Valid Thru"
              class="primary-input"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="cardData.cvv"
              label="Security Code"
              placeholder="Security Code"
              class="primary-input"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Home",

  components: {
    Card,
  },
  data() {
    return {
      cardData: {
        fullName: "",
        number: "",
        valid: "",
        cvv: "",
        card: {
          name: "",
          flag: "",
          regex: "",
        },
      },
    };
  },
  methods: {
    verifyCard(number) {
      this.$cards.map(card => {
        if (number.split(' ').join('').match(card.regex)) {
          console.log(card)
          this.cardData.card = card;
          return `{card} is valid`;
        }
        else {
          return 'Invalid Card Number';
        }
      })
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
