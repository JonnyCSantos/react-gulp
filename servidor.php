<?php

$menu = [
  ['title'=>"Home",'link'=>"#home"],
  ['title'=>"Sobre",'link'=>"#sobre"],
  ['title'=>"Contato",'link'=>"#contato"],
  ['title'=>"Mapa",'link'=>"#mapa"]
];

$dados = [
  ['title'=>"Notícia 1", 'description'=>"Descrição do cartão 1", 'detail'=>"Texto de detail do cartão 1", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'description'=>"Descrição do cartão 2", 'detail'=>"Texto de detail do cartão 2", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'description'=>"Descrição do cartão 3", 'detail'=>"Texto de detail do cartão 3", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 4", 'description'=>"Descrição do cartão 4", 'detail'=>"Texto de detail do cartão 4", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 1", 'description'=>"Descrição do cartão 1", 'detail'=>"Texto de detail do cartão 1", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'description'=>"Descrição do cartão 2", 'detail'=>"Texto de detail do cartão 2", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'description'=>"Descrição do cartão 3", 'detail'=>"Texto de detail do cartão 3", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 4", 'description'=>"Descrição do cartão 4", 'detail'=>"Texto de detail do cartão 4", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 1", 'description'=>"Descrição do cartão 1", 'detail'=>"Texto de detail do cartão 1", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'description'=>"Descrição do cartão 2", 'detail'=>"Texto de detail do cartão 2", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'description'=>"Descrição do cartão 3", 'detail'=>"Texto de detail do cartão 3", 'image'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"]
];

if(isset($_GET['menu'])){
    echo json_encode($menu);exit;
}
if(isset($_GET['dados'])){
    echo json_encode($dados);exit;
}
