import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { applyPromotions } from '../../utils/promotionHelper';
import Card from '../common/Card';
import Carousel from '../common/Carousel';
import { renderIcon } from '../../utils/iconHelper';
import CategoryFilter from '../common/CategoryFilter';
import { useSelector } from 'react-redux';

export function extractOracleField(card, field) {
  if (card.oracles && typeof card.oracles === 'object') {
    let values = [];
    for (const key in card.oracles) {
      if (
        card.oracles[key] &&
        typeof card.oracles[key] === 'object' &&
        card.oracles[key][field]
      ) {
        values.push(card.oracles[key][field]);
      }
    }
    console.log('Extracted values for field:', field, values);
    if (values.length) {
      const nums = values
        .map((v) => parseFloat(String(v).replace(/[^\d,]/g, '').replace(',', '.')))
        .filter((num) => !isNaN(num)); // Filtra valores inválidos
      console.log('Valid numeric values:', nums);
      if (nums.length > 0) {
        const min = Math.min(...nums);
        console.log('Minimum value:', min);
        return min; // Retorna o valor numérico mínimo
      }
    }
  }
  console.log('No valid values found for field:', field);
  return 0; // Retorna 0 se não houver valores válidos
}

function extractOracleDiscount(card) {
  if (card.oracles && typeof card.oracles === 'object') {
    let values = [];
    for (const key in card.oracles) {
      if (
        card.oracles[key] &&
        typeof card.oracles[key] === 'object' &&
        card.oracles[key].discount
      ) {
        values.push(
          parseFloat(
            String(card.oracles[key].discount)
              .replace(/[^\d,]/g, '')
              .replace(',', '.')
          )
        );
      }
    }
    const validDiscounts = values.filter((v) => !isNaN(v));
    if (validDiscounts.length > 0) {
      return Math.min(...validDiscounts); // Retorna o menor desconto válido
    }
  }
  return 0; // Retorna 0 se não houver descontos válidos
}

const Catalog = () => {
  const categories = [...new Set(servicesData.map((s) => s.category))];

  const promotions = useSelector((state) => state.promotions.activePromotions);
  return (
    <section
      id="store"
      className="mt-7 md:mt-5 mx-2 md:mx-16 py-12 px-4 sm:py-16 md:py-20"
    >
      <div className="max-w-8xl mx-auto">
        {categories.map((category) => {
          const cards = servicesData.filter((s) => s.category === category);
          const subcategoriesBase = [
            ...new Set(cards.map((s) => s.subcategory).filter(Boolean)),
          ].map((sc) => ({ id: sc, name: sc }));

          const subcategories =
            subcategoriesBase.length > 0
              ? [{ id: '', name: 'Todos' }, ...subcategoriesBase]
              : [];

          const [activeSubcategory, setActiveSubcategory] = useState('');
          const filteredCards = activeSubcategory
            ? cards.filter((s) => s.subcategory === activeSubcategory)
            : cards;

          const sortedCards = filteredCards.sort((a, b) => {
            if (a.title.toLowerCase().includes('sim ou não')) return -1;
            if (b.title.toLowerCase().includes('sim ou não')) return 1;

            const getPrice = (card) => {
              if (card.oracles) {
                const price = extractOracleField(card, 'price');
                return price !== null ? price : 0;
              } else if (card.cigano) {
                return parseFloat(
                  card.cigano.price.replace(/[^\d,]/g, '').replace(',', '.')
                );
              } else if (card.tarot) {
                return parseFloat(
                  card.tarot.price.replace(/[^\d,]/g, '').replace(',', '.')
                );
              }
              return 0;
            };

            return getPrice(a) - getPrice(b);
          });

          return (
            <div key={category} className="mb-16 max-w-7xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 text-gold  uppercase tracking-wide font-vollkorn">
                {category}
              </h3>
              {subcategories.length > 0 && (
                <CategoryFilter
                  items={subcategories}
                  activeItem={activeSubcategory}
                  onItemChange={setActiveSubcategory}
                />
              )}
              <div className="relative flex items-start mt-6 max-h-[400px]">
                <Carousel slidesToShow={4}>
                  {sortedCards.map((card) => {
                    const promotionDiscount = applyPromotions(card, promotions);
                    const basePrice = card.oracles
                      ? extractOracleField(card, 'price')
                      : card.price
                      ? parseFloat(
                          card.price.replace(/[^\d,]/g, '').replace(',', '.')
                        )
                      : 0;

                    console.log('Base Price:', basePrice);
                    console.log('Promotion Discount:', promotionDiscount);

                    const discount =
                      promotionDiscount > 0
                        ? promotionDiscount
                        : extractOracleDiscount(card);

                    console.log('Final Discount:', discount);

                    const finalPrice = basePrice - discount;

                    console.log('Final Price:', finalPrice);

                    const formattedPrice = `R$ ${finalPrice
                      .toFixed(2)
                      .replace('.', ',')}`;
                    const formattedOriginalPrice =
                      basePrice > 0
                        ? `R$ ${basePrice.toFixed(2).replace('.', ',')}`
                        : `R$ 0,00`;

                    return (
                      <div
                        className="h-full flex items-start justify-start py-2"
                        key={card.title}
                      >
                        <Card
                          title={card.title}
                          description={card.description}
                          price={formattedPrice}
                          originalPrice={formattedOriginalPrice}
                          discount={discount > 0 ? discount : null}
                          promotionMessage={
                            discount > 0 ? 'Promoção ativa!' : ''
                          }
                          icon={
                            card.icon
                              ? renderIcon(card.icon, {
                                  size: 32,
                                  className: 'text-gold mb-2',
                                })
                              : null
                          }
                          destacado={!!card.destacado}
                          badgeText={card.badgeText}
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 40 }}
                          whileHover={{
                            scale: 1.04,
                            boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.25)',
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 0.1,
                            scale: { duration: 0.3 },
                            boxShadow: { duration: 0.3 },
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;