(() => {

  enum AudioLevel {
    min
    , medium
    , max
  }

  let currentAudio = AudioLevel.max;
  
  let customAudio: AudioLevel = 1;

  console.log({ AudioLevel });
  console.log({ currentAudio });
  console.log({ customAudio });

})()