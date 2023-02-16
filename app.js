
const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

var itemActive = document.querySelector('.tab-item.active');
console.log(itemActive);
var line = document.querySelector('.line');

line.style.left = itemActive.offsetLeft + 'px';
line.style.width = itemActive.offsetWidth + 'px';

console.log(tabs,panes)
tabs.forEach((tab,index) => {

    var pane = panes[index];
    tab.onclick = ()=> {

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';

        document.querySelector('.tab-item.active').classList.remove('active');
        tab.classList.add('active');

        document.querySelector('.tab-pane.active').classList.remove('active');
        pane.classList.add('active');
    }
})