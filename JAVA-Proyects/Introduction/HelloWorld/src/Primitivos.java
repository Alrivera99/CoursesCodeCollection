public class Primitivos {
    public static void main(String[] args) {
         
        byte numeroByte = 127;
        System.out.println("numeroByte = " + numeroByte);
        System.out.println("Tipo byte corresponde en byte a " + Byte.BYTES);
        System.out.println("Tipo byte corresponde en bites a " + Byte.SIZE);
        System.out.println("Valor minimo tipo byte " + Byte.MIN_VALUE);
        System.out.println("Valor maximo tipo byte " + Byte.MAX_VALUE);

        short numeroShort = 32767;
        System.out.println("numeroShort = " + numeroShort);
        System.out.println("Tipo short corresponde en byte a " + Short.BYTES);
        System.out.println("Tipo short corresponde en bites a " + Short.SIZE);
        System.out.println("Valor minimo tipo short " + Short.MIN_VALUE);
        System.out.println("Valor maximo tipo short " + Short.MAX_VALUE);

        int numeroInt = 2147483647;
        System.out.println("numeroInt = " + numeroInt);
        System.out.println("Tipo int corresponde en byte a " + Integer.BYTES);
        System.out.println("Tipo int corresponde en bites a " + Integer.SIZE);
        System.out.println("Valor minimo tipo int " + Integer.MIN_VALUE);
        System.out.println("Valor maximo tipo int " + Integer.MAX_VALUE);




    }
}
