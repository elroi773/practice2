<html>
      <head>
        <title>PHP Test</title>
      </head>
      <body>
        <?php
          $name = "김이레";  // 문자열
          $age = 20;  // 정수
          $height = 180.5; // 실수
          $is_student = true; // 불리언

          echo "이름 : $name<br>";
          echo "나이 : $age<br>";
          echo "키 : $height<br>";
          echo "학생여부 : " . ($is_student ? "학생" : "학생이 아님") . "<br>";

          echo "<h1>안녕하세요, $name 님</h1>";
          echo "<p> 작은 따옴표와 큰 따옴표의 차이는? $name </p>";
        ?> 

        <?php
          echo "5 - 3 * 3 / 3 % 3 = " . (5 - 3 * 3 / 3 % 3) . "<br>";
          echo "5 == '5' : " . (5 == '5' ? "true" : "false") . "<br>"; 
          echo "5 === '5' : " . (5 === '5' ? "true" : "false") . "<br>"; 
        ?>

        <?php
          $score = 80;
          if ($score >= 90) {
              echo "A";
          } else if ($score >= 80) {
              echo "B";
          } else if ($score >= 70) {
              echo "C";
          } else {
              echo "F";
          }
          echo "<br>";
        ?>
      <br>
        <?php  
          $today = "월요일";
          switch ($today) {
              case "월요일":
                  echo "월요병이 있어요~~";
                  break;
              case "금요일":
                  echo "불금이에요~";
                  break;
              default:
                  echo "평일이에용";
                  break;
          }
        ?>

        <?php

          echo "for반복문 : <br>";
          for ($i = 1; $i <= 5; $i++) {
            echo $i . " ";
          }

          echo "<br>";

          echo "while반복문 : <br>";
          $i = 1;  
          while ($i <= 5) {
            echo $i . " ";
            $i++;
          }                                    
          echo "<br>";        
          ?>


        <?php
          $fruits=["청포도","딸기","망고","블루베리"];
          foreach ($fruits as $fruit) { //배열을 처리 할때 쓰는 foreach 문 
            echo $fruit . "<br>";
          }
        ?>
          <!-- //$Student = ["name" => "홍길동", "age" => 20, "major" => "컴퓨터공학"];
          //echo "이름" ". $Student["name"]" . "<br>"; -->

        <?php
          $stu=[
            ["name"=>"홍길동","age"=>20,"major"=>"컴퓨터공학"],
            ["name"=>"이순신","age"=>22,"major"=>"전기공학"],
            [ "name"=>"김유신","age"=>25,"major"=>"컴퓨터공학"]
          ];
          echo "이름 : " . $stu[1]["name"] . "<br>";


          $count = count($colors);
          echo "생상의 개수 : " .$count . "<br>";

          $colors[] = "노랑";
          $colors[] = "파랑";

          sort($colors);
          ksort($colors);
          asort($colors);
          
        ?><br>

        
      </body>
    </html>
