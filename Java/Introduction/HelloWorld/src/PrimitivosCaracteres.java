public class PrimitivosCaracteres {

    public static void main(String[] args) {
        char caracter = '\u0040';
        char decimal = 64;
        System.out.println("caracter = " + caracter);
        System.out.println("decimal = " + decimal);
        System.out.println("decimal = caracter " + (decimal == caracter));

        char simbolo = '@';
        System.out.println("simbolo = " + simbolo);
        System.out.println("simbolo = caracter " + (simbolo == caracter));

        char espacio = '\u0020';

        System.out.println("Character corresponde en byte  " + espacio + Character.BYTES);
        System.out.println("Character corresponde en bites " + Character.SIZE);
        System.out.println("Character.MIN_VALUE" + Character.MIN_VALUE);
        System.out.println("Character.MAX_VALUE" + Character.MAX_VALUE);
    }
}
