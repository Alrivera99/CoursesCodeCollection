<?php
include 'includes/header.php';

// Instancia una clase

class Empleado {
    public $nombre;
    public $apellido;
    public $email;
    public $departamento;
    public $codigo;
}


$empleado = new Empleado;

$empleado->nombre = 'Juan';
$empleado->apellido = 'De la torre';

echo '<pre>';
var_dump($empleado);
echo '</pre>';

$empleado2 = new Empleado;

$empleado2->nombre = 'Karen';

echo '<pre>';
var_dump($empleado2);
echo '</pre>';