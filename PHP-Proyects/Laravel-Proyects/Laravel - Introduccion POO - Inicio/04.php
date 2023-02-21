<?php
include 'includes/header.php';

class Empleado {
    public $nombre;
    public $apellido;
    public $email;
    public $departamento;
    public $codigo;

    public function __construct($nombre, $apellido, $email, $departamento, $codigo) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->departamento = $departamento;
        $this->codigo = $codigo;
    }
}


$empleado = new Empleado('Alejandro', 'Rivera', 'TI', 'Alejandro@empresa.com', '1234');


echo '<pre>';
var_dump($empleado);
echo '</pre>';