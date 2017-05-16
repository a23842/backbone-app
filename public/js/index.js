var obj = {};
//将Backbone中的evwnts里面的属性赋值给obj
_.extend(obj,Backbone.Events);
//事件的监听，该事件为自定义事件
obj.on('hello',function(msg){
    alert('123' + msg);
});
//手动触发hello事件
obj.trigger('hello','456');

//定义一个模型
var Sidebar = Backbone.Model.extend({
    promptColor:function(){
        var cssColor = prompt('请输入一种颜色：');
        this.set({color:cssColor});
    }
})
//实例化模型
var sidebar = new Sidebar;
//监听change事件
sidebar.on('change:color',function(model,c){
    console.log(model);
    $('#side').css({backgroundColor:c});
});

sidebar.promptColor();