import { configureStore } from '@reduxjs/toolkit';
import leituraReducer from './slices/leituraSlice';
import dailyCardReducer from './slices/dailyCardSlice';
import promotionReducer from './slices/promotionSlice'; // Importa o slice de promoções

export const store = configureStore({
  reducer: {
    leitura: leituraReducer,
    dailyCard: dailyCardReducer,
    promotions: promotionReducer, // Adiciona promoções ao store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

console.log('🏪 Redux store criado:', store.getState());