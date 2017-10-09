function romper()
{
    var morbo = [
        "Hola",
        1,
        Math.PI,
        'Mundo',
        true
        ];

        console.log(morbo[4]);

       alert(typeof(morbo[4]));
}

function destruir()
{
    var literal = .1E-13;

    Persona = {nombre : "Arnulfo", edad: 101};

    console.log(Persona);

    alert(Persona);
}

function romper2 ()
{
    var inventario = [
        {nombre: 'manzanas', cantidad: 2},
        {nombre: 'bananas', cantidad: 0},
        {nombre: 'cerezas', cantidad: 5}
    ];
    /*
        JSON
        llave : valor

        inventario : [
            {nombre: 'manzanas', cantidad: 2},
            {nombre: 'bananas', cantidad: 0},
            {nombre: 'cerezas', cantidad: 5}
        ]
        inventario :
        {
            fruta[
                {nombre: 'manzanas', cantidad: 2},
                {nombre: 'bananas', cantidad: 0},
                {nombre: 'cerezas', cantidad: 5}
            ]
        }
        inventario.fruta[1].nombre;


     */


    function encontrarCerezas(fruta) { 
        return fruta.nombre === 'cerezas';
    }

    function encontrarCerezas2(fruta) { 
        return fruta.nombre === 'cerezas';
    }
    
    console.log(inventario.find(encontrarCerezas2("cerezas"))); // { nombre: 'cerezas', cantidad: 5 }
}