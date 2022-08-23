function oscars(input) {
  let nameActor = String(input[0]);
  let scoreAcademy = Number(input[1]);
  let countJudge = Number(input[2]);

  let totalScore = 0;

  for (let i = 3; i < countJudge * 2 + 3; i += 2) {
    let nameJudge = String(input[i]);
    let scoreJudge = Number(input[i + 1]);

    totalScore += (scoreJudge * nameJudge.length) / 2;

    if (totalScore + scoreAcademy > 1250.5) {
      console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${(totalScore + scoreAcademy).toFixed(1)}!`);
      break;
    }
  }

  if (totalScore + scoreAcademy <= 1250.5) {
    console.log(`Sorry, ${nameActor} you need ${(1250.5 - (scoreAcademy + totalScore)).toFixed(1)} more!`);
  }
}

