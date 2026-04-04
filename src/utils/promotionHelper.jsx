import { extractOracleField } from '../components/sections/Catalog';

export function applyPromotions(product, promotions) {
  let discount = 0;

  promotions.forEach((promo) => {
    const now = new Date();
    const validUntil = new Date(promo.validUntil);

    console.log('Checking promotion:', promo.name);

    if (validUntil >= now) {
      const appliesToCategory = promo.appliesTo.categories.includes(product.category);
      const appliesToSubcategory = promo.appliesTo.subcategories.includes(product.subcategory);
      const appliesToProduct = promo.appliesTo.products.includes(product.title);
      const isException = promo.exceptions.includes(product.title);

      console.log('Applies to category:', appliesToCategory, 'Category:', product.category);
      console.log('Applies to subcategory:', appliesToSubcategory, 'Subcategory:', product.subcategory);
      console.log('Applies to product:', appliesToProduct, 'Product:', product.title);
      console.log('Is exception:', isException);

      if ((appliesToCategory || appliesToSubcategory || appliesToProduct) && !isException) {
        let productPrice = 0;

        if (product.oracles) {
          productPrice = extractOracleField(product, 'price');
        } else if (product.price) {
          productPrice = parseFloat(
            product.price.replace(/[^\d,]/g, '').replace(',', '.') || 0
          );
        }

        console.log('Product price for discount calculation:', productPrice);

        if (promo.type === 'percentage' && productPrice > 0) {
          const calculatedDiscount = (productPrice * promo.value) / 100;
          discount = Math.max(discount, Math.min(calculatedDiscount, productPrice));
        } else if (promo.type === 'fixed' && productPrice > 0) {
          discount = Math.max(discount, Math.min(promo.value, productPrice));
        }
      }
    }
  });

  console.log('Final discount for product:', product.title, discount);
  return discount;
}