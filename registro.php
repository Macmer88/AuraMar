<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitización y validación
    $nombre = filter_input(INPUT_POST, 'nombre');
    $apellido = filter_input(INPUT_POST, 'apellido');
    $correo = filter_input(INPUT_POST, 'correo');
    $mensaje = filter_input(INPUT_POST, 'mensaje');

    if (empty($nombre) || empty($apellido) || empty($correo) || empty($mensaje)) {
        die("Error: Todos los campos son obligatorios.");
    }

    include("conexion.php");

    // Evita inyección SQL
    $stmt = $basededatos->prepare("INSERT INTO mensajes (nombre, apellido, correo, mensaje) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $basededatos->error);
    }

    $stmt->bind_param("ssss", $nombre, $apellido, $correo, $mensaje);

    if ($stmt->execute()) {
        header("Location: index.php?ok");
    } else {
        die("Error al guardar el mensaje: " . $stmt->error);
    }

    $stmt->close();
    $basededatos->close();
} else {
    die("Error: Método no permitido.");
}
?>