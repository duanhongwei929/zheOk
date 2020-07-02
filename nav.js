document.writeln("<div class=\'nav\'>");
document.writeln("    <div class=\'content nav-box\'>");
document.writeln("        <div class=\'logo\'>");
document.writeln("            <img src=\'images/logo.png\' alt=\'\'>");
document.writeln("        </div>");
document.writeln("        <ul>");
document.writeln("            <li class=\'choose\'><a href='index.html'>首页</a></li>");
document.writeln("            <li><a href='about.html'>高端定制</a></li>");
document.writeln("            <li><a href='about.html'>移动应用</a></li>");
document.writeln("            <li><a href='industry.html'>行业方案</a></li>");
document.writeln("            <li><a href='about.html'>关于我们</a></li>");
document.writeln("        </ul>");
document.writeln("        <div class=\'phone\'>123456789</div>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("<div class=\'phoneNav\'>");
document.writeln("			<a href=\'index.html\'><img height=\'40\' src=\'images/logo.png\' ></a>");
document.writeln("			<img class=\'phoneBtn\' height=\'30\' src=\'images/nav.png\' >");
document.writeln("		</div>");
document.writeln("		<div class=\'mb\'></div>");
document.writeln("		<ul class=\'phoneNav-box\'>");
document.writeln("			<li><a href=\'index.html\'>首页</a></li>");
document.writeln("			<li><a href=\'\'>高端定制</a></li>");
document.writeln("			<li><a href=\'\'>移动应用</a></li>");
document.writeln("			<li><a href=\'industry.html'\'>行业方案</a></li>");
document.writeln("			<li><a href=\'about.html'\'>关于我们</a></li>");
document.writeln("		</ul>");
$(document).ready(function() {
	$(".nav-box li a").each(function() {
		if ($(this)[0].href == String(window.location)) {
			$(".nav-box .choose").removeClass('choose')
			$(this).parent().addClass("choose");
		}
	});
});
$('.phoneNav').click(function(){
	$('.mb').slideToggle();
	$('.phoneNav-box').slideToggle(500);
})

/*---- 备份 -----*/
/*
<div class="nav">
    <div class="content nav-box">
    <div class="logo">
    <img src="images/logo.png" alt="">
    </div>
    <ul>
    <li class="choose">首页</li>
    <li>高端定制</li>
    <li>移动应用</li>
    <li>行业方案</li>
    <li>关于我们</li>
    </ul>
    <div class="phone">123456789</div>
    </div>
</div>
*/