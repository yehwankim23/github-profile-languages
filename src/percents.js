const percents = {
  "0.0%": 28,
  "0.1%": 28,
  "0.2%": 28,
  "0.3%": 28,
  "0.4%": 28,
  "0.5%": 28,
  "0.6%": 28,
  "0.7%": 28,
  "0.8%": 28,
  "0.9%": 28,
  "1.0%": 28,
  "1.1%": 28,
  "1.2%": 28,
  "1.3%": 28,
  "1.4%": 28,
  "1.5%": 28,
  "1.6%": 28,
  "1.7%": 28,
  "1.8%": 28,
  "1.9%": 28,
  "2.0%": 28,
  "2.1%": 28,
  "2.2%": 28,
  "2.3%": 28,
  "2.4%": 28,
  "2.5%": 28,
  "2.6%": 28,
  "2.7%": 28,
  "2.8%": 28,
  "2.9%": 28,
  "3.0%": 28,
  "3.1%": 28,
  "3.2%": 28,
  "3.3%": 28,
  "3.4%": 28,
  "3.5%": 28,
  "3.6%": 28,
  "3.7%": 28,
  "3.8%": 28,
  "3.9%": 28,
  "4.0%": 28,
  "4.1%": 28,
  "4.2%": 28,
  "4.3%": 28,
  "4.4%": 28,
  "4.5%": 28,
  "4.6%": 28,
  "4.7%": 28,
  "4.8%": 28,
  "4.9%": 28,
  "5.0%": 28,
  "5.1%": 28,
  "5.2%": 28,
  "5.3%": 28,
  "5.4%": 28,
  "5.5%": 28,
  "5.6%": 28,
  "5.7%": 28,
  "5.8%": 28,
  "5.9%": 28,
  "6.0%": 28,
  "6.1%": 28,
  "6.2%": 28,
  "6.3%": 28,
  "6.4%": 28,
  "6.5%": 28,
  "6.6%": 28,
  "6.7%": 28,
  "6.8%": 28,
  "6.9%": 28,
  "7.0%": 28,
  "7.1%": 28,
  "7.2%": 28,
  "7.3%": 28,
  "7.4%": 28,
  "7.5%": 28,
  "7.6%": 28,
  "7.7%": 28,
  "7.8%": 28,
  "7.9%": 28,
  "8.0%": 28,
  "8.1%": 28,
  "8.2%": 28,
  "8.3%": 28,
  "8.4%": 28,
  "8.5%": 28,
  "8.6%": 28,
  "8.7%": 28,
  "8.8%": 28,
  "8.9%": 28,
  "9.0%": 28,
  "9.1%": 28,
  "9.2%": 28,
  "9.3%": 28,
  "9.4%": 28,
  "9.5%": 28,
  "9.6%": 28,
  "9.7%": 28,
  "9.8%": 28,
  "9.9%": 28,
  "10.0%": 34,
  "10.1%": 34,
  "10.2%": 34,
  "10.3%": 34,
  "10.4%": 34,
  "10.5%": 34,
  "10.6%": 34,
  "10.7%": 34,
  "10.8%": 34,
  "10.9%": 34,
  "11.0%": 33,
  "11.1%": 33,
  "11.2%": 33,
  "11.3%": 33,
  "11.4%": 33,
  "11.5%": 33,
  "11.6%": 33,
  "11.7%": 33,
  "11.8%": 33,
  "11.9%": 33,
  "12.0%": 34,
  "12.1%": 34,
  "12.2%": 34,
  "12.3%": 34,
  "12.4%": 34,
  "12.5%": 34,
  "12.6%": 34,
  "12.7%": 34,
  "12.8%": 34,
  "12.9%": 34,
  "13.0%": 34,
  "13.1%": 34,
  "13.2%": 34,
  "13.3%": 34,
  "13.4%": 34,
  "13.5%": 34,
  "13.6%": 34,
  "13.7%": 34,
  "13.8%": 34,
  "13.9%": 34,
  "14.0%": 34,
  "14.1%": 34,
  "14.2%": 34,
  "14.3%": 34,
  "14.4%": 34,
  "14.5%": 34,
  "14.6%": 34,
  "14.7%": 34,
  "14.8%": 34,
  "14.9%": 34,
  "15.0%": 34,
  "15.1%": 34,
  "15.2%": 34,
  "15.3%": 34,
  "15.4%": 34,
  "15.5%": 34,
  "15.6%": 34,
  "15.7%": 34,
  "15.8%": 34,
  "15.9%": 34,
  "16.0%": 34,
  "16.1%": 34,
  "16.2%": 34,
  "16.3%": 34,
  "16.4%": 34,
  "16.5%": 34,
  "16.6%": 34,
  "16.7%": 34,
  "16.8%": 34,
  "16.9%": 34,
  "17.0%": 34,
  "17.1%": 34,
  "17.2%": 34,
  "17.3%": 34,
  "17.4%": 34,
  "17.5%": 34,
  "17.6%": 34,
  "17.7%": 34,
  "17.8%": 34,
  "17.9%": 34,
  "18.0%": 34,
  "18.1%": 34,
  "18.2%": 34,
  "18.3%": 34,
  "18.4%": 34,
  "18.5%": 34,
  "18.6%": 34,
  "18.7%": 34,
  "18.8%": 34,
  "18.9%": 34,
  "19.0%": 34,
  "19.1%": 34,
  "19.2%": 34,
  "19.3%": 34,
  "19.4%": 34,
  "19.5%": 34,
  "19.6%": 34,
  "19.7%": 34,
  "19.8%": 34,
  "19.9%": 34,
  "20.0%": 34,
  "20.1%": 34,
  "20.2%": 34,
  "20.3%": 34,
  "20.4%": 34,
  "20.5%": 34,
  "20.6%": 34,
  "20.7%": 34,
  "20.8%": 34,
  "20.9%": 34,
  "21.0%": 34,
  "21.1%": 34,
  "21.2%": 34,
  "21.3%": 34,
  "21.4%": 34,
  "21.5%": 34,
  "21.6%": 34,
  "21.7%": 34,
  "21.8%": 34,
  "21.9%": 34,
  "22.0%": 34,
  "22.1%": 34,
  "22.2%": 34,
  "22.3%": 34,
  "22.4%": 34,
  "22.5%": 34,
  "22.6%": 34,
  "22.7%": 34,
  "22.8%": 34,
  "22.9%": 34,
  "23.0%": 34,
  "23.1%": 34,
  "23.2%": 34,
  "23.3%": 34,
  "23.4%": 34,
  "23.5%": 34,
  "23.6%": 34,
  "23.7%": 34,
  "23.8%": 34,
  "23.9%": 34,
  "24.0%": 34,
  "24.1%": 34,
  "24.2%": 34,
  "24.3%": 34,
  "24.4%": 34,
  "24.5%": 34,
  "24.6%": 34,
  "24.7%": 34,
  "24.8%": 34,
  "24.9%": 34,
  "25.0%": 34,
  "25.1%": 34,
  "25.2%": 34,
  "25.3%": 34,
  "25.4%": 34,
  "25.5%": 34,
  "25.6%": 34,
  "25.7%": 34,
  "25.8%": 34,
  "25.9%": 34,
  "26.0%": 34,
  "26.1%": 34,
  "26.2%": 34,
  "26.3%": 34,
  "26.4%": 34,
  "26.5%": 34,
  "26.6%": 34,
  "26.7%": 34,
  "26.8%": 34,
  "26.9%": 34,
  "27.0%": 34,
  "27.1%": 34,
  "27.2%": 34,
  "27.3%": 34,
  "27.4%": 34,
  "27.5%": 34,
  "27.6%": 34,
  "27.7%": 34,
  "27.8%": 34,
  "27.9%": 34,
  "28.0%": 34,
  "28.1%": 34,
  "28.2%": 34,
  "28.3%": 34,
  "28.4%": 34,
  "28.5%": 34,
  "28.6%": 34,
  "28.7%": 34,
  "28.8%": 34,
  "28.9%": 34,
  "29.0%": 34,
  "29.1%": 34,
  "29.2%": 34,
  "29.3%": 34,
  "29.4%": 34,
  "29.5%": 34,
  "29.6%": 34,
  "29.7%": 34,
  "29.8%": 34,
  "29.9%": 34,
  "30.0%": 34,
  "30.1%": 34,
  "30.2%": 34,
  "30.3%": 34,
  "30.4%": 34,
  "30.5%": 34,
  "30.6%": 34,
  "30.7%": 34,
  "30.8%": 34,
  "30.9%": 34,
  "31.0%": 34,
  "31.1%": 34,
  "31.2%": 34,
  "31.3%": 34,
  "31.4%": 34,
  "31.5%": 34,
  "31.6%": 34,
  "31.7%": 34,
  "31.8%": 34,
  "31.9%": 34,
  "32.0%": 34,
  "32.1%": 34,
  "32.2%": 34,
  "32.3%": 34,
  "32.4%": 34,
  "32.5%": 34,
  "32.6%": 34,
  "32.7%": 34,
  "32.8%": 34,
  "32.9%": 34,
  "33.0%": 34,
  "33.1%": 34,
  "33.2%": 34,
  "33.3%": 34,
  "33.4%": 34,
  "33.5%": 34,
  "33.6%": 34,
  "33.7%": 34,
  "33.8%": 34,
  "33.9%": 34,
  "34.0%": 34,
  "34.1%": 34,
  "34.2%": 34,
  "34.3%": 34,
  "34.4%": 34,
  "34.5%": 34,
  "34.6%": 34,
  "34.7%": 34,
  "34.8%": 34,
  "34.9%": 34,
  "35.0%": 34,
  "35.1%": 34,
  "35.2%": 34,
  "35.3%": 34,
  "35.4%": 34,
  "35.5%": 34,
  "35.6%": 34,
  "35.7%": 34,
  "35.8%": 34,
  "35.9%": 34,
  "36.0%": 34,
  "36.1%": 34,
  "36.2%": 34,
  "36.3%": 34,
  "36.4%": 34,
  "36.5%": 34,
  "36.6%": 34,
  "36.7%": 34,
  "36.8%": 34,
  "36.9%": 34,
  "37.0%": 34,
  "37.1%": 34,
  "37.2%": 34,
  "37.3%": 34,
  "37.4%": 34,
  "37.5%": 34,
  "37.6%": 34,
  "37.7%": 34,
  "37.8%": 34,
  "37.9%": 34,
  "38.0%": 34,
  "38.1%": 34,
  "38.2%": 34,
  "38.3%": 34,
  "38.4%": 34,
  "38.5%": 34,
  "38.6%": 34,
  "38.7%": 34,
  "38.8%": 34,
  "38.9%": 34,
  "39.0%": 34,
  "39.1%": 34,
  "39.2%": 34,
  "39.3%": 34,
  "39.4%": 34,
  "39.5%": 34,
  "39.6%": 34,
  "39.7%": 34,
  "39.8%": 34,
  "39.9%": 34,
  "40.0%": 34,
  "40.1%": 34,
  "40.2%": 34,
  "40.3%": 34,
  "40.4%": 34,
  "40.5%": 34,
  "40.6%": 34,
  "40.7%": 34,
  "40.8%": 34,
  "40.9%": 34,
  "41.0%": 34,
  "41.1%": 34,
  "41.2%": 34,
  "41.3%": 34,
  "41.4%": 34,
  "41.5%": 34,
  "41.6%": 34,
  "41.7%": 34,
  "41.8%": 34,
  "41.9%": 34,
  "42.0%": 34,
  "42.1%": 34,
  "42.2%": 34,
  "42.3%": 34,
  "42.4%": 34,
  "42.5%": 34,
  "42.6%": 34,
  "42.7%": 34,
  "42.8%": 34,
  "42.9%": 34,
  "43.0%": 34,
  "43.1%": 34,
  "43.2%": 34,
  "43.3%": 34,
  "43.4%": 34,
  "43.5%": 34,
  "43.6%": 34,
  "43.7%": 34,
  "43.8%": 34,
  "43.9%": 34,
  "44.0%": 34,
  "44.1%": 34,
  "44.2%": 34,
  "44.3%": 34,
  "44.4%": 34,
  "44.5%": 34,
  "44.6%": 34,
  "44.7%": 34,
  "44.8%": 34,
  "44.9%": 34,
  "45.0%": 34,
  "45.1%": 34,
  "45.2%": 34,
  "45.3%": 34,
  "45.4%": 34,
  "45.5%": 34,
  "45.6%": 34,
  "45.7%": 34,
  "45.8%": 34,
  "45.9%": 34,
  "46.0%": 34,
  "46.1%": 34,
  "46.2%": 34,
  "46.3%": 34,
  "46.4%": 34,
  "46.5%": 34,
  "46.6%": 34,
  "46.7%": 34,
  "46.8%": 34,
  "46.9%": 34,
  "47.0%": 34,
  "47.1%": 34,
  "47.2%": 34,
  "47.3%": 34,
  "47.4%": 34,
  "47.5%": 34,
  "47.6%": 34,
  "47.7%": 34,
  "47.8%": 34,
  "47.9%": 34,
  "48.0%": 34,
  "48.1%": 34,
  "48.2%": 34,
  "48.3%": 34,
  "48.4%": 34,
  "48.5%": 34,
  "48.6%": 34,
  "48.7%": 34,
  "48.8%": 34,
  "48.9%": 34,
  "49.0%": 34,
  "49.1%": 34,
  "49.2%": 34,
  "49.3%": 34,
  "49.4%": 34,
  "49.5%": 34,
  "49.6%": 34,
  "49.7%": 34,
  "49.8%": 34,
  "49.9%": 34,
  "50.0%": 34,
  "50.1%": 34,
  "50.2%": 34,
  "50.3%": 34,
  "50.4%": 34,
  "50.5%": 34,
  "50.6%": 34,
  "50.7%": 34,
  "50.8%": 34,
  "50.9%": 34,
  "51.0%": 34,
  "51.1%": 34,
  "51.2%": 34,
  "51.3%": 34,
  "51.4%": 34,
  "51.5%": 34,
  "51.6%": 34,
  "51.7%": 34,
  "51.8%": 34,
  "51.9%": 34,
  "52.0%": 34,
  "52.1%": 34,
  "52.2%": 34,
  "52.3%": 34,
  "52.4%": 34,
  "52.5%": 34,
  "52.6%": 34,
  "52.7%": 34,
  "52.8%": 34,
  "52.9%": 34,
  "53.0%": 34,
  "53.1%": 34,
  "53.2%": 34,
  "53.3%": 34,
  "53.4%": 34,
  "53.5%": 34,
  "53.6%": 34,
  "53.7%": 34,
  "53.8%": 34,
  "53.9%": 34,
  "54.0%": 34,
  "54.1%": 34,
  "54.2%": 34,
  "54.3%": 34,
  "54.4%": 34,
  "54.5%": 34,
  "54.6%": 34,
  "54.7%": 34,
  "54.8%": 34,
  "54.9%": 34,
  "55.0%": 34,
  "55.1%": 34,
  "55.2%": 34,
  "55.3%": 34,
  "55.4%": 34,
  "55.5%": 34,
  "55.6%": 34,
  "55.7%": 34,
  "55.8%": 34,
  "55.9%": 34,
  "56.0%": 34,
  "56.1%": 34,
  "56.2%": 34,
  "56.3%": 34,
  "56.4%": 34,
  "56.5%": 34,
  "56.6%": 34,
  "56.7%": 34,
  "56.8%": 34,
  "56.9%": 34,
  "57.0%": 34,
  "57.1%": 34,
  "57.2%": 34,
  "57.3%": 34,
  "57.4%": 34,
  "57.5%": 34,
  "57.6%": 34,
  "57.7%": 34,
  "57.8%": 34,
  "57.9%": 34,
  "58.0%": 34,
  "58.1%": 34,
  "58.2%": 34,
  "58.3%": 34,
  "58.4%": 34,
  "58.5%": 34,
  "58.6%": 34,
  "58.7%": 34,
  "58.8%": 34,
  "58.9%": 34,
  "59.0%": 34,
  "59.1%": 34,
  "59.2%": 34,
  "59.3%": 34,
  "59.4%": 34,
  "59.5%": 34,
  "59.6%": 34,
  "59.7%": 34,
  "59.8%": 34,
  "59.9%": 34,
  "60.0%": 34,
  "60.1%": 34,
  "60.2%": 34,
  "60.3%": 34,
  "60.4%": 34,
  "60.5%": 34,
  "60.6%": 34,
  "60.7%": 34,
  "60.8%": 34,
  "60.9%": 34,
  "61.0%": 34,
  "61.1%": 34,
  "61.2%": 34,
  "61.3%": 34,
  "61.4%": 34,
  "61.5%": 34,
  "61.6%": 34,
  "61.7%": 34,
  "61.8%": 34,
  "61.9%": 34,
  "62.0%": 34,
  "62.1%": 34,
  "62.2%": 34,
  "62.3%": 34,
  "62.4%": 34,
  "62.5%": 34,
  "62.6%": 34,
  "62.7%": 34,
  "62.8%": 34,
  "62.9%": 34,
  "63.0%": 34,
  "63.1%": 34,
  "63.2%": 34,
  "63.3%": 34,
  "63.4%": 34,
  "63.5%": 34,
  "63.6%": 34,
  "63.7%": 34,
  "63.8%": 34,
  "63.9%": 34,
  "64.0%": 34,
  "64.1%": 34,
  "64.2%": 34,
  "64.3%": 34,
  "64.4%": 34,
  "64.5%": 34,
  "64.6%": 34,
  "64.7%": 34,
  "64.8%": 34,
  "64.9%": 34,
  "65.0%": 34,
  "65.1%": 34,
  "65.2%": 34,
  "65.3%": 34,
  "65.4%": 34,
  "65.5%": 34,
  "65.6%": 34,
  "65.7%": 34,
  "65.8%": 34,
  "65.9%": 34,
  "66.0%": 34,
  "66.1%": 34,
  "66.2%": 34,
  "66.3%": 34,
  "66.4%": 34,
  "66.5%": 34,
  "66.6%": 34,
  "66.7%": 34,
  "66.8%": 34,
  "66.9%": 34,
  "67.0%": 34,
  "67.1%": 34,
  "67.2%": 34,
  "67.3%": 34,
  "67.4%": 34,
  "67.5%": 34,
  "67.6%": 34,
  "67.7%": 34,
  "67.8%": 34,
  "67.9%": 34,
  "68.0%": 34,
  "68.1%": 34,
  "68.2%": 34,
  "68.3%": 34,
  "68.4%": 34,
  "68.5%": 34,
  "68.6%": 34,
  "68.7%": 34,
  "68.8%": 34,
  "68.9%": 34,
  "69.0%": 34,
  "69.1%": 34,
  "69.2%": 34,
  "69.3%": 34,
  "69.4%": 34,
  "69.5%": 34,
  "69.6%": 34,
  "69.7%": 34,
  "69.8%": 34,
  "69.9%": 34,
  "70.0%": 34,
  "70.1%": 34,
  "70.2%": 34,
  "70.3%": 34,
  "70.4%": 34,
  "70.5%": 34,
  "70.6%": 34,
  "70.7%": 34,
  "70.8%": 34,
  "70.9%": 34,
  "71.0%": 34,
  "71.1%": 34,
  "71.2%": 34,
  "71.3%": 34,
  "71.4%": 34,
  "71.5%": 34,
  "71.6%": 34,
  "71.7%": 34,
  "71.8%": 34,
  "71.9%": 34,
  "72.0%": 34,
  "72.1%": 34,
  "72.2%": 34,
  "72.3%": 34,
  "72.4%": 34,
  "72.5%": 34,
  "72.6%": 34,
  "72.7%": 34,
  "72.8%": 34,
  "72.9%": 34,
  "73.0%": 34,
  "73.1%": 34,
  "73.2%": 34,
  "73.3%": 34,
  "73.4%": 34,
  "73.5%": 34,
  "73.6%": 34,
  "73.7%": 34,
  "73.8%": 34,
  "73.9%": 34,
  "74.0%": 34,
  "74.1%": 34,
  "74.2%": 34,
  "74.3%": 34,
  "74.4%": 34,
  "74.5%": 34,
  "74.6%": 34,
  "74.7%": 34,
  "74.8%": 34,
  "74.9%": 34,
  "75.0%": 34,
  "75.1%": 34,
  "75.2%": 34,
  "75.3%": 34,
  "75.4%": 34,
  "75.5%": 34,
  "75.6%": 34,
  "75.7%": 34,
  "75.8%": 34,
  "75.9%": 34,
  "76.0%": 34,
  "76.1%": 34,
  "76.2%": 34,
  "76.3%": 34,
  "76.4%": 34,
  "76.5%": 34,
  "76.6%": 34,
  "76.7%": 34,
  "76.8%": 34,
  "76.9%": 34,
  "77.0%": 34,
  "77.1%": 34,
  "77.2%": 34,
  "77.3%": 34,
  "77.4%": 34,
  "77.5%": 34,
  "77.6%": 34,
  "77.7%": 34,
  "77.8%": 34,
  "77.9%": 34,
  "78.0%": 34,
  "78.1%": 34,
  "78.2%": 34,
  "78.3%": 34,
  "78.4%": 34,
  "78.5%": 34,
  "78.6%": 34,
  "78.7%": 34,
  "78.8%": 34,
  "78.9%": 34,
  "79.0%": 34,
  "79.1%": 34,
  "79.2%": 34,
  "79.3%": 34,
  "79.4%": 34,
  "79.5%": 34,
  "79.6%": 34,
  "79.7%": 34,
  "79.8%": 34,
  "79.9%": 34,
  "80.0%": 34,
  "80.1%": 34,
  "80.2%": 34,
  "80.3%": 34,
  "80.4%": 34,
  "80.5%": 34,
  "80.6%": 34,
  "80.7%": 34,
  "80.8%": 34,
  "80.9%": 34,
  "81.0%": 34,
  "81.1%": 34,
  "81.2%": 34,
  "81.3%": 34,
  "81.4%": 34,
  "81.5%": 34,
  "81.6%": 34,
  "81.7%": 34,
  "81.8%": 34,
  "81.9%": 34,
  "82.0%": 34,
  "82.1%": 34,
  "82.2%": 34,
  "82.3%": 34,
  "82.4%": 34,
  "82.5%": 34,
  "82.6%": 34,
  "82.7%": 34,
  "82.8%": 34,
  "82.9%": 34,
  "83.0%": 34,
  "83.1%": 34,
  "83.2%": 34,
  "83.3%": 34,
  "83.4%": 34,
  "83.5%": 34,
  "83.6%": 34,
  "83.7%": 34,
  "83.8%": 34,
  "83.9%": 34,
  "84.0%": 34,
  "84.1%": 34,
  "84.2%": 34,
  "84.3%": 34,
  "84.4%": 34,
  "84.5%": 34,
  "84.6%": 34,
  "84.7%": 34,
  "84.8%": 34,
  "84.9%": 34,
  "85.0%": 34,
  "85.1%": 34,
  "85.2%": 34,
  "85.3%": 34,
  "85.4%": 34,
  "85.5%": 34,
  "85.6%": 34,
  "85.7%": 34,
  "85.8%": 34,
  "85.9%": 34,
  "86.0%": 34,
  "86.1%": 34,
  "86.2%": 34,
  "86.3%": 34,
  "86.4%": 34,
  "86.5%": 34,
  "86.6%": 34,
  "86.7%": 34,
  "86.8%": 34,
  "86.9%": 34,
  "87.0%": 34,
  "87.1%": 34,
  "87.2%": 34,
  "87.3%": 34,
  "87.4%": 34,
  "87.5%": 34,
  "87.6%": 34,
  "87.7%": 34,
  "87.8%": 34,
  "87.9%": 34,
  "88.0%": 34,
  "88.1%": 34,
  "88.2%": 34,
  "88.3%": 34,
  "88.4%": 34,
  "88.5%": 34,
  "88.6%": 34,
  "88.7%": 34,
  "88.8%": 34,
  "88.9%": 34,
  "89.0%": 34,
  "89.1%": 34,
  "89.2%": 34,
  "89.3%": 34,
  "89.4%": 34,
  "89.5%": 34,
  "89.6%": 34,
  "89.7%": 34,
  "89.8%": 34,
  "89.9%": 34,
  "90.0%": 34,
  "90.1%": 34,
  "90.2%": 34,
  "90.3%": 34,
  "90.4%": 34,
  "90.5%": 34,
  "90.6%": 34,
  "90.7%": 34,
  "90.8%": 34,
  "90.9%": 34,
  "91.0%": 34,
  "91.1%": 34,
  "91.2%": 34,
  "91.3%": 34,
  "91.4%": 34,
  "91.5%": 34,
  "91.6%": 34,
  "91.7%": 34,
  "91.8%": 34,
  "91.9%": 34,
  "92.0%": 34,
  "92.1%": 34,
  "92.2%": 34,
  "92.3%": 34,
  "92.4%": 34,
  "92.5%": 34,
  "92.6%": 34,
  "92.7%": 34,
  "92.8%": 34,
  "92.9%": 34,
  "93.0%": 34,
  "93.1%": 34,
  "93.2%": 34,
  "93.3%": 34,
  "93.4%": 34,
  "93.5%": 34,
  "93.6%": 34,
  "93.7%": 34,
  "93.8%": 34,
  "93.9%": 34,
  "94.0%": 34,
  "94.1%": 34,
  "94.2%": 34,
  "94.3%": 34,
  "94.4%": 34,
  "94.5%": 34,
  "94.6%": 34,
  "94.7%": 34,
  "94.8%": 34,
  "94.9%": 34,
  "95.0%": 34,
  "95.1%": 34,
  "95.2%": 34,
  "95.3%": 34,
  "95.4%": 34,
  "95.5%": 34,
  "95.6%": 34,
  "95.7%": 34,
  "95.8%": 34,
  "95.9%": 34,
  "96.0%": 34,
  "96.1%": 34,
  "96.2%": 34,
  "96.3%": 34,
  "96.4%": 34,
  "96.5%": 34,
  "96.6%": 34,
  "96.7%": 34,
  "96.8%": 34,
  "96.9%": 34,
  "97.0%": 34,
  "97.1%": 34,
  "97.2%": 34,
  "97.3%": 34,
  "97.4%": 34,
  "97.5%": 34,
  "97.6%": 34,
  "97.7%": 34,
  "97.8%": 34,
  "97.9%": 34,
  "98.0%": 34,
  "98.1%": 34,
  "98.2%": 34,
  "98.3%": 34,
  "98.4%": 34,
  "98.5%": 34,
  "98.6%": 34,
  "98.7%": 34,
  "98.8%": 34,
  "98.9%": 34,
  "99.0%": 34,
  "99.1%": 34,
  "99.2%": 34,
  "99.3%": 34,
  "99.4%": 34,
  "99.5%": 34,
  "99.6%": 34,
  "99.7%": 34,
  "99.8%": 34,
  "99.9%": 34,
  "100.0%": 41,
};

const longestPercent = { percent: "100.0%", width: 41 };

export { percents, longestPercent };
