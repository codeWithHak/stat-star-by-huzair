#!/usr/bin/env node

import inquirer from "inquirer";

let user = await inquirer.prompt({
  message: "What's your name",
  type: "input",
  name: "username",
});

if (!user.username) {
  console.log("Please Provide a username");
} else {
  console.log(
    `Hello ${user.username}, Welcome to Stat Star! It's an app that keeps track of your batting performance. Whether you want to find your strike rate or calculate your average, Stat Star can track it all. Just tell us some details from your previous matches, and we'll calculate your strike rate and average for you.`
  );
  let option = await inquirer.prompt({
    message: "Select an option",
    type: "list",
    name: "options",
    choices: [
      "Find Your Complete Stats",
      "Find Your Average",
      "Find Your Strike Rate",
    ],
  });

  if (option.options === "Find Your Average") {
    let findAverage = await inquirer.prompt({
      message: "Select an option",
      type: "list",
      name: "average",
      choices: [
        "Find Average Of Last Series",
        "Find Collective Average Of All Matches",
      ],
    });

    if (findAverage.average === "Find Average Of Last Series") {
      let runsScored1 = await inquirer.prompt({
        message: "How many runs you scored in 1st match of the series?",
        type: "number",
        name: "firstMatchRuns",
      });

      let runsScored2 = await inquirer.prompt({
        message: "How many runs you scored in 2nd match of the series?",
        type: "number",
        name: "secondMatchRuns",
      });

      let runsScored3 = await inquirer.prompt({
        message: "How many runs you scored in 3rd match of the series?",
        type: "number",
        name: "thirdMatchRuns",
      });

      let numberOfOuts = await inquirer.prompt({
        message: "How many time you got out in the whole series?",
        type: "number",
        name: "outs",
      });

      let totalRunsScored =
        runsScored1.firstMatchRuns +
        runsScored2.secondMatchRuns +
        runsScored3.thirdMatchRuns;

      let totalNumberOfOuts = numberOfOuts.outs;

      let average = totalRunsScored / totalNumberOfOuts;

      console.log(
        `In last series you scored ${totalRunsScored} runs and got out ${totalNumberOfOuts} times so your average is ${average.toFixed(
          2
        )} `
      );
    } else if (
      findAverage.average === "Find Collective Average Of All Matches"
    ) {
      let numberOfMatches = await inquirer.prompt({
        message: "How many matches have you played?",
        type: "number",
        name: "matches",
      });

      let runsScored = await inquirer.prompt({
        message: "How many runs you scored in these matches?",
        type: "number",
        name: "runs",
      });

      let numberOfOuts = await inquirer.prompt({
        message: "How many time you got out in these matches?",
        type: "number",
        name: "outs",
      });

      let totalMatches = numberOfMatches.matches;
      let totalRuns = runsScored.runs;
      let totalOuts = numberOfOuts.outs;
      let average = totalRuns / totalOuts;

      console.log(
        `You played ${totalMatches} matches and scored ${totalRuns} runs so your average is ${average.toFixed(
          2
        )}`
      );
    }
  } else if (option.options === "Find Your Strike Rate") {
    let findStrikeRate = await inquirer.prompt({
      message: "Select an option",
      type: "list",
      name: "strikeRate",
      choices: [
        "Find Strike Rate Of Last Series",
        "Find Collective Strike Rate Of All Matches",
      ],
    });

    if (findStrikeRate.strikeRate === "Find Strike Rate Of Last Series") {
      let ballsFaced1 = await inquirer.prompt({
        message: "How many balls you faced in 1st match of the series?",
        type: "number",
        name: "firstMatchBalls",
      });

      let runsScored1 = await inquirer.prompt({
        message: "How many runs you scored in 1st match of the series?",
        type: "number",
        name: "firstMatchRuns",
      });

      let ballsFaced2 = await inquirer.prompt({
        message: "How many balls you faced in 2nd match of the series?",
        type: "number",
        name: "secondMatchBalls",
      });

      let runsScored2 = await inquirer.prompt({
        message: "How many runs you scored in 2nd match of the series?",
        type: "number",
        name: "secondMatchRuns",
      });

      let ballsFaced3 = await inquirer.prompt({
        message: "How many balls you faced in 3rd match of the series?",
        type: "number",
        name: "thirdMatchBalls",
      });

      let runsScored3 = await inquirer.prompt({
        message: "How many runs you scored in 3rd match of the series?",
        type: "number",
        name: "thirdMatchRuns",
      });

      let totalRunsScored =
        runsScored1.firstMatchRuns +
        runsScored2.secondMatchRuns +
        runsScored3.thirdMatchRuns;

      let totalBallsFaced =
        ballsFaced1.firstMatchBalls +
        ballsFaced2.secondMatchBalls +
        ballsFaced3.thirdMatchBalls;

      let strikeRate = (totalRunsScored / totalBallsFaced) * 100;

      console.log(
        `In last series you scored ${totalRunsScored} runs and you faced ${totalBallsFaced} balls so your strike rate is ${strikeRate}`
      );
    } else if (
      findStrikeRate.strikeRate === "Find Collective Strike Rate Of All Matches"
    ) {
      let numberOfMatches = await inquirer.prompt({
        message: "How many matches have you played?",
        type: "number",
        name: "matches",
      });

      let runsScored = await inquirer.prompt({
        message: "How many runs you scored in these matches?",
        type: "number",
        name: "runs",
      });

      let ballsFaced = await inquirer.prompt({
        message: "How many balls you faced in these matches?",
        type: "number",
        name: "balls",
      });

      let totalMatches = numberOfMatches.matches;
      let totalRuns = runsScored.runs;
      let totalBalls = ballsFaced.balls;
      let strikeRate = (totalRuns / totalBalls) * 100;

      console.log(
        `You played ${totalMatches} matches and scored ${totalRuns} runs so your strike rate is ${strikeRate}`
      );
    }
  } else if (option.options === "Find Your Complete Stats") {
    let findStrikeRateAndAverage = await inquirer.prompt({
      message: "Select an option",
      type: "list",
      name: "strikeRateAndAverage",
      choices: [
        "Find Complete Stats Of Your Last Series",
        "Find Complete Stats Of All Macthes You've Played",
      ],
    });

    if (
      findStrikeRateAndAverage.strikeRateAndAverage ===
      "Find Complete Stats Of Your Last Series"
    ) {
      let ballsFaced1 = await inquirer.prompt({
        message: "How many balls you faced in 1st match of the series?",
        type: "number",
        name: "firstMatchBalls",
      });

      let runsScored1 = await inquirer.prompt({
        message: "How many runs you scored in 1st match of the series?",
        type: "number",
        name: "firstMatchRuns",
      });

      let ballsFaced2 = await inquirer.prompt({
        message: "How many balls you faced in 2nd match of the series?",
        type: "number",
        name: "secondMatchBalls",
      });

      let runsScored2 = await inquirer.prompt({
        message: "How many runs you scored in 2nd match of the series?",
        type: "number",
        name: "secondMatchRuns",
      });

      let ballsFaced3 = await inquirer.prompt({
        message: "How many balls you faced in 3rd match of the series?",
        type: "number",
        name: "thirdMatchBalls",
      });

      let runsScored3 = await inquirer.prompt({
        message: "How many runs you scored in 3rd match of the series?",
        type: "number",
        name: "thirdMatchRuns",
      });

      let numberOfOuts = await inquirer.prompt({
        message: "How many time you got out in these matches?",
        type: "number",
        name: "outs",
      });

      let totalRunsScored =
        runsScored1.firstMatchRuns +
        runsScored2.secondMatchRuns +
        runsScored3.thirdMatchRuns;

      let totalBallsFaced =
        ballsFaced1.firstMatchBalls +
        ballsFaced2.secondMatchBalls +
        ballsFaced3.thirdMatchBalls;

      let strikeRate = (totalRunsScored / totalBallsFaced) * 100;
      let totalOuts = numberOfOuts.outs;
      let average = totalRunsScored / totalOuts;

      console.log(
        `Your Complete Stats From Last Series:\nRuns Scored: ${totalRunsScored}\nBalls Faced: ${totalBallsFaced}\nGot Out: ${totalOuts} times\nAverage:${average.toFixed(
          2
        )}\nStrike Rate ${strikeRate}`
      );
    } else if (
      findStrikeRateAndAverage.strikeRateAndAverage ===
      "Find Complete Stats Of All Macthes You've Played"
    ) {
      let numberOfMatches = await inquirer.prompt({
        message: "How many matches have you played?",
        type: "number",
        name: "matches",
      });

      let runsScored = await inquirer.prompt({
        message: "How many runs you scored in these matches?",
        type: "number",
        name: "runs",
      });

      let ballsFaced = await inquirer.prompt({
        message: "How many balls you faced in these matches?",
        type: "number",
        name: "balls",
      });

      let numberOfOuts = await inquirer.prompt({
        message: "How many time you got out in these matches?",
        type: "number",
        name: "outs",
      });

      let totalMatches = numberOfMatches.matches;
      let totalRuns = runsScored.runs;
      let totalOuts = numberOfOuts.outs;
      let average = totalRuns / totalOuts;
      let totalBalls = ballsFaced.balls;
      let strikeRate = (totalRuns / totalBalls) * 100;

      console.log(
        `Your Overall Stats:\nMathces Played: ${totalMatches}\nRuns Scored: ${totalRuns}\nBalls Faced: ${totalBalls}\nGot Out: ${totalOuts} times\nAverage:${average.toFixed(
          2
        )}\nStrike Rate ${strikeRate}`
      );
    }
  } 
}
