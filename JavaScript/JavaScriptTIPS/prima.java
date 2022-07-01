public static void main(String[] args) {
        // TODO code application logic here
        Scanner input = new Scanner(System.in);
        
        int  mod, bil, faktor=0;
        
        System.out.println("Program Menentukan Bilangan Prima");
        System.out.println("Silah Masukkan Angka :");
        bil = input.nextInt();
        System.out.println("---------------------------------");

        //Logic :
        for (int i=1; i<=bil; i++){
            mod = bil%i;
            if(mod == 0){
                faktor += 1;
            }
        }
        if(faktor == 2){
            System.out.println(bil + " Bilangan prima");
        } else {
            System.out.println(bil + " Bukan bilangan prima");
        }
    }