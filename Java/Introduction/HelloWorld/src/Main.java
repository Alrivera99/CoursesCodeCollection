public class Main {

    public static void main(String[] args) {
        String saludar = "Hola Mundo desde Java";

        System.out.println("Alejandro Enrique Rivera Vasquez");
        System.out.println("saludar = " + saludar.toUpperCase());

        int numero = 10;
        System.out.println("numero = " + numero);
        boolean valor = true;
        int numero2 = 5;
        if (valor) {
            System.out.println("numero2 = " + numero2);
            numero2 = 10;
        }
        System.out.println("numero2 = " + numero2);
        var numero3 = "15";

        String nombre;
        nombre = "Alejandro";
        if (numero > 10) {
            nombre = "Enrique";
        }
        System.out.println("nombre = " + nombre);

        var edadPersona = 10;
    }
}