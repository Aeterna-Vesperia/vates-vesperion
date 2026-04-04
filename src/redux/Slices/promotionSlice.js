import { createSlice } from '@reduxjs/toolkit';
import { promotions } from '../../data/promotions'; // Importa as promoções

const promotionSlice = createSlice({
  name: 'promotions',
  initialState: {
    activePromotions: promotions, // Usa as promoções do arquivo como estado inicial
  },
  reducers: {
    addPromotion: (state, action) => {
      state.activePromotions.push(action.payload);
    },
    removePromotion: (state, action) => {
      state.activePromotions = state.activePromotions.filter(
        (promo) => promo.id !== action.payload
      );
    },
  },
});

export const { addPromotion, removePromotion } = promotionSlice.actions;
export default promotionSlice.reducer;