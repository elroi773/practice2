<?php

        $products = [
            ['id'=>1, 'name'=>'상품1', 'price' =>10000, 'description' =>'상품의 1 상세설명'],
            ['id'=>2,'name'=>'상품2', 'price' =>20000,  'description' =>'상품의 2 상세설명'],
            ['id'=>3,'name'=>'상품3', 'price' =>30000,  'description' =>'상품의 3 상세설명']
        ]; //연관배열

         //id 파라미터가 전달 되었는가?
         //url 에서 포함된 id 파라미터에서 가지고 옴 

        if(isset($_GET['id'])){
            $product_id = $_GET['id'];
            $product = null;

            //상품 id에 맞는 상품 찾기
            foreach($products as $p){
                if($p['id'] == $product_id){
                    $product = $p;
                    break;
                }
            }

            //상품이 존재하면
            if($product){
                echo "<h1>".htmlspecialchars($product['name'])."</h1>";
                echo "<p>가격:".htmlspecialchars($product['price'])."원</p>";
                echo "<p>상세 설명:" .htmlspecialchars($product['description'])."</p>";
            }else{
                echo "<p>상품을 찾을 수 없습니다.</p>";
            }
        }
        else {echo "<p> 상품 id가 전달되지 않았습니다.</p>";
        }
?>
