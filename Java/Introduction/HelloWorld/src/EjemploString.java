public class EjemploString {

    public static void main(String[] args) {

        String curso = "Programacion Java";
        String curso2 = "Programacion Java";

        boolean resultado = true;
        System.out.println("resultant = " + resultado);

        resultado = curso.equals(curso2);
        System.out.println("resultado = " + resultado);

        String curso3 = "Programacion Java";
        resultado = curso == curso3;
        System.out.println("resultado = " + resultado);
    }
}
