const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');

const filePath = './large-data/itcont_2018_20020411_20170529.txt';

const allData = [];
fs.createReadStream(filePath, { encoding: 'utf-8' })
  .on('data', (chunk) => {
    const rows = chunk.split('\n');
    for (let i = 0; i < rows.length; i++) {
      const date = rows[i].split('|')[4];
      const month = moment(date, 'YYYYMMDD').format('MMMM');
      const monthInNumber = moment(date, 'YYYYMMDD').format('MM');
      const donations = +rows[i].split('|')[14] || 0;
      if (month !== 'Invalid date') {
        allData.push({ monthInNumber, month, donations });
      }
    }
  })
  .on('end', () => {
    const key = 'monthInNumber';
    const arrayUniqueByKey = _(allData)
      .groupBy(key)
      .map((item, month) => ({
        month,
        allDonations: _.sumBy(item, 'donations'),
      }))
      .value();
    const sortedUnique = arrayUniqueByKey.sort((a, b) => +a.month - +b.month);
    console.log(sortedUnique);
  });
