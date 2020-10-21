  function mostrarDatos(){

                function CuentaBancaria(nombreTitular,edadTitular,telefonoTitular,saldoTitular){
                    this.nombre = nombreTitular;
                    this.edad = edadTitular;
                    this.telefono = telefonoTitular;
                    this.saldo = saldoTitular;
                }

                var nomTit = document.getElementById("Nombre").value;
                var edadTit = document.getElementById("Edad").value;
                var telTit = document.getElementById("Telefono").value;
                var saldTit = document.getElementById("Saldo").value;
                
                nuevoTitular = new CuentaBancaria(nomTit, edadTit, telTit, saldTit);

                agregar();
            }

            var arreglo = [];

            function agregar(){
                arreglo.push(nuevoTitular);
                document.getElementById("tabla").innerHTML +=  '<tbody><td>'+nuevoTitular.nombre+'</td><td>'+nuevoTitular.edad+'</td><td>'+nuevoTitular.telefono+'</td><td>'+nuevoTitular.saldo+'</td></tbody>';
                
            };

            function interes(){
                var cuenta = document.getElementById("Saldo").value;
                sueldo= parseInt(cuenta);

                if (cuenta > 0){
                   var interes = sueldo * 0.03;
                   var nvoSdo = sueldo + interes;
                   
                }
                alert("Tu ahorro con el 3% es de: " + nvoSdo);
              
            }