function reverter(s) {
    let reversedS = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversedS += s[i];
  }
  console.log(reversedS)
  return reversedS;
}

reverter('Rafael')