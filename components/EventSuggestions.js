// app.component("eventsuggestions", {
//   template:
//     /*html*/
//     `
//     <div id="eventFormBorder">
//         <form @submit="onSubmit" id="formId">
//             <div id="eventFormAlignment">
//                  <label id="eventSuggestion">Event Suggestion:</label>
//                  <input id="eventName" name="eventName" placeholder="Suggestion..." required/>
//                  <button v-on:click= "handleSubmit" id="suggestionSubmit" type="submit" value="Submit Event Suggestion">Submit Suggestion</button>
//             </div>
//         </form>
//         <img id="uwgShield" src="images/uwgShield.jpg" alt="UWG Shield" />
//     </div>

//     `,
//   data() {
//     return {
//       eventname: "",
//     };
//   },
//   methods: {
//     handleSubmit() {
//       let eventObject = {
//         eventname: this.eventname,
//       };
//       this.$emit("submit", this.eventname);
//     },
//   },
// });
