import { App } from './app-support.js'

App.init = async function () {
    await App.MONO.mono_run_main("BrowserTest.dll", App.runArgs.applicationArguments);


    var hello = App.BINDING.bind_static_method("[BrowserTest] Example:Hello");
    console.log(hello("Hello World!"));

    var returnZero = App.BINDING.bind_static_method("[BrowserTest] Example:ReturnZero");
    console.log(returnZero());
}
