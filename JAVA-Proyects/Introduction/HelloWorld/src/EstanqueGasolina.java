import java.util.Scanner;

public class EstanqueGasolina {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese la cantidad de litros de gasolina que desea cargar: ");
        double litros = scanner.nextDouble();
        
        if (litros == 70) {
            System.out.println("El estanque está lleno");
        } else if (litros >= 60 && litros <= 70){
            System.out.println("Estanque casi lleno");
        } else if (litros >= 40 && litros <= 60){
            System.out.println("Estanque 3/4");
        } else if (litros >= 35 && litros <= 40){
            System.out.println("Medio estanque");
        } else if (litros >= 20 && litros <= 35){
            System.out.println("Suficiente");
        } else if (litros >= 1 && litros <= 20){
            System.out.println("Insuficiente");
        }
    }
}
