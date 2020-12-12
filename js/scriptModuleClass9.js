export class Pelicula{
    constructor({id, titulo, director, anioEstreno, pais, genero, calificacion}){
        this.id = id,
        this.titulo = titulo,
        this.director = director,
        this.anioEstreno = anioEstreno,
        this.pais = pais,
        this.genero = genero,
        this.calificacion = calificacion,
        this.validarReg('id', id, /^[a-zA-Z]{2}[\d]{7}$/, 'id invalido', 'string'),
        this.validarCadena('titulo', titulo, 'string', 100),
        this.validarCadena('director', director, 'string', 50),
        this.validarReg('anioEstreno', anioEstreno, /^[\d]+$/, 'Numero invalido', 'number', 4),
        this.validarCadena('pais', pais, Array),
        this.validarCadena('genero', genero, Array, undefined, Pelicula.listaGenero),
        this.validarReg('calificacion', calificacion, /^\d+\.?\d{1}$/, 'calificacion invalida', 'number', 4)
    }

    static get listaGenero(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama",
        "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV",
        "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    fichaTecnica(){
        return console.log({
            "id": this.id,
            "titulo": this.titulo,
            "director": this.director,
            "anioEstreno": this.anioEstreno,
            "pais": this.pais,
            "genero": this.genero,
            "calificacion": this.calificacion
        })
    }

    validarCadena(propiedad , valor, tipoDato, longitud, validarArray = undefined){
        if(!valor){
            throw new Error(`no existe el valor, ${propiedad}`);
        }else{
            if(typeof valor === 'object'){
                if(!(valor instanceof tipoDato)){
                    throw new Error(`El valor no es un ${tipoDato}, ${propiedad}`);
                }if(tipoDato === Array){
                    this.validarArray(valor, 'string', validarArray);
                }
            }else if(typeof valor !== tipoDato){
                throw new Error(`El valor no es un ${tipoDato}, ${propiedad}`);
            }
        }
        if(valor.toString().length < 1 || valor.toString().length > longitud){
            throw new Error(`El dato tiene que tener al menos 1 valor o ser menor de ${longitud} caracteres, ${propiedad}`);
        }
    }

    validarReg(indicativo, valor, regexp, mensajeError, tipoDato, longitud){
        try {
            longitud = (!longitud) ? valor.length : longitud;
            if(this.validarCadena(indicativo, valor, tipoDato, longitud)){
                if(RegExp(regexp, 'g').test(valor)){
                    return true
                }else throw new Error(mensajeError)
            }
        } catch (errno) {
            console.error(errno);
        }
    }

    validarArray(arr, tipoDato, validar){
        for(const item of arr){
            if(typeof item !== tipoDato) throw new Error(`El tipo de dato que contiene el array es invalido, dato esperado ${tipoDato}`);
            if(validar){
                if(validar.includes(item) === false) throw new Error(`No se consiguen los siguientes items validos ${validar} en su lista ${arr}`);
            }
        }
    }
}
