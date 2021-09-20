class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z-'\d\s]/g, "");
  }

  static titleize(str) {
    const sentenceArr = str.split(" ");
    const afterFirstWord = sentenceArr.slice(1, sentenceArr.length);
    const firstWord = this.capitalize(sentenceArr[0]);
    const doNotCapitalize = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const self = this;
    // const newSentence = afterFirstWord.map(function (word) {
    //   return !doNotCapitalize.includes(word) ? self.capitalize(word) : word;
    // });
    const newSentence = afterFirstWord.map((word) =>
      !doNotCapitalize.includes(word) ? self.capitalize(word) : word
    );
    return firstWord + " " + newSentence.join(" ");
  }
}
