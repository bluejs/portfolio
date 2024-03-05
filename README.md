# portfolio
## react-car-rental
React car rental website (multi-language, responsive)

> react.js, typescript, i18n, e-commerce, responsive design

1. This project is a car rental website (that is, an e-commerce website), including 3 modules: home page, vehicle product page, and shopping cart checkout page. This project implements the core functions of an online mall and can adapt to user equipment. (PC, iPad, mobile phone, etc.), which can help users browse, select products, checkout and other core functions of product purchase.
2. I am responsible for all the work of this project, from project construction, UI writing and function development. This project mainly uses the react+typescript technology stack, and uses i18n to complete multi-language adaptation, and uses a custom provider for data management ( If you cooperate with the API, the data can be stored in the server)
3. There are not many difficulties in this project. The main problem is how to complete the management and synchronization of data. Provider is one of many choices. If necessary, it can be replaced with state management libraries such as redux and mobx.

```
# 1-install dependencies
npm i
# or
yarn

# 2-run project
npm run start
# or
yarn start

# 3-website will be opened automatically at http://localhost:3000/
```

## react-typescript-admin
React administration system (multi-language, responsive)
​
> react.js, typescript, i18n, administration, responsive design, faker-js, chart.js

1. This project is a backend management system based on the React technology stack. It mainly has functions such as multi-language support, day and night mode switching, data management, etc., and integrates various common functions such as charts and tables. It was used in the submitted demo version. Mock data and the real server API can quickly adapt to real data. This system also has responsive capabilities and can adapt to various terminals (PC, iPad, mobile phones, etc.). It is a project that completes the backend management function.
2. I am responsible for all the work of this project, from project construction, UI writing and function development. This project mainly uses the react+typescript technology stack, and uses i18n to complete multi-language adaptation.
3. The main difficulty of this project is that there are many UI components, and the style needs to be unified during the development process, and each component needs to be adapted to at least two sets of styles (day and night mode). After building the component library, it can be used Building the project itself becomes very simple, so the main workload of this project is to build a UI component library and then use it to build specific logical functions.

```
# 1-install dependencies
npm i
# or
yarn

# 2-run project
npm run start
# or
yarn start

# 3-website will be opened automatically at http://localhost:3000/
```

## react-typescript-crypto-board
React cryptocurrency dashboard (multi-language, responsive, API)

> react.js, typescript, i18n, responsive design, API, styled-component, react-query, data capture

1. This project is a cryptocurrency price dashboard developed based on the React technology stack (the project sent only contains the front-end part, and does not include the back-end code for data capture and update). It mainly has multi-language support, responsiveness and automatic data updates. Functions such as static demo data are used in the submitted demo code, but with the back-end part of data update, the latest currency prices can be displayed in real time. This project has multi-language adaptation and multi-terminal adaptability (PC, iPad, cell phone)
2. I am responsible for all the work of this project, including project construction, UI, function development, and functions related to data acquisition and update (this part is not included in the demo). The price of each cryptocurrency can be synchronized in real time and displayed on the dashboard.
3. The difficulty of this project is mainly focused on how to obtain currency prices efficiently and in real time, and try to save server resources and avoid being blocked due to excessive API calls. If necessary, it can be transformed into multi-node parallel acquisition (data centralized summary) , which can provide more real-time data and prevent nodes from being blocked.

```
# 1-install dependencies
npm i
# or
yarn

# 2-run project
npm run start
# or
yarn start

# 3-website will be opened automatically at http://localhost:3000/
```

## vue-admin
Vue administration system (multi-language, responsive, mockjs)

> vue.js, echarts, element-ui, i18n, responsive design, mockjs

1. This project is a backend management system developed based on vue technology stack + element-ui. It is the most classic combination of backend management systems. It mainly has i18n multi-language support and responsive multi-terminal adaptation (PC, iPad, Mobile phone), using mock.js for data simulation in the submitted version, but real data management functions can be achieved by switching to the real server API
2. I am responsible for all the work of this project, from project construction, function development and mock-server development, to implement common backend management functions: data summary, charts, to-do, customers, orders, permissions, work order management, etc. Function
3. The difficulty of this project mainly focuses on how to efficiently build unified functional modules, data mocks, API requests, etc. By formulating unified UI specifications (mainly in line with element-ui specifications), new functions can be quickly developed and launched.
​
```
# 1-install dependencies
npm i

# 2-run project
npm run dev
# or
yarn dev

# 3-website will be opened automatically at http://localhost:8080/
```

## vue-company-website
Vue company official website (multi-language, responsive, dark mode switching)

> Vue.js, dark-mode-switch, seo, lazyload, i18n, responsive design

1. This project is an enterprise official website developed based on the vue technology stack. It has a variety of common functions such as i18n multi-language, dark mode, responsive design, etc. It can adapt to various languages, terminal devices and switch between day and night modes. Mock data is used in the demo, but it can be easily replaced with real data by changing the API or using static technology.
2. I am responsible for all the work of this project, from project construction, UI writing and logic function development, to realize various common functions of the company's official website: business display, company introduction, contact message, company recruitment (requires API cooperation), etc. And the project has been SEO optimized (if further improvement is needed, static technology must be used)
3. The main difficulty of this project lies in the workload of UI construction. This problem is well solved by building various common basic components. Functions and modules can be quickly added at any time as needed, and according to business needs (including dynamic data) Perform static processing to further improve SEO capabilities

```
# 1-install dependencies
yarn

# 2-run project
npm run serve
# or
yarn serve

# 3-website will be opened automatically at http://localhost:8080/
```
