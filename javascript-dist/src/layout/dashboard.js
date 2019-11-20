import Header from './header.js'
import Content from './content'

export default class Dashboard{
    constructor(){
        const dashboard = document.getElementById('dashboard');
        const header = new Header();
        const content = new Content();
        dashboard.innerHTML += '<h1>Dashboard</h1>';
        dashboard.innerHTML +=  header.getHtml();
        dashboard.innerHTML +=  content.getHtml();
        console.log('Init dashboard');
    }
}