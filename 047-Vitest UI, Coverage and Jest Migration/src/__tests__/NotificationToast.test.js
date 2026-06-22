// Снапшот-тестирование позволяет убедиться, что результат рендеринга
// компонента не изменился неожиданным образом. В данном примере
// рассматриваются как обычные снапшоты, сохраняемые в отдельных файлах,
// так и inline snapshots, хранящиеся непосредственно в тесте.
import { mount } from "@vue/test-utils";
import NotificationToast from "@/components/NotificationToast.vue";
import { describe, expect, test } from "vitest";

describe("Notification Component", () => {
  //снапшот, сохраняемый в отдельном файле
  test("renders the correct style for error", () => {
    const status = "error";
    const wrapper = mount(NotificationToast, { props: { status } });
    expect(wrapper.html()).toMatchSnapshot();
  });
  //снапшот, хранящийся непосредственно в тесте.
  test("renders the correct style for error", () => {
    const status = "error";
    const wrapper = mount(NotificationToast, { props: { status } });
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div role="alert" class="notification notification--errors">
        <p class="notification__text"></p><button data-testid="close-notification" title="close" class="notification__button"> ✕ </button>
      </div>"
    `); // вот тут он автоматически сохраняется
  });
  test("renders the correct style for success", () => {
    const status = "success";
    const wrapper = mount(NotificationToast, { props: { status } });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--success"]),
    );
  });
  test("renders the correct style for info", () => {
    const status = "info";
    const wrapper = mount(NotificationToast, { props: { status } });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--info"]),
    );
  });
  test("notification slides up when message is empty", () => {
    const message = "";
    const wrapper = mount(NotificationToast, { props: { message } });
    expect(wrapper.classes("notification--slide")).toBe(false);
  });
  test("emmits event when close button is clicked", async () => {
    const wrapper = mount(NotificationToast, {
      data() {
        return {
          clicked: false,
        };
      },
    });
    const closeButton = wrapper.find("button");
    await closeButton.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("clear-notification");
  });
  test("renders correct message to viewer", () => {
    const message = "Something happened, try again";
    const wrapper = mount(NotificationToast, { props: { message } });
    expect(wrapper.find("p").text()).toBe(message);
  });
});
