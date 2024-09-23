#! /usr/bin/env node

import { readFile } from "node:fs/promises";

const filePath = process.argv[2];
const inputWordForCount = process.argv[3];
const fileContent = await readFile(filePath, "utf-8");

const wordsArray = fileContent.split(/[\W]/).filter((w) => w);

const wordCount = {};

wordsArray.forEach((word) => {
  if (word in wordCount) {
    wordCount[word] += 1;
  } else {
    wordCount[word] = 1;
  }
});

if (inputWordForCount) {
  if (inputWordForCount in wordCount) {
    console.log(
      `${inputWordForCount} appears ${wordCount[inputWordForCount]} times in the ${filePath} file.`
    );
  } else {
    console.log(`${inputWordForCount} is not present in the ${filePath} file.`);
  }
} else {
  console.log(wordCount);
}
