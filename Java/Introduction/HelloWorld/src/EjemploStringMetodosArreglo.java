public class EjemploStringMetodosArreglo {
    public static void main(String[] args) {
        String trabalenguas = "trabalenguas";
        System.out.println("trabalenguas.toCharArray() = " + trabalenguas.toCharArray());

        char[] arreglo = trabalenguas.toCharArray();
        int largo = arreglo.length;
        System.out.println("largo = " + largo);
        for (int i = 0; i < largo; i++) {
            System.out.println("arreglo= " + arreglo[i]);
        }

        System.out.println("trabalenguas.split() = " + trabalenguas.split("a"));

        String[] arreglo2 = trabalenguas.split("a");
        int largo2 = arreglo2.length;
        System.out.println("largo2 = " + largo2);
        for (int i = 0; i < largo2; i++) {
            System.out.println("arreglo2= " + arreglo2[i]);
        }

        String archivo = "alguna.imagen.jpg";
        String[] archivoArr = archivo.split("\\.");
        largo2 = archivoArr.length;
        for (int i = 0; i < largo2; i++) {
            System.out.println("archivoArr= " + archivoArr[i]);
        }
    }
}
