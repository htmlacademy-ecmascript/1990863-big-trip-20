import AbstractView from '../framework/view/abstract-view.js';

function createTitleDestinations(destinations, uniqDestinations) {
  if(destinations.length <= 3 || uniqDestinations.length <= 2){
    return destinations.map((destination, index) => {
      if(index === 0) {
        return destination;
      } else{
        return `${destination !== uniqDestinations[0] && destination !== destinations[destinations.length - 1] && destination !== destinations[index - 1] || index === destinations.length - 1 ? `&mdash; ${destination}` : ''}`;
      }
    }).join('');
  } else {
    return `${destinations[0]} &mdash; &#8230; &mdash; ${destinations[destinations.length - 1]}`;
  }
}

function createInfoDate(tripInfo) {
  const { monthStart, dayStart, monthEnd, dayEnd} = tripInfo;
  if(monthStart === monthEnd) {
    return `${monthStart} ${dayStart}&nbsp;&mdash;&nbsp;${dayEnd}`;
  } else {
    return `${dayStart} ${monthStart}&nbsp;&mdash;&nbsp;${dayEnd} ${monthEnd}`;
  }
}

function createTripView(points, tripInfo) {
  const {price, destinations, uniqDestinations} = tripInfo;

  const titlesDestinations = createTitleDestinations(destinations, uniqDestinations);
  const infoDate = createInfoDate(tripInfo);
  return `
  <section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${titlesDestinations}</h1>
      <p class="trip-info__dates">${infoDate}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>
  </section>`;
}

export default class TripView extends AbstractView{
  #points = [];
  #tripInfo = null;
  constructor({points, tripInfo}){
    super();
    this.#points = points;
    this.#tripInfo = tripInfo;
  }

  get template() {
    return createTripView(this.#points, this.#tripInfo);
  }

}
