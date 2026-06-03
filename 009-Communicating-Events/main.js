const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart({ id, toDo }) {
      if (toDo === "add") {
        this.cart.push(id);
      } else if (toDo === "remove") {
        const index = this.cart.indexOf(id);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }
    },
  },
});
