function consultar() {
let menuPrincipal;
    do{
      menuPrincipal = prompt ('¡Hola! Bienvenido a MiBancoBot, el centro de consultas de MiBanco. \n ¿Qué desea consultar? \n 1. ¿Qué es una caja de ahorro? \n 2. ¿Cómo pedir tarjeta de débito o de crédito? \n 3. ¿Cuánto dinero puedo retirar en efectivo? \n 4. ¿Puedo usar las tarjetas de MiBanco en el exterior? \n 5. ¿Cómo pedir un préstamo? \n Escriba "salir" para terminar la consulta').toLocaleLowerCase();
      if (menuPrincipal == 1 || menuPrincipal == 2 || menuPrincipal == 3 || menuPrincipal == 4 || menuPrincipal == 5|| menuPrincipal == 'salir'){ 
            switch (menuPrincipal) {
             case '1':
               alert('Una caja de ahorro es una cuenta bancaria que permite guardar y administrar dinero, ya sea para ahorro u otras transacciones bancarias. En MiBanco, la apertura de una caja de ahorro es gratuita.');
               break;	
             case '2':
               alert('La tarjetas se tramitan por la App de MiBanco. La de débito la puede pedir de forma gratuita. La tarjeta de crédito también es gratuita siempre y cuando deposite su sueldo en MiBanco, sino tiene un costo de mantenimiento de $2.000 (se actualiza por ipc).');
               break;
             case '3':
               alert('Los usuarios de MiBanco pueden retirar hasta $100.000 por cajero automático y $1.000.000 por caja.');
               break;
             case '4':
               alert('Sí, tiene cobertura en cualquier parte del mundo. (Se aplicaran impuestos al dólar.)');
               break;
             case '5':
               alert('Puede pedir préstamos facilmente desde la App de MiBanco. Evaluaremos su situación y le haremos saber si aplica en las próximas 48 horas.');
               break;
             case 'salir':
               alert('¡Hasta luego!')
               break;  
                             }
      } else{
       alert('Ingrese una opción válida')
      } 
    }while (menuPrincipal != 'salir')
   }