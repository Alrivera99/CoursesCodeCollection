public class EjemploString {

    public static void main(String[] args) {

        String curso = "Programacion Java";
        String curso2 = new String("Programacion Java");

        boolean resultado = curso == curso2;
        System.out.println("resultado = " + resultado);

        resultado = curso.equals(curso2);
        System.out.println("resultado = " + resultado);

        String curso3 = "Programacion Java";
        resultado = curso == curso3;
        System.out.println("resultado = " + resultado);
    }
}
