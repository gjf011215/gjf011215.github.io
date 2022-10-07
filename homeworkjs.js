let t0 = true;
let t1 = true;
// let i = 0;  //初始化数组首元素
let x = 0;  //获取元素索引
let y = 0;  //文件顺序
let nav_add = document.getElementById("nav_add");
let nav_del = document.getElementById("nav_del");
let but = document.getElementById("but");
let id_nav = document.getElementById("id_nav");
let nav_01 = document.getElementsByClassName("nav_01");
let id_body = document.getElementById("id_body");
let but_text = document.getElementById("but_text");
let id_nav_con = document.getElementById("id_nav_con");
let class_content = document.querySelector('.content');
let class_text = document.querySelector('.text');
let id_content = document.getElementById("content");

const TextContent = '<div class="text" ondblclick="show_mark(this.children[0])"><textarea name="" id="content" placeholder="请输入内容..."onclick="showbianhao(this.parentNode.children[0])"></textarea><div class="bt_function"><div class="bt_up"><button type="submit"id="add_up"onclick="add_up(this.parentNode.parentNode.parentNode)">上添加↑+</button><button type="submit"id="add_down"onclick="add_down(this.parentNode.parentNode.parentNode)">下添加↓+</button><button type="submit"id="del"onclick="del_this(this.parentNode.parentNode.parentNode)">删除-</button></div><div class="bt_down"><button type="submit"id="move_up"onclick="move_up(this.parentNode.parentNode.parentNode)">上移↑</button><button type="submit"id="move_down"onclick="move_down(this.parentNode.parentNode.parentNode)">下移↓</button><button type="submit" id="show_html" onclick="show_html(this.parentNode.parentNode.parentNode)">保存</button></div></div></div>';

function showNav(but) {
    if (t0) {
        // id_nav_con.style.display = "none";
        but_text.innerHTML = "显示";
        id_nav_con.style.width = "0px";
        id_body.style.width = "1720px";
        class_content.style.width = "1720px";
        class_text.style.width = "1720px";
        id_content.style.width = "1360px";
        t0 = false;
    } else {
        // id_nav_con.style.display = "block";
        but_text.innerHTML = "隐藏";
        id_nav_con.style.width = "360px";
        id_body.style.width = "1360px";
        class_content.style.width = "1360px";
        class_text.style.width = "1360px";
        id_content.style.width = "1000px";
        t0 = true;
    }
}

Chosed(0);

// function begin() {
//     for (let i = 0; i < nav_01.length; i++){
//         nav_01[i].onclick = function(){
//             console.log("初始化i:",i);
//             x = i;
//             console.log("初始化x:", x);
//             // showBody(i);
//             nav_01[i].style = "border-left: rgb(17, 233, 248) solid 5px;";
//         }
//     }
// }



// function showBody(i) {
//     if (t1) {
//         console.log("showBody");
//         id_body.style.display = "block";
//         Chosed(i);
//         t1 = false;
//     } else {
//         console.log("NoShowBody");
//         id_body.style.display = "none";
//         NoChosed(i);
//         t1 = true;
//     }
// }

function Chosed(i) {
    for (let j = 0; j < nav_01.length; j++){
            nav_01[j].style = "none";
    }
    console.log("选择了索引i：",i);
    nav_01[i].style = "border-left: rgb(17, 233, 248) solid 5px;width: 355px;";
    nav_01[i].style.backgroundColor = "#0093E9";
    nav_01[i].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

function NoChosed(i) {
    for (let j = 0; j < nav_01.length; j++){
        nav_01[j].style = "none";
    }
}

function addNav() {
    //创建内存对象
    let navLi = document.createElement("div");
    // x++;
    //修改样式
    navLi.className = "nav_01";
    //追加到目标上
    id_nav.appendChild(navLi);
    // let nav_01 = document.getElementsByClassName("nav_01");
    console.log("增加更新了索引x:", x);
    for (let i = 1; i < nav_01.length; i++){
        nav_01[0].onclick = function () {
            Chosed(0);
            i = 0;
            x = i;
        }
        nav_01[i].onclick = function(){
            console.log("索引i:", i);
            Chosed(i);
            x = i;
        }
        x = i;
        console.log("索引_i:", i);
    }
    Chosed(x);
    console.log(nav_01.length);
    //设置元素内容
    navLi.innerHTML = "新建文件" + x;
}

function delNav() {
    console.log("删除了索引x:", x);
    nav_01[x].remove();
    for (let i = x; i < nav_01.length; i++){
        nav_01[i].onclick = function(){
            console.log("删除后更新索引i:", i);
            Chosed(i);
        }
        nav_01[i].innerHTML = "新建文件" + i;
    }
    Chosed(x);
}

// document.addEventListener('click', function (index) {
//     index = document.getElementsByClassName("nav_01");
// });

// function List() {
//     this.listSize = 0; //记录列表元素的个数
//     this.pos = 0; //记录列表的位置
//     this.dataStore = []; //存储列表元素
// }

function showbianhao(x) {
    console.log("showbianhao");
    console.log(x);
    let textarea = document.querySelectorAll('textarea');
    let num = document.getElementById('num');
    console.log(num);
    for (let i = 0; i < textarea.length; i++){
        if (x == textarea[i]) {
            console.log("zxheli");
            num.innerHTML = '编号：' + i;
        }
    }
//     let input = document.getElementById
//     document.getElementById('content').innerHTML =
//       marked.parse('# Marked in browser\n\nRendered by **marked**.');
}

function show_html(x) {
    console.log(x.children[0].value);
    let text = marked.parse(x.children[0].value);
    let div = document.createElement('div');
    div.innerHTML = text;
    // div.className = "#content";
    div.id = "content";
    // div.text = 'show_mark(this.parentNode)';
    x.innerHTML = "";
    x.appendChild(div)
    x.innerHTML = x.innerHTML+'<div class="bt_function"><div class="bt_up"><button type="submit"id="add_up"onclick="add_up(this.parentNode.parentNode.parentNode)">上添加↑+</button><button type="submit"id="add_down"onclick="add_down(this.parentNode.parentNode.parentNode)">下添加↓+</button><button type="submit"id="del"onclick="del_this(this.parentNode.parentNode.parentNode)">删除-</button></div><div class="bt_down"><button type="submit"id="move_up"onclick="move_up(this.parentNode.parentNode.parentNode)">上移↑</button><button type="submit"id="move_down"onclick="move_down(this.parentNode.parentNode.parentNode)">下移↓</button><button type="submit" id="show_html" onclick="show_html(this.parentNode.parentNode.parentNode)">保存</button></div></div>'
    
}

function show_mark(x) {
    console.log(x.parentNode);
    let xbaba = x.parentNode;
    let text = x.innerHTML;
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(text);
    let textarea = document.createElement('textarea');
    textarea.innerHTML = markdown;
    // div.className = "#content";
    textarea.id = "content";
    // div.text = 'show_mark(this.parentNode)';
    x.parentNode.innerHTML = "";
    xbaba.appendChild(textarea)
    xbaba.innerHTML = xbaba.innerHTML+'<div class="bt_function"><div class="bt_up"><button type="submit"id="add_up"onclick="add_up(this.parentNode.parentNode.parentNode)">上添加↑+</button><button type="submit"id="add_down"onclick="add_down(this.parentNode.parentNode.parentNode)">下添加↓+</button><button type="submit"id="del"onclick="del_this(this.parentNode.parentNode.parentNode)">删除-</button></div><div class="bt_down"><button type="submit"id="move_up"onclick="move_up(this.parentNode.parentNode.parentNode)">上移↑</button><button type="submit"id="move_down"onclick="move_down(this.parentNode.parentNode.parentNode)">下移↓</button><button type="submit" id="show_html" onclick="show_html(this.parentNode.parentNode.parentNode)">保存</button></div></div>'

}


function add_up(add_up) {
    add_up.insertAdjacentHTML('beforebegin', TextContent);
    
}

function add_down(add_down) {
    add_down.insertAdjacentHTML('afterend', TextContent);
}

function del_this(del_this) {
    del_this.remove();
}

function move_up(x) {
    console.log(x.previousElementSibling);
    let old_up_value = x.previousElementSibling.children[0].value;
    x.previousElementSibling.children[0].value = x.children[0].value;
    x.children[0].value = old_up_value;
    // move_up.style.innerHTML = "上移";
    
}

function move_down(x) {
    console.log(x.nextElementSibling);
    let old_down_value = x.nextElementSibling.children[0].value;
    x.nextElementSibling.children[0].value = x.children[0].value;
    x.children[0].value = old_down_value;
    // move_down.style.innerHTML = "下移";
}

