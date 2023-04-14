import java.util.Scanner;

public class NumeroMayor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario dos números
        System.out.print("Ingrese el primer número: ");
        double num1 = scanner.nextDouble();
        System.out.print("Ingrese el segundo número: ");
        double num2 = scanner.nextDouble();

        double mayor = (num1 > num2) ? num1 : num2;
        double menor = (num1 > num2) ? num2 : num1;

        System.out.println("Los números ordenados de mayor a menor son: " + mayor + ", " + menor);
    }
}
