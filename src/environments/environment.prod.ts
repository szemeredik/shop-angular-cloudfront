import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://edeupbwwm0.execute-api.eu-central-1.amazonaws.com/dev',
    order: 'https://edeupbwwm0.execute-api.eu-central-1.amazonaws.com/dev',
    import: 'https://p2th1l7x55.execute-api.eu-central-1.amazonaws.com/dev',
    bff: 'https://edeupbwwm0.execute-api.eu-central-1.amazonaws.com/dev',
    cart: 'https://edeupbwwm0.execute-api.eu-central-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
