const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/graberblinds/GB005");const testInfo={id:'GB005',site:'graberblinds',title:'2.7 Zebra Shades and Woven Shades in subnav',client:'brainlab',target:'https://www.graberblinds.com',variation:'2'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};