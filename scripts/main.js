const app = Vue.createApp({
  data() {
    return {
      acmFallEvents: [
        {
          eventName: "LAN Party",
          eventTime: "September 28th",
        },
        {
          eventName: "Icebreaker W/ Board Games",
          eventTime: "October 12th",
        },
        {
          eventName: "Google Event",
          eventTime: "October 18th",
        },
        {
          eventName: "Ribbon Cutting Ceremony",
          eventTime: "October 20th",
        },
        {
          eventName: "Halloween Party",
          eventTime: "October 26th",
        },
        {
          eventName: "Alumni Panel",
          eventTime: "November 9th",
        },
        {
          eventName: "LAN Party",
          eventTime: "November 16th",
        },
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
