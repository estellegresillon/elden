import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const NewRestaurants = ({ newRestaurantsContainer }) => (
  <NewRestaurantsWrapper ref={newRestaurantsContainer}>
    <div className="home-new-title">
      <i className="fas fa-rocket" />
      <span className="home-new-title-text">Newcomers @ Elden</span>
      <i className="fas fa-rocket" />
    </div>

    <div className="new-restaurants-container">
      {NEW_RESTAURANTS.map((newRest, i) => (
        <Card key={i} restaurant={newRest} tabIndex={i} />
      ))}
    </div>
  </NewRestaurantsWrapper>
);

export default NewRestaurants;

const NewRestaurantsWrapper = styled.div`
  &.bg-spin-up {
    animation: bgSpinUp 2s ease;
  }

  @keyframes bgSpinUp {
    from {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-5deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  &.bg-spin-down {
    animation: bgSpinDown 2s ease;
  }

  @keyframes bgSpinDown {
    from {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @keyframes slideFromBottomMiddleSection {
    from {
      margin-top: 140px;
      opacity: 0;
    }
    to {
      margin-top: 70px;
      opacity: 1;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20%;
  animation: 1s slideFromBottomMiddleSection;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  background: pink;

  .home-new-title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    color: white;

    i {
      position: relative;
      color: $foodlab;
      animation: 3s rotateSvg infinite;
    }

    .home-weekly-title-text,
    .home-new-title-text {
      margin: 0 20px;
    }
  }

  .new-restaurants-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .new-restaurant {
    margin-top: 20px;
    width: 60%;
    cursor: pointer;
    box-shadow: 2px 2px 12px rgba(214, 31, 31, 0.1);
  }

  .new-restaurant {
    width: 100%;
  }

  .new-restaurant:hover {
    transition: all 0.7s ease;
    box-shadow: 5px 5px 25px rgba(214, 31, 31, 0.2);
  }

  .card {
    position: relative;
    height: 125px;
    display: flex;
    padding: 35px;
    background: white;
    margin-bottom: 30px;
    border-radius: 8px;
    background: #fe765f;
    color: white;
    box-shadow: 5px 5px 20px rgba(255, 122, 146, 0.5);
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 15px 15px 30px rgba(255, 122, 146, 0.9);
    }

    img {
      width: 100%;
      max-width: 200px;
      height: auto;
    }

    img:hover {
      transition: all 0.5s ease;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }

    .badge-wrapper {
      position: absolute;
      top: 42px;
      left: 42px;

      .tooltip-badge {
        display: none;
        top: 0;
        left: 30px;
      }

      &:hover {
        .tooltip-badge {
          display: block;
        }
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;

      .card-header-rate {
        display: flex;
        align-items: center;

        i {
          font-size: 12px;
          margin-right: 5px;
          color: $foodlab;
        }
      }
    }

    .card-description {
      margin-left: 25px;
      width: 100%;
    }

    .card-header-budget {
      font-weight: 300;
      font-size: 13px;
      color: $main;
      margin-top: 10px;
    }

    .card-restaurant-address {
      font-size: 14px;
      margin-bottom: 25px;
    }

    .card-description {
      position: relative;
    }

    .card-description h2 {
      font-size: 22px;
      margin: 12px 0 3px 0;
      line-height: 22px;
    }

    .card-description p {
      font-size: 14px;
      opacity: 0.7;
      font-weight: lighter;
    }

    a {
      position: absolute;
      text-decoration: none;
      color: $main;
      width: 50px;
      bottom: 0;
    }

    .card-see-infos {
      margin-top: 10px;
      width: 82px;
      color: #fff;
      background-color: $foodlab;
      font-size: 12px;
      padding: 5px 10px;
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 0.5px;
      border-radius: 3px;

      &:hover {
        background-color: $foodlab-hover;
      }

      &:active {
        background-color: $foodlab-active;
      }
    }
  }

  @media screen and (max-width: 728px) {
    .card {
      flex-direction: column;
      padding: 0;
      width: 100%;
      height: 100%;

      .badge-wrapper {
        top: 10px;
        left: 10px;
      }

      img {
        width: 100%;
        max-width: 500px;
        height: 110px;
        object-fit: cover;
      }

      .card-description {
        width: calc(100% - 40px);
        margin: 20px;
      }

      h2 {
        font-size: 15px;
        margin: 12px 0 3px 0;
        line-height: 22px;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
`;

const NEW_RESTAURANTS = [
  {
    name: "Le Manko",
    id: 61,
    type: "Péruvien",
    rate: 4.1,
    votes: 1000,
    address: "15 Avenue Montaigne, 75008",
    phone: "01 82 28 00 15",
    arr: "8",
    openingHours: "11h30-14h15 / 19h-2h",
    imageUrl:
      "https://www.infosbar.com/photo/art/grande/8922651-14145113.jpg?v=1455033802",
    price: "€€€",
    price_digit: 3,
    lat: 48.8655753,
    lng: 2.3030293,
    menuLink:
      "http://manko-paris.com/wp-content/uploads/2019/12/MENU_MANKO_EXTERIEUR-1.pdf",
    foodlabreview:
      "Tout en classe, fraîcheur et exotisme. Manko fait honneur au quartier dans lequel il s'est installé. Un accueil des plus chaleureux, une ambiance raffinée, moderne et intimiste qui a pour effet direct de vous mettre très a l'aise. La cuisine ouverte est un bonus qui ne dérange a aucun moment et entendre l'équipe s'exprimer en espagnol rajoute une dose d'authenticité. Les serveurs sont très disponible et à l'écoute sans jamais se montrer envahissants.",
    reviews: [
      {
        date: "12/2019",
        comment:
          "Le cadre est magnifique, l'ambiance chaleureuse. Un endroit idéale pour un anniversaire. En semaine plutôt calme, plus intime. Les plats sont délicieux, découverte de nouvelle saveurs ! Le service très satisfaisant.",
      },
      {
        date: "10/2019",
        comment:
          "Très bon accueil. De bons conseils pour les plats! Une déco de dingue et une ambiance de folie!!! Super lieu même pour juste un verre!",
      },
      {
        date: "07/2019",
        comment:
          "Chic et de bon goût, ambiance tamisée en dorures contemporaines avec une pointe de prohibition. Bon dans l'assiette et le service est accueillant... Et super musique",
      },
    ],
  },
  {
    name: "Dai Dai",
    id: 63,
    type: "Italien",
    rate: 4.5,
    votes: 250,
    address: "25 Rue Oberkampf, 75011",
    phone: null,
    arr: "11",
    openingHours: "12h-14h30 / 16h30-23h",
    imageUrl:
      "https://www.sortiraparis.com/images/80/87701/476333-dai-dai-paris-10-6.jpg",
    imageUrl2:
      "http://www.ofive.tv/wp-content/uploads/2018/04/313879-dai-dai-25-27-rue-oberkampf-75011-pari-article_diapo-1.jpg",
    price: "€€",
    price_digit: 2,
    lat: 48.8635571,
    lng: 2.369366,
    menuLink: "http://www.dai-dai.fr/",
    foodlabreview:
      "Cadre très sympathique avec ce magnifique four qui trône en plein milieu de la salle. Service impeccable - les serveurs sont très sympas - et superbes pizzas. Les produit sélectionnés sont de grande qualité et niveau goût et quantité les salades proposées à la carte ne sont pas en reste.",
    reviews: [
      {
        date: "12/2019",
        comment:
          "Pizza excellente. Le service est aussi au top, les serveurs sont très agréables ! Je recommande :)",
      },
      {
        date: "10/2019",
        comment:
          "C'était délicieux, les serveurs (surtout le barbu) sont adorables ! J'ai passé un très bon moment en plus de bien mangé",
      },
      {
        date: "07/2019",
        comment:
          "Très bonnes pizza napolitaines. Les ingrédients sont bien sourcés ça se sent dans l'assiette. Les serveurs sont dynamiques et souriants. La déco est sympa. Je recommande. Petit plus: on peut réserver",
      },
    ],
    award: {
      scroll: "fa-pizza-slice",
      icon: "fas fa-pizza-slice",
      description: "La meilleure pizza",
    },
  },
  {
    name: "Les Amis des Messina",
    id: 59,
    type: "Sicilien",
    rate: 4.4,
    votes: 1000,
    address: "81 Rue Réaumur, 75002",
    phone: "01 42 61 13 73",
    arr: "2",
    openingHours: "12h-15h30 / 19h-22h30",
    imageUrl:
      "https://sortir.telerama.fr/sites/tr_master/files/styles/m_plus_640x360/public/assets/images/place/74/25/5/originale.jpg?itok=nNojZ_jK",
    price: "€€",
    price_digit: 2,
    lat: 48.8668704,
    lng: 2.3482997,
    menuLink: "https://www.lesamisdesmessina.com/",
    foodlabreview:
      "Un petit paradis sicilien ! Cuisine du voyage, hospitalité, repas excellent et pour finir avec ces fameuses glaces pistache bacio, un régal. L'accueil est jovial et l'ambiance familiale, les serveurs d'une grande gentillesse. Une vraie cuisine italienne authentique comme là-bas, pleine de goût et de saveurs. Vous pouvez y aller les yeux fermés ! Goûtez le gâteau courgette, ricotta de la Mama, un délice. Prix très corrects.",
    reviews: [
      {
        date: "12/2019",
        comment:
          "Nous étions loin d'imaginer que l'on puisse prendre autant de plaisir dans ce restaurant sicilien. Le cadre est également très beau et reposant et le personnel est adorable.",
      },
      {
        date: "10/2019",
        comment:
          "La déco, de brique et de bois sous la verrière, renvoie une chaude atmosphère. Le service est souriant, sympathique, rapide et efficace. Quant à la cuisine, véritable cuisine sicilienne, dont la carte est renouvelée chaque jour, déborde d'imagination.",
      },
      {
        date: "07/2019",
        comment:
          "Une adresse dont on ne se lasse pas ! C'est bon, c'est frais, c'est bien servi ! Le lieu est joliment décoré. On est en Italie, chez la Mama, l espace d un déjeuner ! Le personnel est hyper sympa et on aime leur accent chantant ! La carte change assez souvent, pas de lassitude donc et toujours de belles surprises !",
      },
    ],
  },
];

const Card = ({ restaurant, scrollPosition = 0, tabIndex }) => (
  <div
    className={`tab-number-${tabIndex} restaurant`}
    role="link"
    tabIndex={tabIndex + 1}
  >
    <div className="card">
      <LazyLoadImage
        alt="restaurant-overview"
        scrollPosition={scrollPosition}
        src={restaurant.imageUrl}
        threshold={500}
      />

      <div className="card-description">
        <div className="card-header">
          <div className="card-header-type">
            {restaurant.type} -{" "}
            <span className="card-header-budget">{restaurant.price}</span>
          </div>
          <div className="card-header-rate">
            <i className="fas fa-star"></i> {restaurant.rate} (
            {restaurant.votes}+)
          </div>
        </div>
        <h2>{restaurant.name}</h2>
        <div className="card-restaurant-address">{restaurant.address}</div>
      </div>
    </div>
  </div>
);
