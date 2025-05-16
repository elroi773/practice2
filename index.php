<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>상품 목록</h1>

    <?php 
    
        $products = [
            ['id'=>1, 'name'=>'상품1', 'price' =>10000],
            ['id'=>2,'name'=>'상품2', 'price' =>20000],
            ['id'=>3,'name'=>'상품3', 'price' =>30000]
        ]; //연관배열

        foreach ($products as $product) {
            echo "<div>";
            echo "<h2>".$product['name']."</h2>";
            echo "<p>가격:".$product['price']."원</p>";
            echo "<a href='page/product.php?id=".$product['id']."'>상세보기</a>";
            echo "</div>";

        }

        
    ?>
</body>
</html>