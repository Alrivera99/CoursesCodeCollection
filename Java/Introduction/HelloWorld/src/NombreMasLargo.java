import javax.swing.JOptionPane;

public class NombreMasLargo {
    public static void main(String[] args) {
        // Solicitar el nombre completo de tres personas
        String nombre1 = JOptionPane.showInputDialog(null, "Ingrese el nombre completo de la persona 1:");
        String nombre2 = JOptionPane.showInputDialog(null, "Ingrese el nombre completo de la persona 2:");
        String nombre3 = JOptionPane.showInputDialog(null, "Ingrese el nombre completo de la persona 3:");

        // Obtener la longitud de los nombres
        int longitudNombre1 = nombre1.replaceAll(" ", "").length();
        int longitudNombre2 = nombre2.replaceAll(" ", "").length();
        int longitudNombre3 = nombre3.replaceAll(" ", "").length();

        // Determinar el nombre más largo
        String nombreMasLargo = "";
        if (longitudNombre1 > longitudNombre2 && longitudNombre1 > longitudNombre3) {
            nombreMasLargo = nombre1;
        } else if (longitudNombre2 > longitudNombre1 && longitudNombre2 > longitudNombre3) {
            nombreMasLargo = nombre2;
        } else if (longitudNombre3 > longitudNombre1 && longitudNombre3 > longitudNombre2) {
            nombreMasLargo = nombre3;
        }

        // Mostrar el resultado
        JOptionPane.showMessageDialog(null, nombreMasLargo + " tiene el nombre más largo.");
    }
}
