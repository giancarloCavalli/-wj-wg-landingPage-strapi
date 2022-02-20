import { post } from "axios";

const netlifyWebhook = strapi.config.get("custom.netlifyWebhook")

export async function afterUpdate(_) {
  netlifyWebhook && post(netlifyWebhook);
}
export async function afterCreate(_) {
  netlifyWebhook && post(netlifyWebhook);
}
