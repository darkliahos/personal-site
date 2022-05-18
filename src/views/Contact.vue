<template>
  <div class="about">
    <div class="content">
      <div class="title">
        Contact me
      </div>
      <div class="leading">
        Looking to hire me, want to know a bit more on what I can help you with?
      </div>
      <form>
        <div class="form-group">
          <label for="txt-email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="txt-email"
            v-model="email"
            aria-describedby="emailHelp"
            placeholder="someone@something.com"
          />
          <small id="emailHelp" class="form-text text-muted"
            >I'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="txt-subject">Subject</label>
          <input
            v-model="subject"
            class="form-control"
            id="txt-subject"
            placeholder="Quote for some work"
          />
        </div>
        <div class="form-group">
          <label for="txt-details">Details</label>
          <textarea
            class="form-control"
            id="txt-details"
            v-model="details"
            placeholder="I would like a cool website with some cool features"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
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
