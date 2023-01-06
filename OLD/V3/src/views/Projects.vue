<template>
  <div class="about">
    <div class="content">
      <div class="title">
        Past projects
      </div>
      <div class="leading">
        Project Luna
      </div>
      <div class="blurb">
        Commisioned as a tool where business owners or data science staff could
        look at people who are engaging with their posts on Linked in.
      </div>
      <div class="blurb">
        I worked on a tool written in Python to scrape data and process it for
        use on a companies' analytics page.
      </div>
      <div class="leading">
        Bubblebutt Fitness
      </div>
      <div class="blurb">
        Worked with them as a client in 2018, it was a start up selling fitness
        equitment for use in a home gym. This was stuff like yoga mats, medicine
        balls, etc.
      </div>
      <div class="blurb">
        Worked on their e-shop which allowed customers to buy products, had an
        inventory management system and a small admin area where the owners
        could make changes if needed.
      </div>
      <div class="blurb">
        Sadly the company is no more, however if I get permission, I will
        include an archived copy of the website on this site in future.
      </div>
    </div>
  </div>
</template>

<style lang="less">
.about {
  @media screen and (min-width: 981px) {
    background-image: url("../assets/alessandro-bianchi-_kdTyfnUFAc-unsplash.png");
    background-repeat: no-repeat;
    background-size: auto;
  }
}
.content {
  font-family: "Barlow Condensed", sans-serif;
  @media screen and (max-width: 980px) {
    padding: 45px 70px 45px 0;
    margin-left: 70px;
  }
  @media screen and (min-width: 981px) {
    padding: 40px 245px 45px 45px;
    margin-left: 250px;
  }
  .title {
    font-size: 36px;
  }
  .leading {
    font-size: 26px;
    padding: 15px 0;
  }
  .blurb {
    font-size: 20px;
    padding: 15px 0;
  }
  .tennet {
    padding: 15px 0;
    .title {
      font-size: 22px;
    }
    .blurb {
      font-size: 18px;
    }
  }
}
</style>
