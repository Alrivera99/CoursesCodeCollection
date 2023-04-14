import java.util.Scanner;

public class BuscarNumeroMenor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("A continuación ingrese 10 números enteros. Luego se mostrará el menor de ellos ");
        int cantidadNumeros = 10;

        int menorNumero = Integer.MAX_VALUE;

        for (int i = 1; i <= cantidadNumeros; i++) {
            System.out.print("Ingrese el número #" + i + ": ");
            int numero = scanner.nextInt();

            if (numero < menorNumero) {
                menorNumero = numero;
            }
        }

        scanner.close();

        System.out.println("El número menor es: " + menorNumero);
        if (menorNumero < 10) {
            System.out.println("El número menor es menor que 10!");
        } else {
            System.out.println("El número menor es igual o mayor que 10!");
        }
    }
}
