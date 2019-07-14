<template>
  <div class="home-page">
    <section class="bg-white med logo-strip text-center flexible-content-section-6">
      <div class="row gallery-grid small-up-3 medium-up-5">
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170213180443/walmart1.png" alt="Neo4j Customer: Walmart" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180709153402/adobe.png" alt="Adobe logo" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170214162900/ebay-2017.png" alt="Neo4j Customer: eBay" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170710152815/icij1.png" alt="Neo4j Customer: ICIJ" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170216210245/ubs1.png" alt="Neo4j Customer: UBS" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180315075719/ibm_300x200.png" alt="Neo4j Customer: IBM" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170628142302/microsoft.png" alt="Neo4j Customer: Microsoft" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180315101243/die_bayerische1.png" alt="Neo4j Customer: die Bayerische" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170215151513/century-link.png" alt="Neo4j Customer: CenturyLink" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180315095516/AstraZeneca_300x200.png" alt="Neo4j Customer: AstraZeneca" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180409080348/Novo_Nordisk.png" alt="" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170215162426/hp1.png" alt="Neo4j Customer: HP" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170630125637/monsanto.jpg" alt="" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180315095515/volvo.png" alt="Neo4j Customer: Volvo" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170215151517/cisco2.png" alt="Neo4j Customer: Cisco" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170216204357/telenor1.png" alt="Neo4j Customer: Telenor" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170627161134/pitney_w.jpg" alt="Neo4j Customer: Pitney Bowes" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20170215205148/zenoss.png" alt="Neo4j Customer: Zenoss" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20180315095514/telia.png" alt="Neo4j Customer: Telia" />
          </div>
        </div>
        <div class="column column-block gallery-grid__item">
          <div class="img_wrap">
            <img src="https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/20181031120826/admin-ajax-e1541013024306.png" alt="Neo4j Customer: Linkedin" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <a href="/customers/?ref=home" class="button button-default feature-box_button logo-strip_link">See our customers</a>
        </div>
      </div>
    </section>


  </div>
</template>

<script>


export default {
  layout: 'main',
  components: {

  },
  mounted() {
    let jquery = document.createElement('script')
    jquery.setAttribute('src', 'jquery-3.3.1.js')
    document.head.appendChild(jquery);

    let distJS = document.createElement('script')
    distJS.setAttribute('src', 'dist.js')
    document.head.appendChild(distJS)
  },
}
</script>

<style>

</style>
