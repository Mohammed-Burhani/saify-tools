import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';
import type { Brand } from '@/lib/sanity/types';

interface BrandCardProps {
  brand: Brand;
  className?: string;
}

export default function BrandCard({ brand, className = '' }: BrandCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md hover:shadow-xl 
        transition-all duration-300 p-6 
        flex flex-col items-center justify-center 
        group hover:-translate-y-1
        ${className}
      `}
    >
      {/* Brand Logo */}
      <div className="w-full aspect-square mb-4 flex items-center justify-center bg-steel-50 rounded-lg group-hover:bg-steel-100 transition-colors overflow-hidden relative">
        {brand.logo ? (
          <Image
            src={urlFor(brand.logo).width(300).height(300).url()}
            alt={brand.name}
            width={300}
            height={300}
            className="object-contain p-4 group-hover:scale-105 transition-transform"
          />
        ) : (
          <span className="font-display font-bold text-2xl text-steel-400 opacity-50">
            {brand.name}
          </span>
        )}
      </div>

      {/* Brand Info */}
      <div className="text-center space-y-1">
        <p className="font-display font-semibold text-lg text-steel-900">
          {brand.name}
        </p>
        {brand.categories && brand.categories.length > 0 && (
          <p className="text-xs text-steel-500">
            {brand.categories.map(cat => cat.name).join(' • ')}
          </p>
        )}
      </div>

      {/* Featured Badge */}
      {brand.featured && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
            Featured
          </span>
        </div>
      )}
    </div>
  );
}
