<template>
  <section class="section">
    <h1>Feel<br>Good<br>Phrases</h1>
    <button @click="generatePhrase">
      Aime-moi !
    </button>
    <hr>
    <p class="nice-phrase">{{ sentence }}</p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
const sentence = ref('');

const data = [
  '˚. ✦.˳·˖✶ ⋆Tu es belle, et tu mérites de t\'aimer⋆ ✶˖·˳.✦ .˚',
  '☆ﾟ.*･｡ﾟTu vas y arriver, je crois en toi !｡ﾟ･*.☆ﾟ',
  '<3 La vie est belle parce que tu en es <3',
  'Tu as le droit de prendre du repos pour t\'occuper de toi.',
  'Soit bienveillante envers toi !',
  'Tu as droit à l\'erreur.',
  'Salut beauté !',
  'Que ta journée te soit belle et agréable !',
  'Vive toi !',
  'Tu progresses chaque jour !',
  'Tu as le droit d\'être heureuse',
  'La vie est belle !',
  'Tu es unique et donc parfaite !',
  '',
];

function randomize(phrase) {
  return phrase[(Math.floor(Math.random() * phrase.length))];
}

function generatePhrase() {
  sentence.value = randomize(data);
};

</script>

<style scoped>
.section {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 900px;
  justify-content: center;
  margin: auto;

}

button {
  width: 100%;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: purple;
  color: white;
  font-size: 20px;
}
hr {
  margin: 15px 0;
  color: plum;
}
h1 {
  text-align: center;
  font-weight: bold;
}

.nice-phrase {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  color: blueviolet;
}
</style>
