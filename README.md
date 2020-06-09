## Getting Started

用Node.js + Express框架練習的作品，內容主要為餐廳清單及其詳細資訊。

## Getting Started
Step.1 Clone and install node package
```
$ git clone https://github.com/harry811016/restaurant-proj-crud.git
$ npm install
```
Step.2 Use env-example.txt to set up process.env [here](https://github.com/harry811016/restaurant-proj-crud/blob/master/public/env-example.txt)

Step.3 Run seed data to build data quickly
```
$ npm run seed
```
Step.4 Execute server 
```
$ npm run dev 
```
Step.5 Enter following website on browser
```
http://localhost:3000
```

#### Home Page (+sort) 

![Webpicture](/public/homepage.png)

#### Show Page

![Webpicture](/public/showpage.png)

#### Create Page

![Webpicture](/public/createpage.png)


#### Login Page

![Webpicture](/public/login.png)

## Features
* 新增資料庫功能
* 依照餐廳名稱進行搜尋
* 檢視餐廳詳細介紹包含類別、電話、圖片及地址連結
* 新增餐廳清單新增、編輯、刪除功能
* 新增依照名稱、類別、評比等排序功能

## Environment Setup
* Node.js

## Built With & Tools
* Express framework
* Express-handlebars
* body-parser
* mongoose
* method-override
* Static Files include Bootstrap, jQuery, Popper.js and fontawesome

## Update (2020/05/17)
* 利用method-override 達到RESTful設計
* 重新規劃路由模組
* 重構Ｍongoose
* 新增排序功能


## Update (2020/06/07)
* 添加登入功能以及第三方登入功能(Facebook)

