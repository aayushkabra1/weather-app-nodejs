const request = require("request");
const yargs = require("yargs");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .argv;

const addr = encodeURIComponent(argv.address);
const URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addr;

request({
    url: URL,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});