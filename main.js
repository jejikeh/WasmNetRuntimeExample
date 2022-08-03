import { App } from './app-support.js'

App.init = async function () {
    await App.MONO.mono_run_main("BrowserTest.dll", App.runArgs.applicationArguments);
}
