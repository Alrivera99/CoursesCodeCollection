<?php
include 'includes/header.php';

// Modifcadores de acceso en PHP
class Empleado {

    // public, protected, private

    protected $nombre;
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

    public function obtenerNombre() {
        return $this->nombre;
    }
}


$alejandro = new Empleado('Alejandro', 'Rivera', 'TI', 'Alejandro@empresa.com', 1234);

echo $alejandro->obtenerNombre();
echo '<pre>';
var_dump($alejandro);
echo '</pre>';
