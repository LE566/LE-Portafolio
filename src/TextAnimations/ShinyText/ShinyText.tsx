import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}
// Componente ShinyText modificado
const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 3, className = '' }) => {
  // Genera un delay aleatorio entre 0s y 2s para cada instancia
  const randomDelay = `${Math.random() * 2}s`;
  
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Texto base */}
      <span className="text-gray-400">{text}</span>
      
      {/* Capa shine con delay único */}
      {!disabled && (
        <span
          className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.8)_50%,transparent_65%)] bg-[length:200%_100%] bg-clip-text text-transparent"
          style={{
            animation: `shine ${speed}s linear infinite`,
            animationDelay: randomDelay // ¡Delay aleatorio aquí!
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default ShinyText;

