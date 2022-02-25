<template>
  <div id="about" class="about">
    <section class="resume">
      <div class="resume-header">
        <p>
          Titulaire d'une licence en informatique et d'un diplome dans le
          support informatique, je me suis spécialisé dans le développement
          Front-end.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        ipsum exercitationem nobis magnam similique eveniet? At rerum dicta quo.
        A nemo quod sit harum placeat laborum repellendus quas aliquid natus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas
        repellat, sit sunt neque natus iure mollitia culpa quis dolore, non,
        dignissimos magnam eligendi. Rerum quod tenetur, vitae consequuntur,
        temporibus in placeat maiores, voluptatibus voluptate quos adipisci.
        Rerum, nulla debitis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione a qui
        sapiente hic quam temporibus facere cumque aut minima esse, odio
        consequuntur et nobis non ut impedit cupiditate praesentium recusandae.
      </p>
    </section>
    <section id="expertise" class="expertise">
      <div class="expertise-header">
        <h2>Expertise</h2>
      </div>
      <div class="expertise-list">
        <ul>
          <li>Création de sites internet</li>
          <li>Gestion de sites internet</li>
          <li>Wordpress</li>
          <li>Intégration Html Css</li>
          <li>Refonte de sites internet</li>
          <li>UX/UI</li>
          <li>Optimisation de sites</li>
          <li>Maintenance de sites internet</li>

          <li>Rédation de contenu web</li>
          <li>Support informatique</li>
          <li>Administration réseau</li>
          <li>Javascript</li>
          <li>VueJs</li>
          <li>Php</li>
          <li>BDD / Mysql</li>
          <li>Multimédias</li>
          <li>Figma / Photoshop</li>
          <li>Création de template</li>
        </ul>
      </div>
    </section>
    <section id="contact" class="contact">
      <p>
        Vous avez une demande , n'hésitez pas à m'écrire
        <span>arnaud.outtier@protonmail.com</span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
.about {
  margin-bottom: 12.8rem;
  text-align: justify;
  font-size: 1.6rem;
}

.resume,
.expertise,
.contact {
  margin-bottom: 10rem;
}

.expertise,
.contact {
  &:before {
    content: "";
    border-top: 2px solid;
    border-color: inherit;
    width: 50px;
    display: block;
    margin-bottom: 6rem;
  }
}

.resume-header,
.expertise-header {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 6.4rem 0;
}

@media (min-width: 576px) {
  .expertise-list {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
    }
  }
}

@media (min-width: 992px) {
  .resume {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }

  .resume-header {
    margin: 0;
    grid-column: 1/2;
    width: 300px;
  }
}

// Expertise
.expertise {
  li {
    &:before {
      content: "–";
      margin-right: 0.8rem;
    }
  }
}

// Contact
.contact {
  p {
    display: inline;
  }
  span {
    position: relative;

    &:after {
      content: "";
      border-bottom: 2px solid;
      border-color: inherit;
      position: absolute;
      left: 0;
      bottom: -4px;
      right: 0;
    }
  }
}

// GRID VERSION

.site {
  &.activegrid {
    .about {
      padding: 10rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      column-gap: 8rem;

      .resume {
        display: block;
      }

      .expertise {
        &::before {
          display: none;
        }

        .resume-header,
        .expertise-header {
          margin: 0 0 4rem 0 ;
        }
      }

      .resume-header {
        width: 100%;
      }
    }
  }
}
</style>
