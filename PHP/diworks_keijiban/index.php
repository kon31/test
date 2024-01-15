<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>di_works_keijiban</title>
        <Link rel="stylesheet" type="text/css" href="style.css">
    </head>

<body>
    <div class="logo">
        <img src="diblog_logo.jpg">
    </div>
    <header>
        <ul>
            <li>トップ　　</li>
            <li>プロフィール</li>
            <li>D.I.Blogについて</li>
            <li>登録フォーム</li>
            <li>問い合わせ</li>
            <li>　　その他</li>
        </ul>
    </header>

    <main>
            <div class="left">
                <h1>プログラミングに役立つ掲示板</h1>

                <form method="post" action="insert.php">
                    <h2>入力フォーム</h2>
                    <div>
                        <label>ハンドルネーム</label><br>
                        <input type="text" class="tect" size="35" name="handlename">
                    </div>
        
                    <div>
                        <label>タイトル</label><br>
                        <input type="text" class="tect" size="35" name="title">
                    </div>
        
                    <div>
                        <label>コメント</label><br>
                        <textarea cols="60" rows="7" name="comments"></textarea>
                    </div>
        
                    <div>
                        <input type="submit" class="submit" value="投稿する">
                    </div>
                   
                </form>
                <?php
                mb_internal_encoding("utf8");
                $pdo = new PDO("mysql:dbname=lesson03;host=localhost;","root","");
                $stmt = $pdo -> query("select * from diworks_keijiban");

                while($row=$stmt->fetch()){
                    echo"<div class='otayori'>";
                    echo"<div class='kiji'>";
                    echo"<h3>".$row['title']."</h3>";
                    echo"<div class='contents'>";
                    echo"<p>".$row['comments']."</p>";
                    echo"<div class='handlename'>posted by".$row['handlename']."</div>";
                    echo"</div>";
                    echo"</div>";
                    echo"</div>";
                    }
                ?>
            </div>

            <div class="right">
                <div class="title">
                <h4>人気の記事</h4>
                </div>
                    <h5>　PHPおすすめ本</h5>
                    <h5>　PHP  MyAdminの使い方</h5>
                    <h5>　今人気のエディタTop5</h5>
                    <h5>　HTMLの基礎</h5>
                    <br>
                <div class="title">
                <h4>オススメリンク</h4>
                </div>
                    <h5>　ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</h5>
                    <h5>　XAMPPのダウンロード</h5>
                    <h5>　Eclipseのダウンロード</h5>
                    <h5>　Backketsのダウンロード</h5>
                    <br>
                <div class="title">
                <h4>カテゴリ</h4>
                </div>
                    <h5>　HTML</h5>
                    <h5>　PHP</h5>
                    <h5>　MySQL</h5>
                    <h5>　JavaSclipt</h5>
            </div>
    </main> 
    <footer>
        <ul>
            <li>Copyright D.I.works| D.I.blog is the one which provides A to Z about programing</li>
        </ul>
    </footer>
</body>
</html>