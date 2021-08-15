const cheerio = require('cheerio');
const request = require('request');
const chalk = require('chalk');
console.log("Before");

request('https://www.worldometers.info/coronavirus',cb);
console.log("After");

function cb(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handlehtml(html); 
        // Print the HTML for the Google homepage.   
    }
}

function handlehtml(html){
    let selTool = cheerio.load(html); //selector tool
    // let h1s = selTool("h1");
    let contentArr = selTool("#maincounter-wrap span");
    // [i] -> wrap selTool
    // for(let i = 0; i < contentArr.length; i++){
    //     let data = selTool(contentArr[i]).text();
    //     console.log("data",data);
    // }

    let total = selTool(contentArr[0]).text()
    let death = selTool(contentArr[1]).text()
    let recovered = selTool(contentArr[2]).text()    
    // console.log(h1s.length);
    console.log(chalk.gray("Total Cases",total));
    console.log(chalk.red("Death Cases",death));
    console.log(chalk.green("Recovered Cases",recovered));
}