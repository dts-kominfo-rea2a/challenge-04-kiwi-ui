const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate

const createDate = (data, index) => {
    
    let dataArray = [];

    if (index === undefined) {
        for (let i = 0; i < data.length; i++) {
            dataArray.push(data[i]);
        }
    }

    else {
        dataArray.push(data[index]);
    }

    return dataArray;
};

console.log(createDate(dates,1));