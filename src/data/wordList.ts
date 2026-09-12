export interface WordItem {
  id: string;
  word: string;
  sentence: string;
}

export const INITIAL_WORD_LIST: WordItem[] = [
  { id: "brave", word: "brave", sentence: "The knight was very brave." },
  { id: "bright", word: "bright", sentence: "The sun is shining bright today." },
  { id: "clean", word: "clean", sentence: "Please wash your hands so they are clean." },
  { id: "drive", word: "drive", sentence: "We will drive to the park together." },
  { id: "front", word: "front", sentence: "She sat in the front row at school." },
  { id: "grass", word: "grass", sentence: "The green grass was fresh and soft." },
  { id: "night", word: "night", sentence: "Stars twinkle in the dark night sky." },
  { id: "plant", word: "plant", sentence: "We will plant a flower in the garden." },
  { id: "shape", word: "shape", sentence: "A star is my favorite shape." },
  { id: "sleep", word: "sleep", sentence: "The puppy went to sleep in its bed." },
  { id: "thing", word: "thing", sentence: "What is your favorite thing to do?" },
  { id: "wish", word: "wish", sentence: "Make a birthday wish and blow out the candles!" }
];
