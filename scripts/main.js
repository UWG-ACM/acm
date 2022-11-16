const app = Vue.createApp({
  data() {
    return {
      acmFallEvents: [
        {
          eventName: "End of Year Party",
          eventTime: "November 30th",
        },
        // {
        // eventName: "",
        // eventTime: "",
        // },
      ],
      acmSpringEvents: [
        {
          eventName: "TBD",
          eventTime: "January",
        },
        {
          eventName: "Game Jam",
          eventTime: "February",
        },
        {
          eventName: "LinkedIn/Career Workshop",
          eventTime: "March",
        },
        {
          eventName: "Resume Workshop",
          eventTime: "March",
        },
        {
          eventName: "TBD",
          eventTime: "April",
        },
        {
          eventName: "End Of Semester Party",
          eventTime: "May",
        },
        // {
        //   eventName: "",
        //   eventTime: "",
        // },
      ],
      events: [],
    };
  },
  computed: {
    showEvent() { 
      return this.events.length > 0;
    },
  },

  methods: {
    addEvent(eventObject) {
      this.events.push(eventObject);
    },
  },
});
