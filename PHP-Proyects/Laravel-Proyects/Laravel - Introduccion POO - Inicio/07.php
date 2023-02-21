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

    public function getNombreCompleto() {
        return $this->nombre . ' ' . $this->apellido;
    }
}


$alejandro = new Empleado('Alejandro', 'Rivera', 'TI', 'Alejandro@empresa.com', 1234);
$gerard = new Empleado('Gerard', 'Carias', 'MKT', 'gerard@empresa.com', 1234);

$departamento = $alejandro->getNombreCompleto();

echo $departamento;
echo '<pre>';
var_dump($alejandro);
echo '</pre>';


echo '<pre>';
var_dump($gerard);

echo '</pre>';