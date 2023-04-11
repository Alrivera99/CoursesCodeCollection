public class EjemploStringConcatenacion {

    public static void main(String[] args) {

        String curso = "Programacion Java";
        String profesor = "Alejandro Rivera";

        String detalle = curso + " con el instructor " + profesor;
        System.out.println(detalle);

        int numeroA = 10;
        int numeroB = 5;

        System.out.println(detalle + " con un total de " + (numeroA + numeroB) + " horas");
    }
}
