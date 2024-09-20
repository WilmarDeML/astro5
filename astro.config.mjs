// @ts-check
import { defineConfig,envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  env: {
    schema: {
      MOSTRAR_BOTON_COMPRAR: envField.boolean({ default: true, context: 'server', access: 'public' }),
      // ENDPOINT_SCORE_API: envField.string({context: 'client', access: 'public'}), // definir variable de entorno para obtener desde el cliente
      ENDPOINT_SCORE_API: envField.string({context: 'server', access: 'public'}),
    }
  }
});