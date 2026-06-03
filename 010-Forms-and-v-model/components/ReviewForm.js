app.component("review-form", {
  template:
    /*html*/
    `
      <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>
        <textarea name="review" id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select name="rating" id="rating" v-model.number="rating">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <p>Would you recommend this product?:</p>
        <div class="radio-wrapper">          
          <input type="radio" id="yes" name="i_recommend" v-model="iRecommend" value="1">
          <label for="html">Yes</label><br>
          <input type="radio" id="no" name="i_recommend" v-model="iRecommend" value="0">
          <label for="css">No</label><br>
        </div>
        <input type="submit" class="button" value="Submit">
      </form>
    `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      iRecommend: 1,
    };
  },
  methods: {
    onSubmit() {
      if (this.name == "" || this.review == "" || this.rating == null) {
        alert("review is incomplete. Please fill out every field.");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        iRecommend: this.iRecommend,
      };
      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.iRecommend = 1;
    },
  },
});
