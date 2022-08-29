const app = Vue.createApp({
  data() {
    return {
      acmFallEvents: [
        {
          eventName: "Welcome Party",
          eventTime: "August 17th",
        },
        {
          eventName: "Karaoke Night",
          eventTime: "August 31st",
        },
        {
          eventName: "Game Design Workshop",
          eventTime: "September 14th",
        },
        {
          eventName: "Cursed Code Competition",
          eventTime: "September 21st",
        },
        {
          eventName: "LAN Party",
          eventTime: "September 28th",
        },
        {
          eventName: "Alumni Panel",
          eventTime: "October 12th",
        },
        {
          eventName: "LAN Party",
          eventTime: "October 19th",
        },
        {
          eventName: "Halloween Party",
          eventTime: "October 26th",
        },
        {
          eventName: "3D Modeling",
          eventTime: "November 9th",
        },
        {
          eventName: "3D Printing",
          eventTime: "November 16th",
        },
        {
          eventName: "LAN Party",
          eventTime: "November 23rd",
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
