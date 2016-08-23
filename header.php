<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=980px">
<meta name='yandex-verification' content='6a335dae715000f9' />
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?$APPLICATION->ShowTitle()?></title>
    <?$APPLICATION->ShowHead();?>
<link rel="icon" type="image/png" href="/img/favicon.png" />

	<!-- fancybox -->
	<link rel="stylesheet" type="text/css" href="/js/fancy/jquery.fancybox.css?v=2.1.5" media="screen">
    <link href="/js/slick.css" rel="stylesheet">	
    <!-- Bootstrap -->
<link href='https://fonts.googleapis.com/css?family=PT+Sans+Caption:400,700&subset=latin-ext,cyrillic-ext,latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href="/css/bootstrap.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.maskedinput.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script type = "text/javascript" src = "//cdn.callbackhunter.com/cbh.js?hunter_code=77a5ad8c41a8a8fec28e81793172fb28" charset = "UTF-8"></script>
	<!-- fancybox -->
	<script type="text/javascript" src="/js/fancy/jquery.mousewheel-3.0.6.pack.js"></script>
	<script type="text/javascript" src="/js/fancy/jquery.fancybox.js?v=2.1.5"></script> 
    <script src="/js/slick.min.js"></script>
    	<script src="/js/script.js"></script>
	</head>
  <body>
	<div id="panel"><?$APPLICATION->ShowPanel();?></div>
    <div class="wrapper">
      <div class="inner">
        <aside class="left_sidebar">
          <header>
            <div class="logo">
              <a href="/">
                <img src="/img/logo.png" property="og:image">
              </a>
            </div>
          </header>
<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"main_menu", 
	array(
		"ROOT_MENU_TYPE" => "top",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MAX_LEVEL" => "1",
		"CHILD_MENU_TYPE" => "",
		"USE_EXT" => "N",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "N"
	),
	false
);?>
          <div class="phone">
<?$APPLICATION->IncludeComponent(
	"bitrix:main.include", 
	".default", 
	array(
		"AREA_FILE_SHOW" => "file",
		"PATH" => "/inc/phone_left.php",
		"EDIT_TEMPLATE" => ""
	),
	false
);?>
            <span></span>
          </div>
<?
//include($_SERVER['DOCUMENT_ROOT'].'/inc/social.php');
?>
        </aside>
        <div class="main_content">
          <div class="contacts">
            <div class="phone">
<?$APPLICATION->IncludeComponent(
	"bitrix:main.include", 
	".default", 
	array(
		"AREA_FILE_SHOW" => "file",
		"PATH" => "/inc/phone_top.php",
		"EDIT_TEMPLATE" => ""
	),
	false
);?>          
            </div>
<?
include($_SERVER['DOCUMENT_ROOT'].'/inc/social.php');
?>
          </div>
<?
global $APPLICATION;
$dir = $APPLICATION->GetCurDir();
$path=explode('/', $dir);
include($_SERVER['DOCUMENT_ROOT'].'/inc/main_sections.php');
include($_SERVER['DOCUMENT_ROOT'].'/inc/main_slider.php');
?>

		  