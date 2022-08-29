app.component("acm-header", {
  /* html */
  template: `
    <div id="clubLogo">
       <img
            id="acmLogo"
            src="images/acm_logo.png"
            alt="Picture of the ACM logo"
            width="200"
            height="80"
        />
    </div>

    <nav aria-label="acmNavigation">
        <acm-nav></acm-nav>
    </nav>
    `,
});
