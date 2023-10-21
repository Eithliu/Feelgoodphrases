<template>
  <section class="section">
    <img src="./assets/Feelgoodlogo.png" alt="Logo Feel Good Phrases">
    <button @click="generatePhrase">
      Aime-moi !
    </button>
    <hr>
    <p class="nice-phrase">{{ sentence }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const sentence = ref('');

const data = [
  '💙💜 Tu es belle, et tu mérites de t\'aimer 💙💜',
  '💚 Tu vas y arriver, je crois en toi ! 💚',
  '🤩 La vie est belle parce que tu en fait partie ! 🤩',
  '💅 Tu as le droit de prendre du repos pour t\'occuper de toi. 💅',
  '💝 Soit bienveillante envers toi ! 💝',
  '💕 Tu as droit à l\'erreur. 💕',
  '💖 Salut beauté ! 💖',
  '🌞 Que ta journée te soit belle et agréable 🌞',
  '🧡💛 Vive toi ! 🧡💛',
  '💪 Tu progresses chaque jour ! 💪',
  '🌟 Tu as le droit d\'être heureuse 🌟',
  '🍾 La vie est belle ! 🍾',
  '😻 Tu es unique et donc parfaite ! 😻',
  '💌 Tu es merveilleuse et tu mérites de t\'aimer ! 💌',
  '😍 Tu n\'es pas nulle ! Tu es balèze ! 😍',
  '💫 Tu peux faire ce que tu veux, parce que tu en es capable ! 💫',
];

function randomize(phrase) {
  return phrase[(Math.floor(Math.random() * phrase.length))];
}

function generatePhrase() {
  sentence.value = randomize(data);
};

</script>

<style scoped>
img {
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;
}
.section {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 400px;
}

button {
  width: 100%;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: #5CE1E6;
  box-shadow: 2px 2px 0 #318588;
  color: white;
  font-size: 20px;
  text-align: center;
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
  color: rgb(0, 146, 134);
  margin: 25px 8px;
}
</style>
