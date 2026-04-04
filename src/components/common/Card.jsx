import { motion } from 'framer-motion'


const Card = ({
  title,
  description,
  price,
  originalPrice,
  discount,
  icon,
  variant = 'preco',
  className = '',
  indisponivel = false,
  badgeText,
  destacado = false,
  popularText = '⭐ Mais Popular',
}) => {
  const badge = badgeText !== undefined ? badgeText : 'indisponivel'

    let showDiscount = discount && !indisponivel;


  // Calcula preço com desconto se houver discount
  let finalPrice = price
  let originalToShow = originalPrice
  if (discount && !indisponivel) {
    // Aceita desconto como string 'R$ 2,00' ou número
    let priceNum = typeof price === 'string' ? parseFloat(price.replace(/[^\d,]/g, '').replace(',', '.')) : price
    let discountNum = typeof discount === 'string' ? parseFloat(discount.replace(/[^\d,]/g, '').replace(',', '.')) : discount
    if (!isNaN(priceNum) && !isNaN(discountNum) && discountNum > 0) {
      finalPrice = `R$ ${(priceNum - discountNum).toFixed(2).replace('.', ',')}`
      originalToShow = price
      showDiscount = true
    }
  }

  return (
    <motion.div
      className={[
        'relative bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full mx-auto flex flex-col',
        // Altura fixa para todos os cards
        ' min-h-[320px] max-w-[310px]',
        destacado
          ? 'border-2 border-gold/80 border-pulse-animation bg-gradient-to-br from-gold/10 via-purple-dark/20 to-gold/10'
          : 'border-gold/20',
        indisponivel && 'opacity-60 saturate-50',
        className,
      ].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={
        indisponivel
          ? {}
          : {
              scale: 1.02,
              boxShadow: destacado
                ? '0 25px 50px -12px rgba(255, 215, 0, 0.4)'
                : '0 20px 40px -12px rgba(255, 215, 0, 0.3)',
              borderColor: destacado
                ? 'rgba(255, 215, 0, 1)'
                : 'rgba(255, 215, 0, 0.4)'
            }
      }
      transition={{
        duration: 0.7,
        delay: 0.1,
        scale: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      }}
      viewport={{ once: true }}
    >
      {/* Container de Badges no Topo */}
      <div className="absolute -top-2 left-0 right-0 flex justify-center items-center gap-1 z-10">
        {/* Badge Mais Popular */}
        {destacado && (
          <span className="bg-gold-gradient text-midnight px-3 py-1 rounded-full text-xs font-montserrat font-semibold uppercase tracking-wider shadow-lg">
            {popularText}
          </span>
        )}

        {/* Badge de Desconto */}
        {showDiscount && !indisponivel && (
          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
            OFERTA
          </span>
        )}

        {/* Badge Indisponível */}
        {indisponivel && (
          <span className="bg-gradient-to-r from-gold to-yellow-500 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Conteúdo Superior - Ícone e Título */}
      <div className="flex flex-col items-center mb-4 mt-2">
        {icon && (
          <div className="text-gold flex justify-center rounded-full w-fit mx-auto mb-3">
            {icon}
          </div>
        )}
        <h3 className={`text-lg font-vollkorn font-bold tracking-wide text-center leading-tight ${destacado ? 'text-gold' : 'text-gold'}`}>
          {title}
        </h3>
      </div>

      {/* Preço - Sempre no bottom */}
      {finalPrice && variant === 'preco' && (
        <div className="text-center mt-auto mb-4 pt-4">
          {showDiscount ? (
            <div className="relative">
              <p className="text-4xl text-primary/10 line-through font-lato mb-1">
                {originalToShow}
              </p>
              <p className={`text-xl font-bold font-montserrat relative -mt-4 ${destacado ? 'text-gold' : 'text-gold'}`}>
                {finalPrice}
              </p>
            </div>
          ) : (
            <p className={`text-4xl font-bold font-montserrat ${destacado ? 'text-gold' : 'text-gold'}`}>
              {finalPrice}
            </p>
          )}
        </div>
      )}

      {/* Seção Central - Flex grow para empurrar preço para baixo */}
      <div className="flex-grow flex flex-col justify-center">
        {/* Descrição */}
        {description && (
          <p className={`text-sm leading-relaxed text-center  ${destacado ? 'text-primary/90 font-medium' : 'text-primary/80'}`}>
            {description}
          </p>
        )}
      </div>

      {/* Efeito decorativo */}
      <div className={`absolute top-0 left-1 h-1 rounded-t-xl ${
        destacado
          ? 'bg-gradient-to-r border-top-pulse from-gold/50 w-[97%] via-gold to-gold/50'
          : 'bg-gradient-to-r from-transparent w-full via-gold/30 to-transparent'
      }`}></div>
    </motion.div>
  )
}

export default Card