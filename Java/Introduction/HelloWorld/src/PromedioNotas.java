import java.util.Scanner;

public class PromedioNotas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int cantidadNotas = 20;
        double sumaMayoresCinco = 0;
        int contadorMayoresCinco = 0;
        double sumaInferioresCuatro = 0;
        int contadorInferioresCuatro = 0;
        int contadorNotasUno = 0;
        double sumaTotal = 0;

        for (int i = 1; i <= cantidadNotas; i++) {
            System.out.print("Ingrese la nota #" + i + ": ");
            double nota = scanner.nextDouble();

            if (nota == 0) {
                System.out.println("Error: nota inválida");
                break;
            }

            sumaTotal += nota;

            if (nota > 5) {
                sumaMayoresCinco += nota;
                contadorMayoresCinco++;
            } else if (nota < 4) {
                sumaInferioresCuatro += nota;
                contadorInferioresCuatro++;
            }

            if (nota == 1) {
                contadorNotasUno++;
            }
        }

        double promedioMayoresCinco = contadorMayoresCinco > 0 ? sumaMayoresCinco / contadorMayoresCinco : 0;

        double promedioInferioresCuatro = contadorInferioresCuatro > 0 ? sumaInferioresCuatro / contadorInferioresCuatro : 0;

        double promedioTotal = sumaTotal / cantidadNotas;

        System.out.println("Promedio de notas mayores a 5: " + promedioMayoresCinco);
        System.out.println("Promedio de notas inferiores a 4: " + promedioInferioresCuatro);
        System.out.println("Cantidad de notas con valor 1: " + contadorNotasUno);
        System.out.println("Promedio total de notas: " + promedioTotal);

        scanner.close();
    }
}
