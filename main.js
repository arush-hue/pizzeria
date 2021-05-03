menu_list_array= ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Farmahouse Veggie Delight Pizza","Veg Extravaganza Pizza"];
function getMenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i] + '</li>';
    }
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item()
{
    var html_data;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    html_data="<section class='cards'>";
    for(var w=0;w<menu_list_array.length;w++)
    {
        html_data=html_data+'<div class="card">'+'<img src="pizzaImg.png">' + menu_list_array[w];
    }
    html_data=html_data+"</section>";
    document.getElementById("display_addmenu").innerHTML=html_data;
}