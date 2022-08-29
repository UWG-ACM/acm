app.component("events", {
  props: {
    event_array: {
      type: Array,
    },
  },
  /*html*/
  template: `
  <div id=acmEventSchedule>
      <div id="eventDetails">
        <ul v-for="(event, index) in event_array" :key="index">
          <div id="eventName">
            <ol><b>{{event.eventName}}</b><br>
          </div> 
          {{event.eventTime}}<br></ol>       
         </ul>
      </div>
  </div>
    `,
});
