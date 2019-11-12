<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Посчитайка</h1>
        <div class="social-icons">
            <a href="" id="twitter"> <img src="https://image.flaticon.com/icons/png/512/124/124021.png" alt=""
                    srcset=""> </a>
            <a href="" id="fasebook"><img src="https://image.flaticon.com/icons/png/512/124/124010.png" alt=""
                    srcset=""></a>
            <a href="" id="googleplus"><img src="https://image.flaticon.com/icons/png/512/124/124013.png" alt=""
                    srcset=""></a>
            <a href="" id="pinterest"><img src="https://image.flaticon.com/icons/png/512/124/124039.png" alt=""
                    srcset=""></a>
        </div>
        <div class="reg-auth">
            <div onclick="showRegForm()">регистрация</div>
            <div >авторизация</div>
            <div class="reg-auth__form">
                <h2>регистрируемся</h2>
                <div class="form-wrapper">
                <form method="post" autocomplete="off" action="reg.php">
        
                    <p> <label for="userName">Имя: </label></p>
                        <input type="text" name="userName" placeholder="Введите имя" size="20"  autofocus/>
        
                    <p> <label for="login">Логин: </label></p>
                        <input name="login" type="text" placeholder="login" size="20" />
                    <p> <label for="password">Пароль: </label></p>
                        <input name="password" type="password" placeholder="password" size="20" /> 
                    <p><label for="userPhone">Телефон: </label></p>
                        <input type="text" name="userPhone" placeholder="Введите номер телефона" size="20" maxlength="11" />
                    <p><label for="userEmail">Email: </label></p>
                        <input type="email" name="userEmail" placeholder="Введите номер телефона" size="20" maxlength="11" />
                    
                    <h2>Укажите пол</h2>
                    <p>
                        <input type="radio" value="man" checked name="gender"/>мужской
                    </p>
                    <p>
                        <input type="radio" value="woman" name="gender"/>женский
                    </p>
                    <p><input type="submit" name="submit" size="20" onclick="SubmitForm()" /></p>
                    <p><input type="reset" value="отмена" size="20"onclick="CloseForm()"></p>
                </form>
            </div>
        </div>
            
        </div>
    </header>
    <div class="main">

        <div class="main__count">
            <input type="text" id="input" placeholder="Введите число!">
            <button onclick="buttonClick()">cколько в квадрате</button>
        </div>

    </div>
    <h2> википедия вам в помощь</h2>
    <div class="search-in-wiki">

        <iframe src="http://wikipedia.com" width="900" height="300">
        </iframe>
        <div class="questions">
            <h2>ваши вопросы и пожелания</h2>
            <input type="text" placeholder="введите текст">
            <input type="submit" value="отправить">

        </div>

    </div>





   <script src="main.js"></script>
</body>

</html>