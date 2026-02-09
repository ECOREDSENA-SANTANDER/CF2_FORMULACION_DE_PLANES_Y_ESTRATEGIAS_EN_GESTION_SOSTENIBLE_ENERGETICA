<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos y diagnóstico de la eficiencia energética
      
      .bg-color-1.p-4.mb-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/1.svg', alt='')
          .col-sm-12.col-lg-11
              p.mb-0 El estudio de los fundamentos y el diagnóstico de la eficiencia energética permite comprender cómo se utiliza la energía en los diferentes procesos y qué factores determinan su rendimiento. Este apartado brinda al aprendiz las bases necesarias para analizar el consumo, identificar ineficiencias y reconocer oportunidades de mejora que contribuyan a una gestión energética más responsable y sostenible.
      
      .bg-color-2.p-0.mb-3
        .row.justify-content-center.mb-5.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/2.png', alt='')
          .col-sm-12.col-lg-7.py-3.px-5
              .bg-color-3.mb-4.px-3.py-2.w-cus-1
                h4.mb-0.text-white Principios de la eficiencia energética y su diferencia con el ahorro
              p.mb-3 Para orientar correctamente las decisiones del profesional, es indispensable diferenciar #[b eficiencia energética] de #[b ahorro].
              p.mb-3 La eficiencia energética consiste en obtener el mismo nivel de servicio (iluminar un área, mover un motor, climatizar un espacio) utilizando menos energía. Esto se logra mediante tecnologías más avanzadas o mediante la optimización de procesos, sin afectar la productividad ni el confort. En cambio, el ahorro se basa en reducir o limitar el uso del servicio, por ejemplo, apagar equipos antes de tiempo o disminuir la producción. Aunque reduce el consumo, puede afectar negativamente la operación.
              p.mb-0 Por esta razón, un #[b Plan de Gestión Sostenible Energética (PGSE)] siempre prioriza la eficiencia sobre el ahorro, ya que promueve mejoras sostenibles sin sacrificar el desempeño.





      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Características técnicas de las estrategias de eficiencia (motores de alta eficiencia, variadores de velocidad, iluminación LED y gestión térmica)

      p.mb-5 El aprendiz debe conocer las tecnologías clave que permiten implementar medidas de eficiencia energética. Estas son:
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/3.png', alt='')
        .col-sm-12.col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-verde")
            .row.justify-content-center.align-items-center.mb-0(titulo="Motores de alta eficiencia (IE3 / IE4)")
              .col-12
                p.mb-0 Operan con menores pérdidas de energía por calor y fricción, lo que se traduce en un menor consumo eléctrico para entregar la misma potencia. Son una de las estrategias más efectivas para reducir impactos ambientales y mejorar la viabilidad económica.

            .row.justify-content-center.align-items-center.mb-0(titulo="Variadores de velocidad (VSD / VFD)")
              .col-12
                p.mb-0 Controlan la velocidad del motor ajustando la frecuencia y el voltaje según la carga requerida. Esto evita que el motor opere siempre al máximo, lo cual reduce significativamente el consumo en bombas, ventiladores y compresores.

            .row.justify-content-center.align-items-center.mb-0(titulo="Iluminación LED de alto desempeño")
              .col-12
                p.mb-0 Ofrece un mayor flujo luminoso por vatio y una vida útil superior respecto a otras tecnologías, lo que se traduce en menores consumos eléctricos y menor generación de residuos. Es una medida simple, económica y de alto impacto.

            .row.justify-content-center.align-items-center.mb-0(titulo="Gestión térmica y sistemas HVAC")
              .col-12
                p.mb-0 Incluye estrategias como aislamientos térmicos, recuperación de calor, mantenimiento adecuado y control automatizado. Los sistemas HVAC suelen ser los mayores consumidores de energía en edificios, por lo que su optimización es esencial para mejorar la eficiencia global.
           


      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Metodologías para el diagnóstico y la identificación de puntos críticos de consumo


      p.mb-5 El diagnóstico energético permite determinar dónde se deben aplicar las acciones del PGSE para obtener los mayores beneficios ambientales y económicos. Las principales metodologías son:
      .bg-full-width.bg-fondo-1.mb-0(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-10
              PasosA.color-primario.mb-0(tipo="n")
                .row.justify-content-center.align-items-center.mb-0
                  .col-sm-12.col-lg-9
                    h4 Auditorías energéticas (fase I y fase II)
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 #[b Fase I:] análisis preliminar que identifica oportunidades rápidas basadas en observación y datos generales.
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 #[b Fase II:] auditoría detallada con mediciones en sitio, análisis técnico profundo y evaluación de los equipos para detectar los puntos críticos de consumo.
                  .col-sm-12.col-lg-3.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t1/4.svg', alt='')
                  
                .row.justify-content-center.align-items-center.mb-0
                  .col-sm-12.col-lg-3.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t1/5.svg', alt='')
                  .col-sm-12.col-lg-9
                    h4 Línea base y perfil de carga
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 La línea base es el consumo histórico que sirve como punto de comparación para medir los ahorros futuros.
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 El perfil de carga permite observar cómo varía el consumo en el tiempo (picos, horarios críticos), lo cual facilita identificar patrones de ineficiencia.
                
                .row.justify-content-center.align-items-center.mb-0
                  .col-sm-12.col-lg-9
                    h4 Instrumentos de medición
                    p.mb-2 Para un diagnóstico confiable se emplean herramientas como:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 Analizadores de redes eléctricas.
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 Termómetros infrarrojos para detectar pérdidas térmicas.
                      li.d-flex
                        i.fas.fa-circle-check.icon-list
                        p.mb-0 Registradores de datos.
                  .col-sm-12.col-lg-3.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t1/6.svg', alt='')
                  


      p.mb-5 Estos instrumentos permiten obtener información precisa para priorizar acciones y justificar intervenciones.

      Separador
      #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.1. Análisis de viabilidad económica de tecnologías eficientes
    
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/7.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-4 Para implementar una medida de eficiencia energética, no basta con que la solución sea técnicamente adecuada: también debe demostrar que es financieramente conveniente. En este apartado se presentan las herramientas básicas para evaluar si una tecnología eficiente resulta rentable y si su adopción aporta beneficios económicos al Plan de Gestión Sostenible Energética (PGSE).
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img.w-75(src='@/assets/curso/temas/t1/8.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 A lo largo del tema, el aprendiz conocerá los principales indicadores financieros utilizados para analizar inversiones en eficiencia energética y fundamentar decisiones.
 


      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Indicadores financieros aplicados a proyectos de eficiencia

      p.mb-5 Estos indicadores permiten estimar el comportamiento económico de una inversión y compararla con otras alternativas disponibles:

      .row.justify-content-center.mb-5
        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-3
                  img(src='@/assets/curso/temas/t1/9.svg')
            .tarjeta--boton--titulo.mb-4.px-3.py-2.w-cus-1
                h4.mb-0 Periodo de recuperación de la inversión (#[i payback simple])
            p.text-center.mb-0 Indica el tiempo necesario para que el ahorro generado por la medida de eficiencia iguale el costo total de la inversión. Es un indicador sencillo, útil para valorar qué tan rápido se recupera el capital y el nivel de riesgo asociado. Entre menor sea el payback, más atractiva suele ser la medida.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-3
                  img(src='@/assets/curso/temas/t1/10.svg')
            .tarjeta--boton--titulo.mb-4.px-3.py-2.w-cus-1.m-auto
                h4.mb-0 Valor Presente Neto (VPN o VAN)
            p.text-center.mb-0 Calcula la rentabilidad del proyecto llevando los ahorros futuros a su valor actual mediante una tasa de descuento. Un VPN positivo significa que la inversión recupera su costo y, además, genera un beneficio económico adicional. Es especialmente útil para proyectos de largo plazo.

        .col-sm-12.col-md-6.col-lg-4.mb-cus
          .tarjeta--boton.color-secundario.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-3
                  img(src='@/assets/curso/temas/t1/11.svg')
            .tarjeta--boton--titulo.mb-4.px-3.py-2.w-cus-1.m-auto
                h4.mb-0 Tasa Interna de Retorno (TIR)
            p.text-center.mb-0 Representa la rentabilidad porcentual que genera la inversión. Se compara con el costo de capital o la tasa mínima aceptada por la organización. Si la TIR es mayor que estos valores, el proyecto se considera financieramente atractivo, ya que ofrece un retorno superior a otras alternativas.



      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Análisis de la conveniencia económica del uso de tecnologías eficientes


      .bg-color-1.p-4.mb-5
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/12.svg', alt='')
          .col-sm-12.col-lg-11
              p.mb-0 Para determinar si una tecnología eficiente es viable, es necesario comparar su costo de implementación con los ahorros que generará a lo largo del tiempo. Este análisis permite justificar de manera sólida las decisiones del PGSE.


      TabsA.color-secundario.mb-5
        .tarjeta.bg-color-4.p-5(titulo="Identificación de los costos totales")
          p.mb-4 El aprendiz debe reconocer todos los costos involucrados en la inversión:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Iniciales:] compra del equipo, instalación, capacitación, estudios técnicos.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 #[b Operativos:] mantenimiento anual, seguros, suministros asociados. Una correcta identificación evita subestimar la inversión real.

        .tarjeta.bg-color-4.p-5(titulo="Estimación de los ahorros y beneficios")
          p.mb-0 La reducción del consumo energético (expresada en kWh o MWh) y la disminución de costos operativos deben traducirse en #[b ahorros monetarios anuales]. Estos valores se convierten en el flujo de caja positivo del proyecto.
          p.mb-0 La precisión en esta estimación es clave, pues una cifra mal calculada puede alterar completamente la viabilidad económica.


        .tarjeta.bg-color-4.p-5(titulo="Análisis de sensibilidad")
          p.mb-4 Se enseña al aprendiz a evaluar cómo cambia la rentabilidad si varían algunos factores del mercado, como:
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 El precio de la energía.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 La tasa de interés.
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 El costo del equipo.
          p.mb-0 Este análisis permite comprobar si el proyecto sigue siendo rentable incluso bajo escenarios menos favorables, aumentando la solidez de la decisión.

      
      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Herramientas y casos prácticos para la justificación de inversiones

      p.mb-5 Para sustentar adecuadamente una propuesta, el aprendiz debe manejar herramientas de análisis y saber comunicar los resultados de forma clara y convincente.

      TabsC.color-primario
        .py-3.py-md-4(titulo="Modelo de flujo de caja descontado")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/13.svg', alt='')
            .col-sm-12.col-lg-6
                p.mb-3.mt-5 El estudiante aprende a elaborar una tabla donde se proyectan los ahorros y los costos anuales durante la vida útil del proyecto.
                p.mb-0 Este modelo permite calcular indicadores como el Valor Presente Neto (VPN) y la Tasa Interna de Retorno (TIR), esenciales para evaluar si la inversión genera beneficios reales en términos financieros.
        .py-3.py-md-4(titulo="Presentación ejecutiva del caso de negocio (doble dividendo)")
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/14.svg', alt='')
            .col-sm-12.col-lg-6
                p.mb-3.mt-5 La justificación debe ser clara, breve y orientada a la toma de decisiones. Para ello, el aprendiz presenta:
                ul.lista-ul--color.mb-4
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 El periodo de recuperación de la inversión.
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 Los resultados de VPN y TIR.
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 La reducción estimada de emisiones de GEI.
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 La contribución a la reducción del déficit ecológico.
                p.mb-0 Este enfoque integra los beneficios #[b económicos y ambientales], mostrando que la medida eficiente es rentable y contribuye a la sostenibilidad.


















      Separador
      #t_1_2.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.2.Cuantificación de impactos y reducción de GEI
      
      
      .bg-color-1.p-4.mb-5
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/15.svg', alt='')
          .col-sm-12.col-lg-11
              p.mb-0 Este tema integra el desempeño técnico de la eficiencia energética con los resultados ambientales que genera, cumpliendo con el propósito de definir impactos ambientales con base en los recursos naturales.

      p.mb-5 El objetivo es que el profesional comprenda no solo cuánto se ahorra, sino cómo ese ahorro se traduce en beneficios ambientales reales y medibles.


      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Metodología para la cuantificación de variables de eficiencia (kWh, agua, suelo, etc.)

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
            p.mb-5 En este apartado se explica cómo transformar el ahorro energético y operativo en #[b variables ambientales cuantificables], lo cual permite valorar el impacto positivo del proyecto en la conservación de recursos naturales.
            .bg-color-7.p-0.mb-0
                .row.justify-content-center.mb-5.align-items-center
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t1/17.svg', alt='')
                  .col-sm-12.col-lg-7.p-5
                      .bg-color-6.mb-5.px-3.py-2.w-cus-1
                        h4.mb-0 Ahorro de energía primaria
                      p.mb-0 Se enseña a calcular el ahorro total de energía eléctrica (kWh o MWh) y térmica generado por la medida implementada.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/16.png', alt='')

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.bg-color-2.p-4
            p.mb-4.mt-4 Este dato es fundamental porque permite determinar:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 Cuánta energía dejó de demandarse del sistema eléctrico o térmico.
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0 Cuántos combustibles fósiles se evitaron en la generación.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/18.svg', alt='')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img.w-cus-2.mb-5(src='@/assets/curso/temas/t1/19.svg', alt='')
          p.mb-3.fw-bold Ejemplo:
          p.mb-0 Un proyecto que ahorra 12.000 kWh / año evita que se quemen X litros de diésel o Y toneladas de carbón, según la matriz energética local.


      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Ahorro en recursos críticos (agua, suelo, materias primas)

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/20.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-3 La eficiencia energética genera reducciones indirectas en otros recursos naturales. Se enseña a cuantificarlas, por ejemplo:
          .bg-color-1.p-4.mb-3
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 #[b Agua (m³):] volumen que se deja de usar en procesos de enfriamiento o generación.
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 #[b Suelo (m² o ha):] superficie que deja de requerirse para minería o extracción.
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0 #[b Recursos biofísicos:] biomasa, combustibles o materiales necesarios para producir la energía ahorrada.
          p.mb-0 Esto permite una comprensión más amplia del impacto ambiental del proyecto.


      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2  Uso de factores de conversión


      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t1/22.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Para asegurar resultados precisos, se emplean factores de conversión oficiales que permiten traducir el ahorro energético a unidades ambientales comparables, como:
          .bg-color-4.p-4.mb-3
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 Energía primaria.
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 Consumo de agua por tipo de generación.
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0 Uso de suelo y recursos asociados.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/21.png', alt='')





      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Evaluación de la reducción de emisiones de GEI y la huella de carbono

      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-9
            p.mb-5 Este punto desarrolla la capacidad de #[b cuantificar la mitigación climática] derivada de la eficiencia energética. La reducción de GEI es la métrica central para evaluar el aporte frente al cambio climático.
            .bg-color-7.p-0.mb-0
                .row.justify-content-center.mb-5.align-items-center
                  .col-sm-12.col-lg-5.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t1/24.svg', alt='')
                  .col-sm-12.col-lg-7.p-5
                      .bg-color-6.mb-4.px-3.py-2.w-cus-1
                        h4.mb-0 Cálculo de la reducción de CO₂
                      p.mb-3 Se aplica la fórmula base:
                      p.mb-0 Reducción de GEI (tCO₂) = ahorro de energía × factor de emisión. Esto permite identificar el beneficio climático directo del proyecto.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/23.png', alt='')


      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.bg-color-2.p-4
            .bg-color-6.mb-3.px-3.py-2.w-cus-1
              h4.mb-0 Contribución a la huella de carbono
            p.mb-3 El CO₂ evitado reduce proporcionalmente la huella de carbono de la organización. El profesional aprende a:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 Reportar reducciones anuales.
              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 Vincular resultados con metas nacionales e internacionales.
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0 Incorporar esta información en reportes de sostenibilidad.


        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/25.svg', alt='')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img.w-cus-2.mb-3(src='@/assets/curso/temas/t1/19.svg', alt='')
          p.mb-1.fw-bold Impacto en la calidad del aire

          p.mb-3 Además del CO₂, la eficiencia energética disminuye contaminantes como:
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0.fw-bold NOx.
            li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0.fw-bold SOx.
            li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0.fw-bold Material particulado (MP).



      .bg-color-1.p-4.mb-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/26.svg', alt='')
          .col-sm-12.col-lg-11
              p.mb-0 Estos contaminantes afectan directamente la salud pública y la calidad del recurso Aire. Se enseña a cuantificar su reducción usando factores específicos según la fuente de generación.


      .row.align-items-center.mb-5.titulo-icono-2
        .col-auto.titulo-icono-2-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2 Relación directa entre ahorro energético y mitigación de impactos sobre los recursos naturales

      p.mb-5 Este numeral integra todos los resultados, demostrando el encadenamiento causa – efecto entre eficiencia energética y sostenibilidad ambiental.

      .bg-color-2.p-0.mb-3
        .row.justify-content-center.mb-5.align-items-center
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/2.png', alt='')
          .col-sm-12.col-lg-7.py-3.px-5
              .bg-color-3.mb-4.px-3.py-2.w-cus-1
                h4.mb-0.text-white Relación con el Análisis de Ciclo de Vida (ACV)
              p.mb-3 Se enseña a vincular el ahorro energético con impactos evitados en etapas como extracción, transporte y uso de recursos.
              p.mb-3.fw-bold Ejemplo:
              p.mb-0 “El ahorro de X kWh/año reduce la extracción de Y toneladas de carbón, mitigando la presión sobre el recurso Suelo y disminuyendo los efectos sobre ecosistemas cercanos.”


      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.bg-color-2.p-4
            .bg-color-6.mb-3.px-3.py-2.w-cus-1
              h4.mb-0 Reducción del déficit ecológico
            p.mb-3 Los ahorros cuantificados en energía, agua y suelo contribuyen a disminuir el déficit ecológico del territorio.
            p.mb-0 Esto fortalece la justificación ambiental, mostrando que el proyecto avanza hacia un uso más equilibrado de los recursos naturales.
          
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/28.svg', alt='')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          p.mb-3.fw-bold  Base para el monitoreo y control ambiental
          p.mb-4 La metodología de cuantificación desarrollada aquí se convierte en la base para:
          .bg-color-4.mb-0.p-4
            ul.lista-ul--color.mb-0
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0 Indicadores de desempeño ambiental.
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0  Sistemas de monitoreo continuo.
              li.d-flex.mb-0
                i.fas.fa-check-circle.icon-list
                p.mb-0  Reportes de avance y seguimiento del proyecto.






      Separador
      #t_1_3.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.3. Principios y tipologías de energías renovables
      
      
      Separador
      #t_1_4.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.4. Evaluación crítica del ciclo de vida en la generación renovable
      
      
      Separador
      #t_1_5.titulo-segundo.color-primario(data-aos='fade-right')
        h2 1.5. Justificación de estrategias de economía circular para componentes de generación renovable

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
