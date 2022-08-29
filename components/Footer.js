app.component("acm-footer", {
  /*html*/
  template: `
  <div id="acmFooter">
    <div id="acmContactInfo">
      <a href="mailto:acmhelp@acm.org"
      title="ACM Email"
      >ACM Email: acmhelp@acm.org</a><br>

      <a href="tel:1-800-342-6626"
      title="US Number for ACM">1-800-342-6626 (US)</a><br>
    
      <a href="tel:+1-212-626-0500"
      title="Global Number for ACM">+1-212-626-0500 (Global)</a><br><br>
    </div>

    <div id="acmWebsite">
      <a href="https://www.acm.org/"
      title="Referral to ACM website"
      >Website: https://www.acm.org/</a>
    </div>

    <div id="acmCopyright">
      <a href="https://www.acm.org/publications/policies/copyright-policy"
      title="Referral to ACM copyright"
      >Copyright: https://www.acm.org/publications/policies/copyright-policy</a>
    </div>

    <div id="acmPrivacyPolicy">
      <a href="https://www.acm.org/about-acm/privacy-policy"
      title="Referral to ACM privacy policy"
      >Privacy Policy: https://www.acm.org/about-acm/privacy-policy</a>
    </div>
  </div>
    `,
});
