<template>
  <div class="about">
    <div class="content">
      <div class="title">
        Contact me
      </div>
      <div class="leading">
          Looking to hire me, want to know a bit more on what I can help you with?
      </div>
      <div class="blurb">
        I take my slogan seriously, I understand that an idea is precious and I
        will do our utmost to deliver your grand vision in front of your eyes.
        Keep reading to see how this can be acheived.
      </div>
      <div class="tennet">
        <div class="title">
          Communication
        </div>
        <div>
          From our first consulation to the final delivery we will aim to make
          sure to give regular updates, have friendly chats and take you through
          the progress of turning your idea into something we are all proud of.
        </div>
      </div>
      <div class="tennet">
        <div class="title">
          Quality
        </div>
        <div>
          I pride myself with making sure we produce top quality code, using the
          latest and most stable technology out there. We are confident of our
          workmanship that is why we offer a complamentary warranty period of 3
          months after delivery.
        </div>
      </div>
      <div class="tennet">
        <div class="title">
          Evoloution
        </div>
        <div>
          We know ideas can evolve as you see your vision take shape and we will
          accomodaite changes that may occur whilst development takes place.
        </div>
      </div>
      <div class="tennet">
        <div class="title">
          Affordability
        </div>
        <div>
          We know coding time can be expensive, I have some premade templates
          which I won't bill you for, I will make sure we can make turning your
          idea into reality without breaking the bank. We give an upfront
          estimate with our projects and break down costs, we aim to use the
          most reliable services without burning a hole in your wallet.
        </div>
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
