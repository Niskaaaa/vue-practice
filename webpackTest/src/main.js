import $ from 'jquery'

import './css/index.css'

import './css/index.less'
import 'bootstrap/dist/css/bootstrap.css'//默认去node_modules去找


$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })
})

class Person{

    //静态属性，可以直接通过类名访问的属性；实例属性，只能通过类的实例来访问
    static info = {name:'zs',age:20}
}

var pl=new Person()