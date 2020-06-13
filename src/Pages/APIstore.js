import { runInAction, extendObservable, action } from "mobx";

export default extendObservable(this, {
  people: [],
  loading: false,
  loadPeople: action(async () => {
    this.loading = true;
    const response = await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");
    const json = await response.json();
    runInAction(() => {
      this.people = json.results;
      this.loading = false;
    });
  })
});