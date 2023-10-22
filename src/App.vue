<template>
  <section class="section">
    <img src="./assets/Feelgoodlogo.png" alt="Logo Feel Good Phrases">
    <div class="intro">
      <span class="fgp">Feel Good Phrases</span> est un petit site qui permet de te remotiver si tu as un coup de mou, ou bien de t'aider à rédiger un message de bonne journée à tes collègues si t'es en panne d'inspi.<br>Clique sur l'icône             <font-awesome-icon icon="fa-regular fa-copy" size="lg" color="#00000" /> pour copier la phrase !

    </div>
    <div class="btn-section">
      <div class="btns">
        <button @click="generatePhrase" class="mou">
          J'ai un petit coup de mou
        </button>
        <button @click="generateMorning" class="matin">
          C'est le matin
        </button>
      </div>
      <div class="p-section">
        <div class="sentence-box">
          <p class="nice-phrase">
            {{ sentence }}
          </p>
          <a href="#" @click="copy" class="icon">
            <font-awesome-icon icon="fa-regular fa-copy"  :class="sentence ? '': 'noshow'" size="lg" color="#009286" />
          </a>
        </div>
        <div class="sentence-box">
          <p class="morning">
            {{ morningSentence }}
          </p>
          <a href="#" @click="copy2" class="icon">
            <font-awesome-icon icon="fa-regular fa-copy" :class="morningSentence ? '': 'noshow'" size="lg" color="#7414b4" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Footer from './components/Footer.vue';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

const copy = async () => {
  try {
    await toClipboard(sentence.value);
    console.log('Copied to clipboard');
  } catch (e) {
    console.error(e);
  }
  return { copy, sentence };
}

const copy2 = async () => {
  try {
    await toClipboard(morningSentence.value);
    console.log('Copied to clipboard');
  } catch (e) {
    console.error(e);
  }
  return { copy2, morningSentence };
}

const sentence = ref('');
const morningSentence = ref('');

const morningData = [
  'Bien le bonjour et merveilleuse journée à toutes et tous !',
  'Que votre journée vous soit douce et agréable !',
  'Aloha !',
  'Ohayo gozaimasu o genki desuka',
  'Joyeuse journée pleine de bonheur !',
  'Grand bonjour à chacun et chacune de vous !',
  'Hello and have a wonderfully good morning!',
  'Du soleil dans vos coeurs pour passer une joyeuse journée 💖',
  'Bonjour et Namaste pour une journée zen !',
  'Wesh, que la poésie habite ta journée toute entière !',
  'Coucou les ami.e.s !',
  'Yo et belle journée !',
  'Que ta journée soit incroyable et exceptionnelle comme toi !',
];

const data = [
  '💙💜 Tu es belle, et tu mérites de t\'aimer 💙💜',
  '💚 Tu vas y arriver, je crois en toi ! 💚',
  '🤩 La vie est belle parce que tu en fais partie ! 🤩',
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
  morningSentence.value = '';
};

function generateMorning() {
  morningSentence.value = randomize(morningData);
  sentence.value = '';
}
</script>

<style scoped>
@media (min-width: 960px) {
  .section {
    display: flex;
    flex-direction: column;
  }
  .btn-section {
    display: flex;
    flex-direction: column;
  }
  .p-section {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    margin: auto;
  }
  p {
    text-align: center;
  }
  .btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    margin: auto;
  }
  .intro {
    width: 50%;
    padding: 5px;
  }
}
.sentence-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
.noshow {
  display: none;
}
.fgp {
  font-weight: bold;
}
.intro {
  border: solid 1px #FFDE59;
  border-radius: 5px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px auto;
  line-height: 1.5em;  
}
button {
  height: 50px;
  border: none;
  cursor: pointer;
  padding: 15px;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px 15px 5px;
}
.mou {
  background-color: #5CE1E6;
  box-shadow: 2px 2px 0 #318588;
  color: white;
}
.matin {
  background-color: #7414b4;
  box-shadow: 2px 2px 0 #5a0d8d;
  color: white;
}
img {
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;
}
.nice-phrase, .morning {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  margin: 25px 8px;
}

.nice-phrase {
  color: #009286;
}

.morning {
  color: #5a0d8d;
}

@media (max-width: 960px) {
  .intro {
    width: 85%;
    padding: 10px;
  }
  button {
    width: 95%;
  }
  .btn-section {
  margin-bottom: 15px;
}
.section {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 400px;
}
}

</style>
