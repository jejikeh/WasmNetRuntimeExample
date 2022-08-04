import { App } from './app-support.js'

App.init = async function () {
    await App.MONO.mono_run_main("BrowserTest.dll", App.runArgs.applicationArguments);
    var execute = App.BINDING.bind_static_method("[BrowserTest] Example:Hello");
    console.log(execute("Hello World!"));
}

window.displayTickerAlert1 = async (symbol, price) => {
    alert(`${symbol}: $${price}!`);
};