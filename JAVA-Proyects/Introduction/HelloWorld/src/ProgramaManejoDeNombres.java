import java.util.Scanner;

public class ProgramaManejoDeNombres {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el nombre del primer integrante: ");
        String nombre1 = scanner.nextLine();

        System.out.println("Ingrese el nombre del segundo integrante: ");
        String nombre2 = scanner.nextLine();

        System.out.println("Ingrese el nombre del tercer integrante: ");
        String nombre3 = scanner.nextLine();

        String resultado = nombre1.substring(1, 2).toUpperCase() + "." + nombre1.substring(nombre1.length()-2) + "_" + nombre2.substring(1, 2).toUpperCase() + "." + nombre2.substring(nombre2.length()-2) + "_" + nombre3.substring(1, 2).toUpperCase() + "." + nombre3.substring(nombre3.length()-2);

        System.out.println("resultado = " + resultado);

    }
}
