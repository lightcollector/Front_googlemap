##  Ejercico de Frontend 

Por Alex Piñeiro

## Pregunta teórica


Para fijar un punto de partida, comparto mi comprensión del modelo, aprovechando para hacer una analogía con algún servicio, como Netflix por ejemplo, que después me ayudará a expresar mi respuesta:

- Un usuario podrá pedir uno o multiples servicios, por ejemplo, dos “perfiles” viendo contenido al mismo tiempo.

- Estos servios son obligatoriamente, o streaming o descarga. Cada servicio provee al espectador de un solo contenido multimedia a la vez, el cual puede ser o no, premium.

***

### EJ 1 - Pregunta 1 (parte 1)

A nivel estrictamente técnico, esta función no realizará nunca su cometido debido a las comparaciones que hace en los condicionales. 

En el primer condicional desea saber si el servicio es de **clase** `StreamingService` o **clase** `DownloadService`, y para ello utiliza el operador `typeof` que compara tipos de datos. La operación `typeof` service devolverá un `object`, que siempre resultara falso en las comparaciones que se muestran. Lo mismo para el `typeof` `multmediaContent`.

Si deseásemos que este método funcionase como debe, sería más apropiado utilizar `instanceof`. 
`if (service instanceof StreamingService)` devolvería true, si realmente fuese esa clase.


También la función presupone que no se dará el caso en el que exista un `Service` sin un `MultimediaContent`, lo que podría dar un error bastante fatal al hacer `getMultimediaContent()`. Sería conveniente comprobar que no tenemos `null` o `undefined` a la hora de entrar en los condicionales. 
Lo propondré en el punto 2.

***

### EJ 1 - Pregunta 1 (parte 2)

Analizando el modelo y con intención de proponer alguna mejora, a mi parecer en este planteamiento inicial no tiene sentido la existencia de las clases `StreamingService` y `DownloadService`.

Toda la información del precio lo tiene el propio `MultimediaContent`, y las clases solo se están utilizando para elegir qué precio usar. En este caso con una variable a modo *flag* (`int`, `bool` o `string`) dentro de Service sería suficiente para los condicionales.

Sin embargo, **si** tiene sentido a nivel de escalabilidad, y en términos de POO mantener estas clases para futuras ofertas. Por ejemplo, diferenciar entre un streaming FullHD y unoo 4K; o ofrecer una “premiere” dónde por un mayor precio puedes ver un contenido antes de su release oficial…
Pero para este caso, creo que el peso del precio debe estar en el tipo de servicio, y no en el contenido.

Mi propuesta sería que los `MultimediaContent` tuviesen solo un precio base, y que en función del tipo de servicio de streaming o de descarga, éstos tengan un precio “on-top” del film, o quizás un coeficiente (ejemplo: streaming FHD = precioBase *1,2 // streaming 4K = precioBase *1,6). Mantenemos la clase de contenido premium, pues en un futuro puede interesar extenderla. 

Esto permite modificar los tipos de servicio, sin tener que añadir a cada contenido multimedia un valor más por cada escalada. 
Habría que ver si para el producto final tiene sentido todo lo que digo, pero es mi propuesta.

***

### EJ 1 - Pregunta 2

Tomando en cuenta todo lo expresado hasta ahora para “mejorar” la función de `getTotal()`, resumo los puntos clave:

+ Se quedan las clases `StreamingService` y `DownloadService`. 
Para simplificar el ejemplo, supondremos que solo van a tener un coeficiente de precio sobre el valor de la película.

+ MultimediaContent solo tiene un valor price.

```
getTotal() {
    let total = 0;
    // map function for get all the prices after applying prices modifications regarding on type os service and premiumness
    let allPrices = this.services.map(service => {

        let multimediaContent = service.getMultimediaContent();
        if (multimediaContent != null && multimediaContent != undefined) {
            // service wheter is StreamingService or DownloadService; in both cases we use its coeficient. 
            // we can also check if the movie is Premium and add the additionalFee in affirmative case, or not adding anything at all.
            return service.movieCoef * multimediaContent.price + (multimediaContent instanceof PremiumContent ? multimediaContent.additionalFee : 0);
        }
    });
    // use reduce for iterate along all the prices and sum them all together.
    total = allPrices.reduce((a, b) => a + b, 0);
    return total;
}
```

+ He dejado fuera la opción de tener varias calidades. Si distinguiésemos entre FullHD y 4K, las clases SreamingService y DownloadService tendrían dos variables float, y un flag que indicase el tipo de calidad (`int` o `string`) y realizaríamos la comparación antes del `return service.movieCoef * multimediaCon ...` 

+ Para comprobar que no hay problemas con la extracción del MultimediaContent he colocado un condicional, para no complicarlo mucho, pero lo ideal sería usar un `try…catch` o similar para manejar los errores.