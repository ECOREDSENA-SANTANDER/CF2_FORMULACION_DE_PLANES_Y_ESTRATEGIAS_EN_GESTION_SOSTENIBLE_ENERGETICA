<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente permitió comprender los fundamentos de la gestión sostenible energética, estableciendo un marco conceptual que integra las dimensiones ambiental, social y económica de la sostenibilidad. Se introdujeron conceptos esenciales como la Huella Ecológica, que evalúa la presión humana sobre los recursos del planeta, y la Economía Circular, orientada a reducir residuos y mantener los materiales en uso de manera eficiente.
    p También se analizó el ciclo de vida de los procesos energéticos a través de cinco etapas clave: extracción de materias primas, procesamiento, transporte, generación o combustión y disposición final. Esta estructura permitió identificar los principales impactos ambientales asociados a cada fase, como la deforestación, la contaminación del agua y del suelo, las emisiones de GEI y la generación de residuos, ofreciendo una visión integral para la toma de decisiones sostenibles.


    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se presentan etapas del análisis de viabilidad, eficiencia y evaluación de impactos en procesos energéticos, con recuadros y flechas que describen aspectos como eficiencia energética, viabilidad económica, reducción de GEI, energías renovables, evaluación del ciclo de vida y participación comunitaria.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
