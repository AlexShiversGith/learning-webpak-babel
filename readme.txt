Изучаем webpack. По main ветке в гите будет чистое приложение на js и собраное на webpack.
По ветке babel уже с установкой react.

терминал:
1. npm init // инициализация проекта, получение package.json
2. npm i -D webpack webpack-cli // установка webpack
3. create webpack.config.js // создание конфига webpack
4. package.json:
    "scripts": {
        "dev": "npx webpack --mode development",
        "build": "npx webpack --mode production"
    } // создание скриптов разработки/продакшена
5. npm i -D html-webpack-plugin clean-webpack-plugin css-loader less less-loader
sass sass-loader style-loader // установка необходимых плагинов для обработки 
html, css, s[ac]ss, less файлов. clean чистит папку dist
6. webpack.config.js:
    module.exports = {
        entry: {
            main: './src/index.js'
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
        },
    } // настройка точки входа и выхода, собранные файлы будут помещены в папку dist
7. webpack.config.js:
    module.exports = {
        mode: 'development'
    } // обозначение статуса приложения dev/prod.
8. webpack.config.js:
    module.exports = {
        plugins: [
            new HtmlWebpackPlugin({
                title: "Custom template",
                // Load a custom template (lodash by default)
                template: path.resolve(__dirname, './src/index.html')
            }),
            new CleanWebpackPlugin()
        ] 
    }// подключение установленных плагинов
9. webpack.config.js: 
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }, 
                {
                    test: /\.less$/i,
                    use: ['style-loader', 'css-loader', 'less-loader']
                }
            ]
        }
    } // подключение стилей
10. npm i -D file-loder // плагин для обработки файлов
11. webpack.config.js:
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                }
            ]
        }
    } // подключаем изображения
12. npm i -D webpack-dev-server // подключение dev server'a для авто перезагрузки 
страницы при изменениях в коде
13. webpack.config.js:
    module.exports = {
        devServer: {
            port: 3000,
        },
    } // назначаем порт dev сервера
14. package.json:
        "scripts": {
            "start": "webpack-dev-server --mode development --open"
        } // добавляем скрипт для запуска dev сервера

---------------------------------------------------------------------------------------

html-webpack-plugin - плагин для обработки webpack'ом html файлов, тк сам wеbpack этого
делать не умеет.

clean-webpack-plugin - плагин для очистки и актуализации файлов в папке dist

css-loader - плагин для обработки и импорта css
style-loader - плагин для включения стилей в DOM дерево, а точнее в тег <style>