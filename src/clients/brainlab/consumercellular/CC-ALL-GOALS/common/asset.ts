export const pageData = {
  planPage: {
    desktopCtaSelector: "div.hide-phone-down button.btn-shop",
    mobileCtaSelector: "div#mobile-bill-breakdown button.btn-shop",
    mBoxName: "plan-page-add-to-cart",
    targetClass: "bill-box",
    siblingClass: "base-dollar-display-component",
  },
  planPageUpdate: {
    desktopCtaSelector: "div.hide-phone-down button.btn-shop",
    mobileCtaSelector: "div#mobile-bill-breakdown button.btn-shop",
    mBoxName: "plan-page-update",
    targetClass: "bill-box",
    siblingClass: "btn-shop",
  },
  shoppingPage: {
    desktopCtaSelector: "div.btn-checkout>a.btn-shop",
    mobileCtaSelector: "div.review-order-button>a.btn-shop",
    mBoxName: "shopping-page-review-order",
    mobileTargetClass: "main-content",
    mobileSiblingClass: "input-component-frame",
    desktopTargetClass: "checkout-column",
    desktopSiblingClass: "checkout-column",
  },
  overViewPage: {
    mBoxName: "overview-page-add-to-cart",
    desktopCtaSelector: "div.product-details>div.hide-phone-down>button",
    desktopTargetClass: "product-details",
    desktopSiblingClass: "trade-in-prompt",
    mobileCtaSelector: "div.device-details>div.hide-phone-up>button",
    mobileTargetClass: "device-details",
    mobileSiblingClass: "reserve-device-modal",
  },
  bringYourDevicePage: {
    mBoxName: "bring-your-device-page-add-to-cart",
    desktopCtaSelector: "div.hide-phone-down>button.config-add-to-cart",
    desktopTargetClass: "trade-in-prompt",
    desktopSiblingClass: "rsa-options",
    mobileCtaSelector: "div.button-tray>button.btn-shop",
    mobileTargetId: "shopping-page-container",
    mobileSiblingClass: "device-details",
  },
  configurePage: {
    mBoxName: "configure-page-add-to-cart",
    desktopCtaSelector: "div.hide-phone-down>button.config-add-to-cart",
    desktopTargetClass: "product-configurator-component",
    desktopSiblingClass: "rsa-options",
    mobileCtaSelector: "div.button-tray>button.config-add-to-cart",
    mobileTargetClass: "device-config",
    mobileSiblingClass: "shop-loader",
  },
};
