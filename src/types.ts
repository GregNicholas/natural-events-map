export interface EventData {
    eventData: [{
        id: String;
        title: String;
        description: any;
        link: String;
        closed: any;
        categories: {id: String; title: String;}[];
        sources: any;
        geometry: {
          magnitudeValue: Number;
          magnitudeUnit: String;
          date: String;
          type: String;
          coordinates: [Number, Number]
        }[]
      }]
}