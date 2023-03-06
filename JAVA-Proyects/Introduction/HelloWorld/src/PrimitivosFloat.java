public class PrimitivosFloat {


    public static void main(String[] args) {

        float realFloat = 3.4028235E38F;
        System.out.println("realFloat = " + realFloat);
        System.out.println("Tipo float corresponde en byte a " + Float.BYTES);
        System.out.println("Tipo float corresponde en bites a " + Float.SIZE);
        System.out.println("Valor minimo tipo float " + Float.MIN_VALUE);
        System.out.println("Valor maximo tipo float " + Float.MAX_VALUE);

        double realDouble = 1.7976931348623157E308;
        System.out.println("realDouble = " + realDouble);

        System.out.println("Tipo double corresponde en byte a " + Double.BYTES);
        System.out.println("Tipo double corresponde en bites a " + Double.SIZE);
        System.out.println("Valor minimo tipo double " + Double.MIN_VALUE);
        System.out.println("Valor maximo tipo double " + Double.MAX_VALUE);

        float varFlotante = 3.4028235E38F;


        System.out.println("varFlotante = " + varFlotante);
    }
}
