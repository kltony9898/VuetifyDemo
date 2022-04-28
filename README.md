# interview-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[成品展示連結](https://vuetifydemo-f99af.web.app/)

## Vuetify(全域換色)


這次嘗試使用Vuetify做全域的主題顏色
除了方便對全組建的樣式顏色可以隨著設計系統的色碼表做更改也可以新增額外主題做切換
色碼也可以另外命名做管理方便溝通

![](https://i.imgur.com/p1DzxKl.png)
在組件內也可以宣告使用不同主題下的顏色
![](https://i.imgur.com/htvtVka.png)

Vuetify還有一個好處能夠使用內部api做排版

自帶自動稱滿效果
![](https://i.imgur.com/lihObip.png)


## Router & title description

/src/router/index.js

由於這次並未使用auto router
手寫router的好處在於不會因為資料夾結構影響router可以客製
看起來維護方便 但頁面過於繁雜需要拆出許多檔案來切分維護

![](https://i.imgur.com/lbQWpvh.png)

為了解決每一頁都有獨立的title以及description在建立router路徑時把各頁head內的內容json也能一併輸出未來只須要維護上面的設定檔即可
![](https://i.imgur.com/2dK3BUk.png)


## 三種輸入類型同一component

由於限定接收prop轉換不同輸入類型
![](https://i.imgur.com/Zdtk01o.png)
透過檢查使用者prop下來與目前所選的類型是否吻合
方便以後擴充各類型的輸入方式

![](https://i.imgur.com/OdeOpMs.png)

將各類型輸入方式導流方便未來擴充更多輸入方式
![](https://i.imgur.com/OCcKKEf.png)

獨立對不同輸入類型做資料處理後返回資料
![](https://i.imgur.com/m0KLYp3.png)

## 串接api資料

本來要使用他的npm包產生mock api但他年久失修他的yml檔案執行失敗
我只能隨便找一條還有的串(大部分他預設的一些list資料都死了)
![](https://i.imgur.com/LXYofFe.png)


## FirebaseHosting

[這玩意兒有坑](https://github.com/coreui/coreui-react/issues/55)
