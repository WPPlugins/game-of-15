<?php

/*
Plugin Name: Game of 15
Plugin URI: http://www.crawlermotori.com/229/game-of-15/
Description: Shortcode to add the Game of 15 in post, category or pages; just add [gameof15 immagine="url" color="#000000"].
Author: Danilo Franceschini      
Version: 1.0
Author URI: http://www.crawlermotori.com/
*/

add_shortcode('gameof15', 'go15s');

function go15s($atts, $content = null) { 
   $url_p = plugin_dir_url( __FILE__ );
   extract(shortcode_atts(array(
      "immagine" => "",
	  "color" => "#000000"
   ), $atts));

?>
    <script type="text/javascript" src="<?php echo $url_p; ?>gameof15.js"></script>
    <link rel="stylesheet" href="<?php echo $url_p; ?>gameof15.css" >
    
    <style type="text/css">
    .InnerDiv{
		color: <?php echo $color; ?>;
    }
    <?php
	$j=0;
  for( $i = 1; $i < 16; $i++ ){
   if( $j == 4){
       $j = 0;
   }
   $pi = $j * 100;
   $pi = $pi.'px';
   if($i < 5){
    $k = 0;
   }elseif($i < 9){
    $k = '100px';
   }elseif($i < 13){
    $k = '200px';
   }elseif($i < 16){
    $k = '300px';
   }
   $stile = "#Inner_".$i."{
   	   background-image: url('".$immagine."');
       background-position: -".$pi." -".$k.", center;
   }";
   $j++;
echo $stile;

  }
?>
    </style>
    
    <div class="container">
            <h1>Gioco del 15</h1>
            <div id="status">Numero mosse: <span></span></div>
            <div id="game"></div>
            <div id="controls"><button>Nuovo Gioco</button></div>
        </div>
    <?php
/*
    $testo = '<div class="container">';
    $testo = '<h2>Gioco del 15</h2>';
    $testo = '<div id="status">Numero mosse: <span></span></div>';
    $testo = '<div id="game"></div>';
    $testo = '<div id="controls"><button>New Game</button></div>';
    $testo = '</div>';
//    return $testo;
*/
}




