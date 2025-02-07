<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>AURAMAR</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="estilos.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<body>
	<header>
        <nav>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#reiki">Sobre el Reiki</a></li>
            <li><a href="#servicios">¿Qué ofrecemos?</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    <section id="home">
        <h1>¡Bienvenido!</h1>
        <p>Este sitio fue diseñado para dar a conocer el Reiki y sus beneficios para tu salud.</p>
        <div id="slider">
            <img src="imagenes/slider1.jpg" alt="Slider 1">
            <img src="imagenes/slider2.jpg" alt="Slider 2">
            <img src="imagenes/slider3.jpg" alt="Slider 3">
        </div>
    </section>
    <section id="reiki">
        <h2>Sobre el Reiki</h2>
        <p>Reiki es una técnica japonesa para la reducción del estrés y la relajación que promueve la curación.<br/>
        La palabra Reiki se compone de dos palabras japonesas: </p> 
        <ul>
        <li>REI: significa la “sabiduría de Dios” o “ el poder superior”</li>
        <li>KI: es la energía de la fuerza vital. teniendo como resultado la energía de la fuerza vital espiritual. Es importante aclarar que el Reiki no tiene religión.</li>
        </ul>
        <p>Se trata de un método simple, natural y seguro de curación espiritual, el cual permite <br/>
            que el cuerpo absorba la energía vital. Trata a las personas en su totalidad: <br/>
            cuerpo, emociones, mente y espíritu, logrando múltiples beneficios, como:</p>
        <ul>
            <li>relajación</li>
            <li>sentimiento de paz y seguridad</li>
            <li>bienestar general</li>
        </ul>
    </section>
    <section id="servicios">
        <h2>¿Qué ofrecemos?</h2>
        <div class="servicio1">
            <img src="imagenes/servicio1.jpg">
            <p id="text1">Generalmente, las personas que experimentan una sesión de reiki sienten <br/>
                un alivio inmediato a su malestar, ya sea físico o emocional. <br/>
                Es importante aclarar que el reiki no reemplaza la medicina tradicional, <br/>
                aquella persona que se encuentre en un tratamiento debe continuar con el mismo. <br/>
                El reiki no es una receta mágica, se debe tener conciencia y responsabilidad.
            </p>
            <p id="text2">El servicio que se brindará, en principio, escucha atenta al consultante; <br/>
                luego, se ubicará en la camilla y, de acuerdo a su necesidad, se comenzará <br/>
                con la sesión, con música serena y una pequeña meditación.</p>
            <p id="text3"><br/>
                <br/>
                </p>
        </div>
    </section>
    <section id="contacto">
        <h2>Contacto</h2>
        <form method="POST" action="registro.php">
            <input type="text" name="nombre" placeholder="nombre" required><br>
            <input type="text" name="apellido" placeholder="apellido" required><br>
            <input type="email" name="correo" placeholder="email" required><br>
            <textarea name="mensaje" placeholder="mensaje" required></textarea><br>
            <input type="submit" value="Enviar">
        </form>
        <?php if (isset($_GET['error'])) {
   			echo "<p>La consulta no pudo ser enviada. Intente nuevamente.</p>"; }
   			else if (isset($_GET['ok'])){
   			echo "<p>Consulta enviada correctamente!</p>";
   			}
   		?>
    </section>
</body>
<footer>
    <p>Contacto: 0123456789</p>
    <p>Dirección: Calle 123, 456, Ciudad</p>
</footer>