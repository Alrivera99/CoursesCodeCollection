<?php
include 'includes/header.php';

class Empleado {
    public function __construct(
        public string $nombre,
        public string $apellido,
        public string $departamento,
        public string $email,
        public string $codigo) { 
    }
}


$empleado = new Empleado('Alejandro', 'Rivera', 'TI', 'Alejandro@empresa.com', '1234');


echo '<pre>';
var_dump($empleado);
echo '</pre>';