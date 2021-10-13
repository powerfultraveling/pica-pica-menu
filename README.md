# pica-pica-menu
## 專案簡介

1. 專案狀況: 開發中
2. 預計工期: 2021/10/9 - 2021/10/15
3. 開發者: [蔡恂藝](https://github.com/powerfultraveling)

### 要解決的痛點
因為疫情的關係，以前打工的咖啡廳需要一份線上的菜單，讓客人可以進到店家後透過掃 QR Code 在自己的裝置上看菜單，而不需要用手接觸實體菜單。除此之外，過去每當品項有更動
時，店家都需要重新製作一份菜單，為了解決者個問題，這個菜單專案還開發了後台管理功能，讓店家可以自由更動菜單內容。

偏題一下，這家咖啡廳超棒，很適合讀書做自己的事，還沒去過得趕快去看看喔 -> [喜鵲咖啡](https://www.facebook.com/picapicafe/)
### 使用的技術
使用 Node.js 搭配 Express.js 以及 Sequelize 開發的 server 端線上菜單，並使用 heroku 部屬。

## 功能

### 客人瀏覽品項
* 可依照類別瀏覽品項。
* 類別快捷鍵，點按之後可以快速跳到想要瀏覽的類別。
* 餐點類別需要放置照片，所以利用 overflow 的特性做了一個 carousel 放置餐點資訊。
### 店家管理菜單
* 新增品項。
* 編輯品項資訊。
* 刪除品項。
* 圖片上傳功能。
* 權限設定，只有登入以管理員身分才能執行上述功能。

## UI 優化
:cd::cd::cd::cd::cd::cd: 建造工程進行中 :cd::cd::cd::cd::cd::cd::cd:

## schema

### 小註解
1. category 另外開一個 table 放置 category, 未來如果店家想要加新功能比較有彈性。
2. product 裡使用 categoryid 與 category 關聯。
3. product 裡面的 image 不直接儲存圖檔，而是採用 string 的資料格式儲存圖片的路徑，讓資料庫輕量化。
4. user 雖然沒有跟其他 table 關聯，但這個專案要讓店家可以編輯資料，所以必須設計權限機制，所以設置了 user 這個 table。

<img src="https://user-images.githubusercontent.com/81896228/136881972-9e7238d3-6936-4514-b97a-5accdc3449e1.png" width="600" height="auto">

## 開發 pica-pica-menu 所需要的環境
* [git](https://git-scm.com/)
* [Node.js](https://nodejs.dev/)
* [Express](https://expressjs.com/zh-tw/)
* [MySQL](https://www.mysql.com/)

## 在本地(或是任何地方)安裝這個專案吧 !

###  1. 把這個 repo 抓下來
```
git clone 
```
### 2. 找到檔案之後在裡面初始化 npm (有安裝 Node.js 就會有 npm)
```
cd pica-pica-menu
npm init
```
### 3. 設定 database 
打開 config 裡面的 config.json，設定 database。
```
  "development": {
    "username": "your user name",
    "password": "your password",
    "database": "menu",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```
### 4. 在 MySQL workbench 裡建立一個名字為 menu 的 database
### 5. 使用 Sequelize cli 建立 tables
```
npx sequelize-cli db:migrate
```
### 6. 啟動專案
回到專案跟目錄輸入以下指令，pica-pica-menu 就會跑在 http://localhost:3000 啦!
```
node index.js
```

## 開發者

[蔡恂藝](https://github.com/powerfultraveling)






