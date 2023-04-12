public class EjemploStringMetodos {
    public static void main(String[] args) {

        String nombre = "Alejandro";
        System.out.println("nombre = " + nombre.length());
        System.out.println("nombre = " + nombre.toUpperCase());
        System.out.println("nombre = " + nombre.toLowerCase());
        System.out.println("nombre = " + nombre.equals("Alejandro"));
        System.out.println("nombre = " + nombre.equalsIgnoreCase("alejandro"));
        System.out.println("nombre = " + nombre.charAt(0));
        System.out.println("nombre = " + nombre.charAt(4));
        System.out.println("nombre = " + nombre.concat(" Rivera"));
        System.out.println("nombre = " + nombre.startsWith("Ale"));
        System.out.println("nombre = " + nombre.endsWith("dro"));
        System.out.println("nombre = " + nombre.indexOf("n"));
        System.out.println("nombre = " + nombre.lastIndexOf("n"));
        System.out.println("nombre = " + nombre.compareTo("Alejandro"));
        System.out.println("nombre.substring(1) = " + nombre.substring(1));
        System.out.println("nombre.substring(1, 4) = " + nombre.substring(1, 4));
        System.out.println("nombre.substring(4, 6) = " + nombre.substring(4, 6));

        String trabalenguas = "trabalenguas";
        System.out.println("trabalenguas.replace() = " + trabalenguas.replace("a", "e"));
        System.out.println("trabalenguas.lastIndexOf() = " + trabalenguas.lastIndexOf("a"));
    }
}
