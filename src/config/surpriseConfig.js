// ============================================================
//  EDIT ONLY THIS FILE to customize the whole surprise.
//  Put your own photos in /public/photos and audio in /public/audio,
//  then reference them like "/photos/me.jpg".
// ============================================================

import photo1 from '../Klphotos/1.jpg';
import photo2 from '../Klphotos/2.jpg';
import photo3 from '../Klphotos/3.jpg';
import photo4 from '../Klphotos/4.jpg';
import photo5 from '../Klphotos/5.jpg';
import photo6 from '../Klphotos/3.jpg';
import moon from '../Klphotos/moon.png';
const surpriseConfig = {
  name: "Kalpana",

  // Login credentials the birthday person must type
  login: { username: "Kalpana", password: "16111998" },
  loginBackground: moon,
  loginPageBackground: photo2,

  // Typed on top of the cake
  cakeMessage: "Happy Birthday, Kalpana 😍! You make every day brighter.",

  // Page 3 – five hidden emojis
  emojis: ["🎁", "🎉", "💖", "🎂", "🥳"],

  // Page 4 – six photos with captions (zig-zag)
  gallery: [
  { src: photo1, caption: "Forget the tears, forget the hard days. Today the whole world is here just to make you smile. 😊!." },
  { src: photo2, caption: "Hold onto only the moments of pure beauty and joy.❤️." },
  { src: photo3, caption: "Happy Birthday! May your day be filled with joy and laughter. 🎈" },
  { src: photo4, caption: "Leave the negativity and stay positive always. 🌟" },
  { src: photo5, caption: "You deserve all the joy in the world, so smile big today and let your heart be light. Happy Birthday! 🎉" },
],

  // Page 5 – final photo + sentence
  final: {
    photo: photo2 ,
    sentence: "How do you feel about this surprise? Did you like it? Tell me!",
    placeholder: "Type your message here...",
  },

  // WhatsApp number with country code, digits only (e.g. 919876543210)
  whatsappNumber: "7397434270",

  // Audio (put files in /public/audio)
  audio: {
    fire: "/audio/fire-crackle.mp3",
    birthday: "/audio/happy-birthday.mp3",
    pop: "/audio/party-pop.mp3",
  },
};

export default surpriseConfig;
