class Alumno {
    // Constructor de la clase
    constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;
      this.nota4 = nota4;
    }
  
    // Método para calcular el promedio
    promedio() {
      return (
        this.nota1 * 0.15 +
        this.nota2 * 0.20 +
        this.nota3 * 0.25 +
        this.nota4 * 0.40
      );
    }
  
    // Método para determinar la condición del alumno
    condicion() {
      if (this.promedio() >= 12) {
        return 'Estas Aprobado';
      } else {
        return 'Estas Desaprobado';
      }
    }
  
    // Método para obtener el obsequio del alumno (si corresponde)
    obsequio() {
      if (this.promedio() > 17) {
        return 'Obtuviste una Mochila gratis';
      } else {
        return 'Comprate una mochila';
      }
    }
  }

let registro = new Alumno(2,"Emerson",18,18,18,18);
// console.log(registro);
console.log(registro.promedio())
console.log(registro.condicion())
console.log(registro.obsequio())