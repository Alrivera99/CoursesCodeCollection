public class EjemploStringExtensionArchivo {
    public static void main(String[] args) {
        String archivo = "alguna_cosa.txt";
        System.out.println("archivo = " + archivo.length());
        System.out.println("archivo.substring() = " + archivo.substring(archivo.lastIndexOf(".") + 1));
    }
}
