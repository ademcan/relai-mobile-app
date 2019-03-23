const parse = require("csv-parse");
const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

const file = process.argv[2];
const from = process.argv[3] || 0;
const to = process.argv[4] || 0;
const points = process.argv[5] || 0;

if (!file || !points) {
  console.log(
    `usage: ${path.basename(
      __filename
    )} <from-timestamp> <to-timestamp> <datapoints>`
  );
  process.exit();
}

exec(`wc -l ${file} | cut -c 1-8`, function(error, results) {
  const count = parseInt(results);

  // var parser_count = parse({ delimiter: "," });
  // let count = 0;
  // parser_count.on("readable", function() {
  //   let record;

  //   while ((record = parser_count.read())) {
  //     count++;
  //     //console.log(record);
  //   }
  // });

  // parser_count.on("end", function() {
  //   console.log(count, "lines in input");

  var parser_generate = parse({ delimiter: "," });
  let gen_count = 0; // lines read from input
  let out_count = 0; // lines outputted
  let in_count = 0; // lines read from input

  let delta = (10 * count) / points;
  let output = [];
  console.log(
    "count=",
    count,
    "delta=",
    delta,
    "delta*poinst=",
    delta * points
  );

  fs.createReadStream(__dirname + "/" + file).pipe(parser_generate);
  parser_generate.on("readable", function() {
    let record;
    while ((record = parser_generate.read())) {
      gen_count++;
      in_count++;
      if (gen_count > delta) {
        console.log(in_count, out_count, record);
        output.push({
          t: Math.floor(parseFloat(record[0])),
          v: parseFloat(record[1])
        });
        out_count++;
        gen_count -= delta;
      }
    }
  });

  parser_generate.on("end", function() {
    console.log(out_count, "lines in output");
    console.log(JSON.stringify(output));
    console.log();
    output.map((item, i) => {
      console.log(`${i},${item.v}`);
    });
  });
  // });
});

// fs.createReadStream(__dirname + "/" + file).pipe(parser_count);
