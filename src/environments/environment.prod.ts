import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://ryb23pa0hh.execute-api.eu-central-1.amazonaws.com/dev',
    order: 'https://ryb23pa0hh.execute-api.eu-central-1.amazonaws.com/dev',
    import: 'https://oxzwcuqovf.execute-api.eu-central-1.amazonaws.com/dev',
    bff: 'https://ryb23pa0hh.execute-api.eu-central-1.amazonaws.com/dev',
    cart: 'https://ryb23pa0hh.execute-api.eu-central-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
