Продолжение learning-webpack.
Link of pre step: https://github.com/AlexShiversGith/learning-webpack

Вкрорячиваем React в webpack приложение.

1. npm i react react-dom // скачиваем react
2. Импортируем react и ReactDOM в index.js
3. npm install --save-dev babel-loader @babel/core //установка
babel для обработки jsx webpack'ом
4. npm install --save-dev @babel/preset-react 
5. webpack.config.js:
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
            }
        ]
    } // добавляем в конфиг 
6. Добавляем контейнер с id root в index.html
7. В index.js создаем константу, рендерим и передаем в root
8. Собираем приложение и радуемся Hello world