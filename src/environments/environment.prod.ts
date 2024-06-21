import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://1k2a51u50g.execute-api.eu-central-1.amazonaws.com/dev',
    order: 'https://1k2a51u50g.execute-api.eu-central-1.amazonaws.com/dev',
    import: 'https://iof9qtnvlj.execute-api.eu-central-1.amazonaws.com/dev',
    bff: 'https://1k2a51u50g.execute-api.eu-central-1.amazonaws.com/dev',
    cart: 'https://1k2a51u50g.execute-api.eu-central-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
